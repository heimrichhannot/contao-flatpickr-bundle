<?php


namespace HeimrichHannot\FlatpickrBundle\Util;


use Contao\DataContainer;
use Contao\PageModel;
use HeimrichHannot\FlatpickrBundle\Asset\FrontendAsset;
use HeimrichHannot\FlatpickrBundle\Event\CustomizeFlatpickrOptionsEvent;
use HeimrichHannot\FlatpickrBundle\Manager\FlatpickrManager;
use HeimrichHannot\TwigSupportBundle\Filesystem\TwigTemplateLocator;
use HeimrichHannot\TwigSupportBundle\Renderer\TwigTemplateRenderer;
use HeimrichHannot\TwigSupportBundle\Renderer\TwigTemplateRendererConfiguration;
use HeimrichHannot\UtilsBundle\Dca\DcaUtil;
use HeimrichHannot\UtilsBundle\Model\ModelUtil;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

/**
 *
 */
class FlatpickrUtil
{
    const FLATPICKR_BTN_TEMPLATE_DEFAULT = "btn_datepicker";

    /**
     * @var TwigTemplateRenderer
     */
    protected $twigTemplateRenderer;
    /**
     * @var ModelUtil
     */
    private $modelUtil;
    /**
     * @var DcaUtil
     */
    private $dcaUtil;
    /**
     * @var FrontendAsset
     */
    private $frontendAsset;
    /**
     * @var EventDispatcherInterface
     */
    private $eventDispatcher;
    /**
     * @var FlatpickrManager
     */
    private $flatpickrManager;
    /**
     * @var TwigTemplateLocator
     */
    private $templateLocator;

    public function __construct(
        ModelUtil $modelUtil,
        DcaUtil $dcaUtil,
        FrontendAsset $frontendAsset,
        EventDispatcherInterface $eventDispatcher,
        FlatpickrManager $flatpickrManager,
        TwigTemplateLocator $templateLocator,
        TwigTemplateRenderer $twigTemplateRenderer
    ) {
        $this->modelUtil        = $modelUtil;
        $this->dcaUtil          = $dcaUtil;
        $this->frontendAsset    = $frontendAsset;
        $this->eventDispatcher  = $eventDispatcher;
        $this->flatpickrManager = $flatpickrManager;
        $this->templateLocator  = $templateLocator;
        $this->twigTemplateRenderer = $twigTemplateRenderer;
    }

    /**
     * get flatpickr config data
     *
     * @param array $attributes
     * @param DataContainer|null $dc
     * @return array
     *
     * @deprecated Use FlatpickrOptions instead
     *
     */
    public function getFlatpickrAttributes(array $attributes, $dc = null): array
    {
        if (!isset($attributes['flatpickr']['active']) || !$attributes['flatpickr']['active']) {
            return [];
        }

        $this->addFrontendAssets($attributes);

        $options         = $attributes['flatpickr']['options'];
        $options['rgxp'] = $attributes['rgxp'];

        $event = $this->eventDispatcher->dispatch(CustomizeFlatpickrOptionsEvent::NAME,
            new CustomizeFlatpickrOptionsEvent(
                $this->flatpickrManager->getOptionsAsArray($options),
                $attributes,
                $dc
            ));

        return [
            'data-input' => '1',
            'prefix' => 'flatpickr',
            'data-flatpickr' => json_encode($event->getFlatpickrOptions())
        ];
    }

    /**
     * @param array $config
     * @return string
     * @throws \HeimrichHannot\TwigSupportBundle\Exception\TemplateNotFoundException
     */
    public function getFlatpickrBtnTemplate(array $config)
    {
        $templateName = $config['flatpickr']['options']['customBtnTpl'] ?: self::FLATPICKR_BTN_TEMPLATE_DEFAULT;

        return $this->templateLocator->getTemplatePath($templateName);
    }


    public function compilePicker(array $attributes, array &$options, string $inputPosition)
    {
        $template = $this->getFlatpickrBtnTemplate($attributes);
        $picker   = $this->getFlatpickrType($attributes);

        $rendererContext = (new TwigTemplateRendererConfiguration())->setTemplatePath($template);

        $options[$inputPosition] = $this->twigTemplateRenderer->render($template, ['picker' => $picker], $rendererContext);
    }


    /**
     * return the type according to the configured rgxp
     * default is datepicker
     *
     * @param array $config
     * @return string
     */
    public function getFlatpickrType(array $config): string
    {
        switch ($config['rgxp']) {
            case 'time':
                return 'timepicker';
            default:
                return 'datepicker';
        }
    }

    /**
     * @param array $attributes
     *
     * @deprecated Use FrontendAsset instead.
     */
    protected function addFrontendAssets(array $attributes): void
    {
        if ('text' !== $attributes['type'] || !$attributes['flatpickr']['active']) {
            return;
        }

        if (!$this->dcaUtil->getOverridableProperty('useFlatpickrForDatepicker', $this->getPageWithParents())) {
            return;
        }

        $this->frontendAsset->addFrontendAssets();
    }

    /**
     * retrieve page and its parent pages
     *
     * @return array
     */
    protected function getPageWithParents(): array
    {
        /* @var PageModel $objPage */
        global $objPage;

        if (null === $objPage) {
            return [];
        }

        $pages   = $this->modelUtil->findParentsRecursively('pid', 'tl_page', $objPage);
        $pages[] = $objPage;

        return $pages;
    }
}

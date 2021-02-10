<?php


namespace HeimrichHannot\FlatpickrBundle\Util;


use Contao\DataContainer;
use Contao\PageModel;
use HeimrichHannot\FlatpickrBundle\Asset\FrontendAsset;
use HeimrichHannot\FlatpickrBundle\Event\CustomizeFlatpickrOptionsEvent;
use HeimrichHannot\FlatpickrBundle\Manager\FlatpickrManager;
use HeimrichHannot\TwigSupportBundle\Filesystem\TwigTemplateLocator;
use HeimrichHannot\UtilsBundle\Dca\DcaUtil;
use HeimrichHannot\UtilsBundle\Model\ModelUtil;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Twig\Environment;

class FlatpickrUtil
{
    const FLATPICKR_BTN_TEMPLATE_DEFAULT = "btn_datepicker";

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
    /**
     * @var Environment
     */
    private $twig;

    public function __construct(
        ModelUtil $modelUtil,
        DcaUtil $dcaUtil,
        FrontendAsset $frontendAsset,
        EventDispatcherInterface $eventDispatcher,
        FlatpickrManager $flatpickrManager,
        TwigTemplateLocator $templateLocator,
        Environment $twig
    ) {
        $this->modelUtil        = $modelUtil;
        $this->dcaUtil          = $dcaUtil;
        $this->frontendAsset    = $frontendAsset;
        $this->eventDispatcher  = $eventDispatcher;
        $this->flatpickrManager = $flatpickrManager;
        $this->templateLocator  = $templateLocator;
        $this->twig             = $twig;
    }

    /**
     * get flatpickr config data
     *
     * @param array $attributes
     * @param DataContainer|null $dc
     * @return array
     */
    public function getFlatpickrAttributes(array $attributes, ?DataContainer $dc = null): array
    {
        if (!isset($attributes['flatpickr']) || !$attributes['flatpickr']['active']) {
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

        $options[$inputPosition] = $this->twig->render($template, ['picker' => $picker]);
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
     */
    protected function addFrontendAssets(array $attributes): void
    {
        if ('text' !== $attributes['type'] || !$attributes['flatpickr']['active']) {
            return;
        }

        if (!empty($this->dcaUtil->getOverridableProperty('useFlatpickrForDatepicker', $this->getPageWithParents()))) {
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
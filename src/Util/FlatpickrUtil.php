<?php


namespace HeimrichHannot\FlatpickrBundle\Util;


use Contao\DataContainer;
use Contao\PageModel;
use HeimrichHannot\FlatpickrBundle\Asset\FrontendAsset;
use HeimrichHannot\FlatpickrBundle\Event\CustomizeFlatpickrOptionsEvent;
use HeimrichHannot\FlatpickrBundle\Manager\FlatpickrManager;
use HeimrichHannot\UtilsBundle\Dca\DcaUtil;
use HeimrichHannot\UtilsBundle\Model\ModelUtil;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class FlatpickrUtil
{
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

    public function __construct(ModelUtil $modelUtil, DcaUtil $dcaUtil, FrontendAsset $frontendAsset, EventDispatcherInterface $eventDispatcher, FlatpickrManager $flatpickrManager)
    {
        $this->modelUtil = $modelUtil;
        $this->dcaUtil = $dcaUtil;
        $this->frontendAsset = $frontendAsset;
        $this->eventDispatcher = $eventDispatcher;
        $this->flatpickrManager = $flatpickrManager;
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
        if(!$attributes['flatpickr'] || !$attributes['flatpickr']['active']) {
            return [];
        }

        $this->addFrontendAssets($attributes);

        $options = $attributes['flatpickr']['options'];
        $options['rgxp'] = $attributes['rgxp'];

        $event = $this->eventDispatcher->dispatch(CustomizeFlatpickrOptionsEvent::NAME, new CustomizeFlatpickrOptionsEvent(
            $this->flatpickrManager->getOptionsAsArray($options),
            $attributes,
            $dc
        ));

        return [
            'data-flatpickr-active' => "1",
            'data-input' => '1',
            'prefix' => 'flatpickr',
            'data-flatpickr' => json_encode($event->getFlatpickrOptions())
        ];
    }

    /**
     * @param array $attributes
     */
    protected function addFrontendAssets(array $attributes): void
    {
        if ('text' !== $attributes['type'] || !$attributes['flatpickr']['active']) {
            return;
        }

        if(!$this->dcaUtil->getOverridableProperty('useFlatpickrForDatepicker', $this->getPageWithParents())) {
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

        $pages = $this->modelUtil->findParentsRecursively('pid', 'tl_page', $objPage);
        $pages[] = $objPage;

        return $pages;
    }
}
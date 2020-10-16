<?php


namespace HeimrichHannot\FlatpickrBundle\EventListener;


use HeimrichHannot\FilterBundle\Event\AdjustFilterOptionsEvent;
use HeimrichHannot\FlatpickrBundle\Asset\FrontendAsset;
use HeimrichHannot\FlatpickrBundle\Util\FlatpickrUtil;
use HeimrichHannot\TwigSupportBundle\Filesystem\TwigTemplateLocator;
use Twig\Environment;

class AdjustFilterOptionsEventListener
{
    /**
     * @var FlatpickrUtil
     */
    private $flatpickrUtil;

    public function __construct(
        FlatpickrUtil $flatpickrUtil
    ) {
        $this->flatpickrUtil   = $flatpickrUtil;
    }

    public function __invoke(AdjustFilterOptionsEvent $event)
    {
        if(empty($attributes = $this->getFlatpickrAttributes($event))) {
            return;
        }

        $options          = $event->getOptions();
        $options['attr']  = array_merge($options['attr'], $this->flatpickrUtil->getFlatpickrAttributes($attributes));

        $event->setOptions($options);
    }

    /**
     * get flatpickr attribute config from dca field configuration
     *
     * @param AdjustFilterOptionsEvent $event
     * @return array
     */
    public function getFlatpickrAttributes(AdjustFilterOptionsEvent $event): array
    {
        $dcaField = $this->getDcaFieldForElement($event);

        if (!$dcaField || !$dcaField['eval']['flatpickr']) {
            return [];
        }

        return [
            'type' => $dcaField['inputType'],
            'flatpickr' => $dcaField['eval']['flatpickr'],
            'rgxp' => $dcaField['rgxp']
        ];
    }

    /**
     * get the dca field config by the current filter element
     *
     * @param AdjustFilterOptionsEvent $event
     * @return mixed
     */
    protected function getDcaFieldForElement(AdjustFilterOptionsEvent $event): ?array
    {
        $element      = $event->getElement();
        $filterConfig = $event->getConfig();
        $filter       = $filterConfig->getFilter();
        $field        = $element->field ?: $element->name;

        if (!$GLOBALS['TL_DCA'][$filter['dataContainer']]) {
            return [];
        }

        return $GLOBALS['TL_DCA'][$filter['dataContainer']]['fields'][$field];
    }
}
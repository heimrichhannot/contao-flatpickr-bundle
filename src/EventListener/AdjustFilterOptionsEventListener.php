<?php


namespace HeimrichHannot\FlatpickrBundle\EventListener;

use HeimrichHannot\FilterBundle\Event\AdjustFilterOptionsEvent;
use HeimrichHannot\FlatpickrBundle\Asset\FrontendAsset;
use HeimrichHannot\FlatpickrBundle\Option\FlatpickrOptions;
use HeimrichHannot\FlatpickrBundle\Util\FlatpickrUtil;
use Terminal42\ServiceAnnotationBundle\Annotation\ServiceTag;

class AdjustFilterOptionsEventListener
{
    private FlatpickrUtil    $flatpickrUtil;
    private FlatpickrOptions $flatpickrOptions;
    private FrontendAsset    $frontendAsset;

    public function __construct(FlatpickrUtil $flatpickrUtil, FlatpickrOptions $flatpickrOptions, FrontendAsset $frontendAsset)
    {
        $this->flatpickrUtil = $flatpickrUtil;
        $this->flatpickrOptions = $flatpickrOptions;
        $this->frontendAsset = $frontendAsset;
    }

    /**
     * @ServiceTag("kernel.event_listener", event="huh.filter.event.adjust_filter_options_event")
     */
    public function __invoke(AdjustFilterOptionsEvent $event): void
    {
        if (empty($attributes = $this->getFlatpickrAttributes($event)) && !$event->getElement()->addFlatpickrSupport) {
            return;
        }

        $options = $event->getOptions();
        $element = $event->getElement();

        switch ($element->type) {
            case 'date_time':
                $options['attr']['rgxp'] = FlatpickrOptions::PICKER_TYPE_DATETIME;
                break;
            case 'time':
                $options['attr']['rgxp'] = FlatpickrOptions::PICKER_TYPE_TIME;
                break;
            case 'date':
            default:
                $options['attr']['rgxp'] = FlatpickrOptions::PICKER_TYPE_DATE;
        }

        if (empty($options['attr']['flatpickr'])) {
            $options['attr']['class'] ? $options['attr']['class'] = $options['attr']['class'].' flatpickr-input' : $options['attr']['class'] = 'flatpickr-input';
            $options['attr']['type'] = 'text';
        }

        $options['attr'] = array_merge($options['attr'], $this->flatpickrOptions->getWidgetAttributes($options['attr']));

        $inputPosition   = $attributes['flatpickr']['options']['prependPicker'] ? 'input_group_prepend' : 'input_group_append';
        $this->flatpickrUtil->compilePicker($attributes, $options, $inputPosition);

        $this->frontendAsset->addFrontendAssets();

        unset($options['attr']['flatpickr']);
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
<?php


namespace HeimrichHannot\FlatpickrBundle\EventListener;

use HeimrichHannot\FilterBundle\Event\AdjustFilterOptionsEvent;
use HeimrichHannot\FlatpickrBundle\Util\FlatpickrUtil;
use Twig\Environment;

class AdjustFilterOptionsEventListener
{
    /**
     * @var FlatpickrUtil
     */
    private $flatpickrUtil;
    /**
     * @var Environment
     */
    private $twig;

    public function __construct(
        FlatpickrUtil $flatpickrUtil,
        Environment $twig
    ) {
        $this->flatpickrUtil = $flatpickrUtil;
        $this->twig          = $twig;
    }

    public function __invoke(AdjustFilterOptionsEvent $event)
    {

        if (empty($attributes = $this->getFlatpickrAttributes($event)) && !(bool)$event->getElement()->addFlatpickrSupport) {
            return;
        }

        $options = $event->getOptions();
        $element = $event->getElement();

        if (empty($options['attr']['flatpickr']) && (bool)$element->addFlatpickrSupport ) {
            $options['attr']['flatpickr']['options'] = ['dateFormat' => 'd.m.Y'];

            if($element->type === 'date_time' || $element->type === 'time') {
                $options['attr']['flatpickr']['options']['enableTime'] = true;
            }

            if($element->type === 'time') {
                $options['attr']['flatpickr']['options']['noCalendar'] = true;
            }

            $options['attr']['class'] ? $options['attr']['class'] = $options['attr']['class'].' flatpickr-input' : $options['attr']['class'] = 'flatpickr-input';
            $options['attr']['type'] === 'text' ?: $options['attr']['type'] = 'text';
        }

        $options['attr'] = array_merge($options['attr'], $this->flatpickrUtil->getFlatpickrAttributes($options['attr']));
        $inputPosition   = $attributes['flatpickr']['options']['prependPicker'] ? 'input_group_prepend' : 'input_group_append';
        $this->flatpickrUtil->compilePicker($attributes, $options, $inputPosition);

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
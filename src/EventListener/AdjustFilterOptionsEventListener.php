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

        if (empty($options['attr']['flatpickr'])) {
            return;
        }

        $options['attr'] = array_merge($options['attr'], $this->flatpickrUtil->getFlatpickrAttributes($options['attr']));
        $inputPosition   = $attributes['flatpickr']['options']['prependPicker'] ? 'input_group_prepend' : 'input_group_append';
        $this->flatpickrUtil->compilePicker($attributes, $options, $inputPosition);

        $options['attr']['flatpickr']['options'] = serialize($options['attr']['flatpickr']['options']);

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
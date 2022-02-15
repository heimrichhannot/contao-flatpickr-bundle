<?php

namespace HeimrichHannot\FlatpickrBundle\Option;

use Contao\DataContainer;
use HeimrichHannot\FlatpickrBundle\Event\CustomizeFlatpickrOptionsEvent;
use HeimrichHannot\UtilsBundle\Date\DateUtil;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

class FlatpickrOptions
{
    const PICKER_TYPE_DATE = 'date';
    const PICKER_TYPE_TIME = 'time';
    const PICKER_TYPE_DATETIME = 'datim';

    private DateUtil        $dateUtil;
    private EventDispatcherInterface $eventDispatcher;

    /**
     * @param array|bool[] $options
     */
    public function __construct(DateUtil $dateUtil, EventDispatcherInterface $eventDispatcher)
    {
        $this->dateUtil = $dateUtil;
        $this->eventDispatcher = $eventDispatcher;
    }


    public function getDefaultOptions(): array
    {
        return [
            'wrap' => true,
            'time_24hr' => true,
            'allowInput' => true,
            'dateFormat' => $GLOBALS['TL_CONFIG']['dateFormat'],
            'dateFormatIso8601' => $this->dateUtil->transformPhpDateFormatToISO8601($GLOBALS['TL_CONFIG']['dateFormat'])
        ];
    }

    public function getWidgetAttributes(array $attributes, DataContainer $dc = null): array
    {
        $options = $this->getFlatpickrOptions($attributes['rgxp']);
        $options = array_merge($options, $attributes['flatpickr']['options'] ?? []);

        $event = $this->eventDispatcher->dispatch(
            new CustomizeFlatpickrOptionsEvent($options, $attributes, $dc),
            CustomizeFlatpickrOptionsEvent::NAME
        );

        return [
            'data-input' => '1',
            'prefix' => 'flatpickr',
            'data-flatpickr' => json_encode($event->getFlatpickrOptions())
        ];
    }

    public function getFlatpickrOptions(string $pickerType = self::PICKER_TYPE_DATE): array
    {
        $options = $this->getDefaultOptions();

        switch ($pickerType) {
            case self::PICKER_TYPE_TIME:
                $dateFormat = $GLOBALS['TL_CONFIG']['timeFormat'];
                $options['enableTime'] = true;
                $options['noCalendar'] = true;
                break;
            case self::PICKER_TYPE_DATETIME:
                $dateFormat = $GLOBALS['TL_CONFIG']['datimFormat'];
                $options['enableTime'] = true;
                break;
            case self::PICKER_TYPE_DATE:
            default:
                $dateFormat = $GLOBALS['TL_CONFIG']['dateFormat'];
        }

        $options['dateFormat'] = $dateFormat;
        $options['dateFormatIso8601'] = $this->dateUtil->transformPhpDateFormatToISO8601($dateFormat);

        return $options;
    }
}
<?php

namespace HeimrichHannot\FlatpickrBundle\Option;

use Contao\DataContainer;
use Contao\Date;
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
            'dateFormat' => Date::getNumericDateFormat(),
            'dateFormatIso8601' => $this->dateUtil->transformPhpDateFormatToISO8601(Date::getNumericDateFormat())
        ];
    }

    public function getWidgetAttributes(array $attributes, DataContainer $dc = null, array $options = []): array
    {
        $pickerType    = $attributes['rgxp'];
        $configuration = [];

        $options = $this->getFlatpickrOptions($pickerType, $configuration);
        $options = array_merge($options, ($attributes['flatpickr']['options'] ?? []), $attributes['flatpickr']['plugins'] ?? []);

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

    /**
     * @param string $pickerType The Picker type, see class PICKER_TYPE_* constants.
     * @return array
     */
    public function getFlatpickrOptions(string $pickerType = self::PICKER_TYPE_DATE,): array
    {
        $options = $this->getDefaultOptions();

        switch ($pickerType) {
            case self::PICKER_TYPE_TIME:
                $dateFormat = Date::getNumericTimeFormat();
                $options['enableTime'] = true;
                $options['noCalendar'] = true;
                break;
            case self::PICKER_TYPE_DATETIME:
                $dateFormat = Date::getNumericDatimFormat();
                $options['enableTime'] = true;
                break;
            case self::PICKER_TYPE_DATE:
            default:
                $dateFormat = Date::getNumericDateFormat();
        }

        $options['dateFormat'] = $dateFormat;
        $options['dateFormatIso8601'] = $this->dateUtil->transformPhpDateFormatToISO8601($dateFormat);

        return $options;
    }
}
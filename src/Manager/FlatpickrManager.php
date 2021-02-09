<?php

namespace HeimrichHannot\FlatpickrBundle\Manager;

use Contao\Controller;
use Contao\System;

/**
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

class FlatpickrManager
{
    public function getOptionsAsArray(array $customOptions = [], string $table = '', string $field = ''): array
    {
        $options = $this->getDefaultOptions();

        if (!empty($table) && !empty($field)) {
            $options = array_merge($options, $this->getOptionsFromDca($table, $field));
        }
        $options = array_merge($options, $customOptions);

        $pickerType = $options['rgxp'];

        switch ($pickerType) {
            case 'time':
                $dateFormat = $GLOBALS['TL_CONFIG']['timeFormat'];
                break;
            case 'date':
                $dateFormat = $GLOBALS['TL_CONFIG']['dateFormat'];
                break;
            case 'datim':
                $dateFormat = $GLOBALS['TL_CONFIG']['datimFormat'];
                break;
            default:
                $dateFormat = $GLOBALS['TL_CONFIG']['dateFormat'];
                break;
        }

        unset($options['rgxp']);
        $options['dateFormat'] = $dateFormat;
        $options['dateFormatIso8601'] = System::getContainer()->get('huh.utils.date')->transformPhpDateFormatToISO8601($dateFormat);

        return $options;
    }

    public function getOptionsFromDca(string $table, string $field): array
    {
        Controller::loadDataContainer($table);
        $options = [];
        $dca = &$GLOBALS['TL_DCA'][$table];

        if (
            isset($dca['fields'][$field]['eval']['flatpickr'])
            && \is_array($dca['fields'][$field]['eval']['flatpickr'])
            && isset($dca['fields'][$field]['eval']['flatpickr']['options'])
            && \is_array($dca['fields'][$field]['eval']['flatpickr']['options'])
        ) {
            $options = $dca['fields'][$field]['eval']['flatpickr']['options'];
        }

        return $options;
    }

    public function getDefaultOptions(): array
    {
        return [
            'wrap' => true,
            'time_24hr' => true,
            'allowInput' => true,
            'dateFormat' => $GLOBALS['TL_CONFIG']['dateFormat'],
            'dateFormatIso8601' => System::getContainer()->get('huh.utils.date')->transformPhpDateFormatToISO8601($GLOBALS['TL_CONFIG']['dateFormat'])
        ];
    }
}
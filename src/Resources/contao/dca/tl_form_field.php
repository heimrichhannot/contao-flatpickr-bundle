<?php
$dca = &$GLOBALS['TL_DCA']['tl_form_field'];

$dca['palettes']['__selector__'][] = 'addFlatpickrSupport';
$dca['palettes']['__selector__'][] = 'isFlatpickrDateRangeStartElement';

$dca['subpalettes']['addFlatpickrSupport'] = 'isFlatpickrDateRangeStartElement';
$dca['subpalettes']['isFlatpickrDateRangeStartElement'] = 'flatpickrDateRangeStopElement';

$dca['fields'] = array_merge($dca['fields'], [
    'addFlatpickrSupport' => [
        'inputType' => 'checkbox',
        'eval' => ['tl_class' => 'w50', 'submitOnChange' => true],
        'sql' => "char(1) NOT NULL default ''",
    ],
    'isFlatpickrDateRangeStartElement' => [
        'inputType' => 'checkbox',
        'eval' => ['tl_class' => 'w50', 'submitOnChange' => true],
        'sql' => "char(1) NOT NULL default ''",
    ],
    'flatpickrDateRangeStopElement' => [
        'inputType'  => 'select',
        'eval'       => ['tl_class' => 'w50', 'chosen' => true, 'includeBlankOption' => true],
        'sql'        => "int(10) unsigned NOT NULL default 0",
    ],
]);
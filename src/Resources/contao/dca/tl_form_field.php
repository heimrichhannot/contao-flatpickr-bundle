<?php
$dca = &$GLOBALS['TL_DCA']['tl_form_field'];

$dca['fields']['addFlatpickrSupport'] = [
    'label' => &$GLOBALS['TL_LANG']['tl_filter_config_element']['addFlatpickrSupport'],
    'exclude' => true,
    'inputType' => 'checkbox',
    'eval' => ['tl_class' => 'w50'],
    'sql' => "char(1) NOT NULL default ''",
];
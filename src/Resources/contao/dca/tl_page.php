<?php

/*
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

$table = 'tl_page';
$dca = &$GLOBALS['TL_DCA'][$table];

$dca['palettes']['root'] = str_replace('includeLayout', 'includeLayout,useFlatpickrForDatepicker', $dca['palettes']['root']);
$dca['palettes']['rootfallback'] = str_replace('includeLayout', 'includeLayout,useFlatpickrForDatepicker', $dca['palettes']['rootfallback']);
$dca['palettes']['regular'] = str_replace('includeLayout', 'includeLayout,overrideUseFlatpickrForDatepicker', $dca['palettes']['regular']);

$dca['fields']['useFlatpickrForDatepicker'] = [
    'label' => &$GLOBALS['TL_LANG']['tl_page']['useFlatpickrForDatepicker'],
    'exclude' => true,
    'inputType' => 'checkbox',
    'eval' => ['tl_class' => 'w50'],
    'sql' => "char(1) NOT NULL default ''",
];


\Contao\System::getContainer()->get('huh.utils.dca')->addOverridableFields(
    ['useFlatpickrForDatepicker'],
    $table,
    $table
);
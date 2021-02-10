<?php
/**
 * Copyright (c) 2021 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\FlatpickrBundle\EventListener;


use Contao\CoreBundle\DataContainer\PaletteManipulator;
use HeimrichHannot\FilterBundle\Filter\Type\DateTimeType;
use HeimrichHannot\FilterBundle\Filter\Type\DateType;

class LoadDataContainerListener
{

    public function __invoke(string $table): void
    {
        switch ($table) {
            case 'tl_filter_config_element':
                $this->prepareFilterConfigElementTable();
                break;
            default:
                break;
        }
    }

    protected function prepareFilterConfigElementTable()
    {
        if (!class_exists('HeimrichHannot\FilterBundle\HeimrichHannotContaoFilterBundle')) {
            return;
        }

        $dca = &$GLOBALS['TL_DCA']['tl_filter_config_element'];

        $dca['fields']['addFlatpickrSupport'] = [
            'label' => &$GLOBALS['TL_LANG']['tl_filter_config_element']['addFlatpickrSupport'],
            'exclude' => true,
            'inputType' => 'checkbox',
            'eval' => ['tl_class' => 'w50'],
            'sql' => "char(1) NOT NULL default ''",
        ];

        $palettes = [DateType::TYPE, DateTimeType::TYPE, 'time'];

        foreach ($palettes as $palette) {

            PaletteManipulator::create()
                ->addField('addFlatpickrSupport', 'visualization_legend', PaletteManipulator::POSITION_APPEND)
                ->applyToPalette($palette, 'tl_filter_config_element');
        }
    }
}

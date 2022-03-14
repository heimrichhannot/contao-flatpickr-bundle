<?php

use HeimrichHannot\FlatpickrBundle\Widget\Frontend\DateRangeFrontendWidget;

$dca = &$GLOBALS['TL_DCA']['tl_form_field'];

$dca['palettes'][DateRangeFrontendWidget::TYPE] = '{type_legend},type,name,label;{fconfig_legend},mandatory,rgxp,placeholder;{expert_legend:hide},class,value,minlength,maxlength,accesskey,tabindex;{template_legend:hide},customTpl;{invisible_legend:hide},invisible';

$dca['fields'] = array_merge($dca['fields'], [
    'addFlatpickrSupport' => [
        'exclude' => true,
        'inputType' => 'checkbox',
        'eval' => ['tl_class' => 'w50'],
        'sql' => "char(1) NOT NULL default ''",
    ],

]);
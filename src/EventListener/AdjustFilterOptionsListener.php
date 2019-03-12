<?php
/**
 * Contao Open Source CMS
 *
 * Copyright (c) 2019 Heimrich & Hannot GmbH
 *
 * @author  Thomas Körner <t.koerner@heimrich-hannot.de>
 * @license http://www.gnu.org/licences/lgpl-3.0.html LGPL
 */


namespace HeimrichHannot\ContaoFlatpickrBundle\EventListener;


use HeimrichHannot\FilterBundle\Event\AdjustFilterOptionsEvent;
use Twig\Environment;

class AdjustFilterOptionsListener
{
    /**
     * @var Environment
     */
    protected $twig;

    protected $types = ['date', 'date_time'];

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }


    public function onHuhFilterEventAdjustFilterOptionsEvent(AdjustFilterOptionsEvent $event)
    {
        if (!in_array($event->getElement()->type, $this->types)) {
            return;
        }
        $options = $event->getOptions();

        $options['group_attr']['class'] = isset($options['group_attr']['class']) ? $options['group_attr']['class'].' flatpickr' : 'flatpickr';
        $options['attr']['data-input'] = "1";

        $event->setOptions($options);
    }
}
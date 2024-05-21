<?php
/**
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\FlatpickrBundle\EventListener;

use HeimrichHannot\FlatpickrBundle\Util\FlatpickrUtil;
use HeimrichHannot\TwigTemplatesBundle\Event\BeforeRenderTwigTemplateEvent;
use Terminal42\ServiceAnnotationBundle\Annotation\ServiceTag;


class BeforeRenderWidgetListener
{
    /**
     * @var FlatpickrUtil
     */
    private $flatpickrUtil;

    /**
     * BeforeRenderWidgetListener constructor.
     */
    public function __construct(FlatpickrUtil $flatpickrUtil)
    {
        $this->flatpickrUtil = $flatpickrUtil;
    }

    /**
     * @ServiceTag("kernel.event_listener", event="huh.twig.beforeRenderTemplate")
     */
    public function __invoke(BeforeRenderTwigTemplateEvent $event)
    {
        $config = $event->getTemplateData()['arrConfiguration'] ?? [];
        if ('text' !== ($config['type'] ?? '')) {
            return;
        }
        if (!isset($config['datepicker']) || !$config['datepicker']) {
            return;
        }

        $templateData = $event->getTemplateData();

        if ($config['flatpickr']['active'] === true) {
            $inputPosition = ($templateData['arrConfiguration']['flatpickr']['options']['prependPicker'] ?? false)
                ? 'inputPrepend'
                : 'inputAppend';
            $this->flatpickrUtil
                ->compilePicker($config, $templateData['arrConfiguration'], $inputPosition);
        }
        $event->setTemplateData($templateData);
    }
}

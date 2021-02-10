<?php
/**
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\FlatpickrBundle\EventListener;

use HeimrichHannot\FlatpickrBundle\Util\FlatpickrUtil;
use HeimrichHannot\TwigSupportBundle\Filesystem\TwigTemplateLocator;
use HeimrichHannot\TwigTemplatesBundle\Event\BeforeRenderTwigTemplateEvent;
use Twig\Environment;

class BeforeRenderWidgetListener
{
    const FLATPICKR_BTN_TEMPLATE_DEFAULT = "btn_datepicker";

    /**
     * @var Environment
     */
    private $twig;
    /**
     * @var TwigTemplateLocator
     */
    private $templateLocator;
    /**
     * @var FlatpickrUtil
     */
    private $flatpickrUtil;

    /**
     * BeforeRenderWidgetListener constructor.
     */
    public function __construct(Environment $twig, TwigTemplateLocator $templateLocator, FlatpickrUtil $flatpickrUtil)
    {
        $this->twig            = $twig;
        $this->templateLocator = $templateLocator;
        $this->flatpickrUtil   = $flatpickrUtil;
    }

    public function onHuhTwigBeforeRenderTemplate(BeforeRenderTwigTemplateEvent $event)
    {
        $config = $event->getTemplateData()['arrConfiguration'];
        if ('text' !== $config['type']) {
            return;
        }
        if (!isset($config['datepicker']) || !$config['datepicker']) {
            return;
        }

        $templateData = $event->getTemplateData();

        if ($config['flatpickr']['active'] === true) {
            $inputPosition = $templateData['arrConfiguration']['flatpickr']['options']['prependPicker'] ? 'inputPrepend' : 'inputAppend';
            $this->flatpickrUtil->compilePicker($config, $templateData['arrConfiguration'],
                $inputPosition);
        }
        $event->setTemplateData($templateData);
    }

    /**
     *
     *
     * @param array $config
     * @return string
     * @throws \HeimrichHannot\TwigSupportBundle\Exception\TemplateNotFoundException
     */
    protected function getFlatpickrBtnTemplate(array $config)
    {
        $templateName = $config['options']['customBtnTpl'] ?: self::FLATPICKR_BTN_TEMPLATE_DEFAULT;

        return $this->templateLocator->getTemplatePath($templateName);
    }

}

<?php
/**
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\FlatpickrBundle\EventListener;

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
     * BeforeRenderWidgetListener constructor.
     */
    public function __construct(Environment $twig, TwigTemplateLocator $templateLocator)
    {
        $this->twig = $twig;
        $this->templateLocator = $templateLocator;
    }

    public function onHuhTwigBeforeRenderTemplate(BeforeRenderTwigTemplateEvent $event)
    {
        $config = $event->getTemplateData()['arrConfiguration'];
        if ('text' !== $config['type'])
        {
            return;
        }
        if (!isset($config['datepicker']) || !$config['datepicker'])
        {
            return;
        }

        $templateData = $event->getTemplateData();

        if ($templateData['arrConfiguration']['flatpickr']['active'] === true){
            $this->compilePicker($templateData);
        }
        $event->setTemplateData($templateData);
    }

    /**
     * @param array $templateData
     *
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    protected function compilePicker(array &$templateData): void
    {
        switch ($templateData['arrConfiguration']['rgxp']) {
            case 'time':
                $type = 'timepicker';
                break;
            default:
                $type = 'datepicker';
                break;
        }

        $picker = $this->twig->render($this->getFlatpickrBtnTemplate($templateData['arrConfiguration']['flatpickr']), [
            'picker' => $type,
        ]);

        $pickerPosition = 'inputAppend';
        if (isset($templateData['arrConfiguration']['flatpickr']['options']['prependDatePicker']) && $templateData['arrConfiguration']['prependDatePicker'] === true) {
            $pickerPosition = 'inputPrepend';
        }

        if (!isset($templateData['arrConfiguration'][$pickerPosition]))
        {
            $templateData['arrConfiguration'][$pickerPosition] = '';
        }
        $templateData['arrConfiguration'][$pickerPosition] .= $picker;
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
        $templateName = $config['options']['customBtnTpl'] ?:self::FLATPICKR_BTN_TEMPLATE_DEFAULT;

        return $this->templateLocator->getTemplatePath($templateName);
    }

}
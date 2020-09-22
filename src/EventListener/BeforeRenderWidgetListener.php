<?php
/**
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\FlatpickrBundle\EventListener;

use HeimrichHannot\TwigTemplatesBundle\Event\BeforeRenderTwigTemplateEvent;
use Twig\Environment;

class BeforeRenderWidgetListener
{
    /**
     * @var Environment
     */
    private $twig;

    /**
     * BeforeRenderWidgetListener constructor.
     */
    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
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

        $picker = $this->twig->render("@HeimrichHannotFlatpickr/forms/partials/btn_datepicker.html.twig", [
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
}
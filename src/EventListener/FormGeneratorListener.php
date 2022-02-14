<?php

namespace HeimrichHannot\FlatpickrBundle\EventListener;

use Contao\CoreBundle\ServiceAnnotation\Hook;
use Contao\Form;
use Contao\Widget;

class FormGeneratorListener
{
    /**
     * @Hook("loadFormField")
     */
    public function onLoadFormField(Widget $widget, string $formId, array $formData, Form $form): Widget
    {
        return $widget;
    }
}
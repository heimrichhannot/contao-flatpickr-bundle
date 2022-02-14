<?php

namespace HeimrichHannot\FlatpickrBundle\EventListener;

use Contao\CoreBundle\ServiceAnnotation\Hook;
use Contao\Form;
use Contao\Widget;
use HeimrichHannot\FlatpickrBundle\Util\FlatpickrUtil;

class FormGeneratorListener
{
    private FlatpickrUtil $flatpickrUtil;

    public function __construct(FlatpickrUtil $flatpickrUtil)
    {
        $this->flatpickrUtil = $flatpickrUtil;
    }


    /**
     * @Hook("loadFormField")
     */
    public function onLoadFormField(Widget $widget, string $formId, array $formData, Form $form): Widget
    {
        if ("text" !== $widget->type || !in_array($widget->rgxp, ['date', 'time', 'datim'])) {
            return $widget;
        }

        $attributes = $this->flatpickrUtil->getFlatpickrAttributes([
            'flatpickr' => ['active' => true],
            'rgxp' => $widget->rgxp,
            'type' => $widget->type,
        ]);
        $widget->addAttributes($attributes);

        return $widget;
    }
}
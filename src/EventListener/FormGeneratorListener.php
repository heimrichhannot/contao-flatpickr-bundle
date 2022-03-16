<?php

namespace HeimrichHannot\FlatpickrBundle\EventListener;

use Contao\Controller;
use Contao\CoreBundle\DataContainer\PaletteManipulator;
use Contao\CoreBundle\ServiceAnnotation\Callback;
use Contao\CoreBundle\ServiceAnnotation\Hook;
use Contao\DataContainer;
use Contao\Form;
use Contao\FormFieldModel;
use Contao\Widget;
use HeimrichHannot\FlatpickrBundle\Asset\FrontendAsset;
use HeimrichHannot\FlatpickrBundle\Option\FlatpickrOptions;
use Symfony\Component\HttpFoundation\RequestStack;

class FormGeneratorListener
{
    private RequestStack     $requestStack;
    private FrontendAsset    $frontendAsset;
    private FlatpickrOptions $flatpickrOptions;

    public function __construct(RequestStack $requestStack, FrontendAsset $frontendAsset, FlatpickrOptions $flatpickrOptions)
    {
        $this->requestStack = $requestStack;
        $this->frontendAsset = $frontendAsset;
        $this->flatpickrOptions = $flatpickrOptions;
    }


    /**
     * @Hook("loadFormField")
     */
    public function onLoadFormField(Widget $widget, string $formId, array $formData, Form $form): Widget
    {
        if ("text" !== $widget->type || !$widget->addFlatpickrSupport || !in_array($widget->rgxp, ['date', 'time', 'datim'])) {
            return $widget;
        }

        if (FormFieldModel::findBy(
            ['pid=?','isFlatpickrDateRangeStartElement=\'1\'', 'flatpickrDateRangeStopElement=?' ],
            [$widget->pid, $widget->id]
        )) {
            $widget->addAttribute('autocomplete', 'off');
            return $widget;
        }

        $attributes = ['rgxp' => $widget->rgxp,];

        if ($widget->isFlatpickrDateRangeStartElement
            && $widget->flatpickrDateRangeStopElement
            && ($secondElement = FormFieldModel::findByPk((int)$widget->flatpickrDateRangeStopElement)))
        {
            $attributes['flatpickr']['plugins']['rangePlugin'] = ['input' => '#ctrl_'.$secondElement->id];
        }

        $attributes = $this->flatpickrOptions->getWidgetAttributes($attributes);

        $widget->addAttributes($attributes);

        $this->frontendAsset->addFrontendAssets();

        return $widget;
    }

    /**
     * @Callback(table="tl_form_field", target="config.onload")
     */
    public function onLoadCallback(DataContainer $dc = null): void
    {
        if (null === $dc || !$dc->id || 'edit' !== $this->requestStack->getCurrentRequest()->query->get('act')) {
            return;
        }

        $fieldModel = FormFieldModel::findById($dc->id);
        if (!$fieldModel || 'text' !== $fieldModel->type || !in_array($fieldModel->rgxp, ['date', 'time', 'datim'])) {
            return;
        }

        PaletteManipulator::create()
            ->addField('addFlatpickrSupport', 'fconfig_legend', PaletteManipulator::POSITION_APPEND)
            ->applyToPalette('text', 'tl_form_field');
    }

    /**
     * @Callback(table="tl_form_field", target="fields.flatpickrDateRangeStopElement.options")
     */
    public function  onFlatpickrDateRangeStopElementOptionsCallback(DataContainer $dc = null): array
    {
        if (null === $dc || !$dc->id) {
            return [];
        }

        $currentField = FormFieldModel::findByPk($dc->id);

        if (!$currentField) {
            return [];
        }

        $fields = FormFieldModel::findPublishedByPid((int)$currentField->pid);
        if (!$fields) {
            return [];
        }

        Controller::loadLanguageFile('default');

        $options = [];

        while ($field = $fields->next()) {
            if ('text' !== $field->type || !in_array($field->rgxp, ['date', 'time', 'datim'])) {
                continue;
            }
            $options[$field->id] = ($field->label ?? $field->name ?? $field->type). ' ('.($GLOBALS['TL_LANG']['FFL'][$field->type][0] ?? $field->type).')';
        }

        return $options;
    }
}
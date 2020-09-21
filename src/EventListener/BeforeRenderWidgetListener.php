<?php
/**
 * Contao Open Source CMS
 *
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @author  Thomas Körner <t.koerner@heimrich-hannot.de>
 * @license http://www.gnu.org/licences/lgpl-3.0.html LGPL
 */


namespace HeimrichHannot\ContaoFlatpickrBundle\EventListener;


use Contao\System;
use HeimrichHannot\TwigTemplatesBundle\Twig\FormTemplate;
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
		if (!FormTemplate::TYPE === $event->getType())
		{
			return;
		}
		$config = $event->getTemplateData()['arrConfiguration'];
		if ('text' !== $config['type'])
		{
			return;
		}
		if (!isset($config['datepicker']) || !$config['datepicker'])
		{
			return;
		}
		$datepicker = true;
		$timepicker = false;
		$timepickerOnly = false;
		$attributes = ['data-input'];

		if (isset($config['rgxp']))
		{
			switch ($config['rgxp'])
			{
				case 'time':
					$datepicker = false;
					$timepicker = true;
					break;
				case 'datim':
					$timepicker = true;
					break;
			}
		}

		if (!$datepicker && $timepicker)
		{
			$timepickerOnly = true;
		}

		$this->generateAttributes($attributes, $config, $datepicker, $timepicker);

		$templateData = $event->getTemplateData();
		$templateData['arrConfiguration']['datepicker'] = $datepicker;
		$templateData['arrConfiguration']['timepicker'] = $timepicker;
		$this->compilePicker($templateData, $timepickerOnly);
		$this->compileAttributes($templateData, $attributes);
		$templateData['inputGroupClass'] = $templateData['inputGroupClass'] ? $templateData['inputGroupClass'].' flatpickr' : 'flatpickr';
		$event->setTemplateData($templateData);
	}

	protected function compileAttributes(array &$templateData, array $attributeList)
	{
		$attributes = '';
		if (isset($templateData['attributes']))
		{
			$attributes = $templateData['attributes'];
		}
		foreach ($attributeList as $key => $value)
		{
			$attributes.=' ';
			if ($value === true) {
				$value = "1";
			}
			if (is_string($key))
			{
				$attributes .= $key.'='.$value;
			}
			else {
				$attributes .= $value;
			}
		}
		$templateData['attributes'] = trim($attributes, " ");
	}

	/**
	 * @param $templateData
	 * @param bool $timepickerOnly
	 * @throws \Twig_Error_Loader
	 * @throws \Twig_Error_Runtime
	 * @throws \Twig_Error_Syntax
	 */
	protected function compilePicker(&$templateData, bool $timepickerOnly): void
	{
		$pickerPosition = 'inputAppend';
		$pickerType = 'datepicker';
		if ($timepickerOnly)
		{
			$pickerType = 'timepicker';
		}
		$picker = $this->twig->render("@HeimrichHannotContaoFlatpickr/forms/partials/btn_datepicker.html.twig", [
			'picker' => $pickerType,
		]);

		if ((isset($templateData['arrConfiguration']['prependDatePicker']) && $templateData['arrConfiguration']['prependDatePicker'] === true)
            || (isset($templateData['arrConfiguration']['flatpickr']['options']['prependDatePicker'])
                && $templateData['arrConfiguration']['flatpickr']['options']['prependDatePicker'] === true )) {
			$pickerPosition = 'inputPrepend';
		}
		if (!isset($templateData['arrConfiguration'][$pickerPosition]))
		{
			$templateData['arrConfiguration'][$pickerPosition] = '';
		}
		$templateData['arrConfiguration'][$pickerPosition] .= $picker;
	}

	protected function generateAttributes(array &$attributes, array $config, bool $datepicker, bool $timepicker)
	{
		if (isset($config['minDate']) && !($config['flatpickr']['active'] && isset($config['flatpickr']['options']['minDate'])))
		{
			$attributes['data-min-date'] = $config['minDate'];
		}

		if (isset($config['maxDate']) && !($config['flatpickr']['active'] && isset($config['flatpickr']['options']['maxDate'])))
		{
			$attributes['data-max-date'] = $config['maxDate'];
		}

        if (isset($config['enableAmPm']) && ($config['enableAmPm'] === true) && !( $config['flatpickr']['active'] && isset($config['flatpickr']['options']['enableAmPm'])))
        {
            $attributes['enableAmPm'] = true;
        }

		if ($timepicker && !($config['flatpickr']['active'] && $config['flatpickr']['options']['enableTime']))
		{
			$attributes['data-enable-time'] = true;
		}

		if (!$datepicker && !($config['flatpickr']['active'] && $config['flatpickr']['options']['noCalendar'])) {
			$attributes['data-no-calendar'] = true;
		}

		$dateFormat = $GLOBALS['TL_CONFIG']['dateFormat'];
		if ($datepicker && $timepicker)
		{
			$dateFormat = $GLOBALS['TL_CONFIG']['datimFormat'];
		}
		elseif (!$datepicker && $timepicker) {
			$dateFormat = $GLOBALS['TL_CONFIG']['timeFormat'];
		}

        if (!isset($config['flatpickr']) && !$config['flatpickr']['active'])
        {
            $attributes['data-date-format'] = $dateFormat;
            $attributes['data-iso8601-format'] = System::getContainer()->get('huh.utils.date')->transformPhpDateFormatToISO8601($dateFormat);
        } elseif($config['flatpickr']['active']) {
            $config['flatpickr']['options']['dateFormat'] = $dateFormat;
            $config['flatpickr']['options']['dateFormatIso8601'] = System::getContainer()->get('huh.utils.date')->transformPhpDateFormatToISO8601($dateFormat);
        }

        if (isset($config['flatpickr']) && $config['flatpickr']['active'])
        {
            $attributes['data-flatpickr'] = json_encode($config['flatpickr']['options'], true);
        }

	}
}
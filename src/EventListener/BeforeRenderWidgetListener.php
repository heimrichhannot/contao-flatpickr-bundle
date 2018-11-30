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


use HeimrichHannot\BootstrapTemplatesBundle\BootstrapTemplate\FormTemplate;
use HeimrichHannot\BootstrapTemplatesBundle\Event\BeforeRenderBootstrapTemplateEvent;
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

	public function onHuhBootstrapBeforeRenderTemplate(BeforeRenderBootstrapTemplateEvent $event)
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

		if (isset($config['minDate']))
		{
			$attributes['data-min-date'] = $config['minDate'];
		}
		if (isset($config['maxDate']))
		{
			$attributes['data-max-date'] = $config['maxDate'];
		}
		if ($timepicker)
		{
			$attributes['data-enable-time'] = true;
		}
		if (!$datepicker) {
			$attributes['data-no-calendar'] = true;
		}

		$templateData = $event->getTemplateData();
		$templateData['arrConfiguration']['datepicker'] = $datepicker;
		$templateData['arrConfiguration']['timepicker'] = $timepicker;
		$this->generatePicker($templateData);
		$this->generateAttributes($templateData, $attributes);
		$templateData['inputGroupClass'] = $templateData['inputGroupClass'] ? $templateData['inputGroupClass'].' flatpickr' : 'flatpickr';
		$event->setTemplateData($templateData);
	}

	protected function generateAttributes(array &$templateData, array $attributeList)
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
				$attributes .= $key.'="'.$value.'"';
			}
			else {
				$attributes .= $value;
			}
		}
		$templateData['attributes'] = trim($attributes, " ");
	}

	/**
	 * @param $templateData
	 * @param string $pickerPosition
	 * @throws \Twig_Error_Loader
	 * @throws \Twig_Error_Runtime
	 * @throws \Twig_Error_Syntax
	 */
	protected function generatePicker(&$templateData): void
	{
		$pickerPosition = 'inputAppend';
		if (isset($templateData['arrConfiguration']['prependDatePicker']) && $templateData['arrConfiguration']['prependDatePicker'] === true) {
			$pickerPosition = 'inputPrepend';
		}
		$picker = $this->twig->render("@HeimrichHannotContaoFlatpickr/forms/partials/btn_datepicker.html.twig");
		if (!isset($templateData['arrConfiguration'][$pickerPosition]))
		{
			$templateData['arrConfiguration'][$pickerPosition] = '';
		}
		$templateData['arrConfiguration'][$pickerPosition] .= $picker;
	}
}
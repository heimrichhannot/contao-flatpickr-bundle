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
			$attributes['data-minDate'] = $config['minDate'];
		}
		if (isset($config['maxDate']))
		{
			$attributes['data-maxDate'] = $config['maxDate'];
		}

		$templateData = $event->getTemplateData();
		$templateData['arrConfiguration']['datepicker'] = $datepicker;
		$templateData['arrConfiguration']['timepicker'] = $timepicker;
		$templateData['arrConfiguration']['inputAppend'] = $this->twig->render("@HeimrichHannotContaoFlatpickr/forms/partials/btn_datepicker.html.twig");
		$templateData['attributes'] = $this->generateAttributes($templateData['attributes'], $attributes);
		$templateData['inputGroupClass'] = $templateData['inputGroupClass'] ? $templateData['inputGroupClass'].' flatpickr' : 'flatpickr';
		$event->setTemplateData($templateData);
	}

	protected function generateAttributes(?string $attributes, array $attibutesToAdd)
	{
		$result = '';
		foreach ($attibutesToAdd as $key=>$value)
		{
			if (is_string($key))
			{
				$result.=$key.'="'.$value.'" ';
			}
			else {
				$result.= $value;
			}
		}
		if ($attributes)
		{
			$result = $attributes.' '. $result;
		}
		return trim($result, " ");
	}
}
<?php
/**
 * Contao Open Source CMS
 *
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @author  Thomas Körner <t.koerner@heimrich-hannot.de>
 * @license http://www.gnu.org/licences/lgpl-3.0.html LGPL
 */

namespace HeimrichHannot\FlatpickrBundle\ContaoManager;

use Contao\CoreBundle\ContaoCoreBundle;
use Contao\ManagerPlugin\Bundle\BundlePluginInterface;
use Contao\ManagerPlugin\Bundle\Config\BundleConfig;
use Contao\ManagerPlugin\Bundle\Parser\ParserInterface;
use Contao\ManagerPlugin\Config\ConfigPluginInterface;
use Contao\ManagerPlugin\Config\ContainerBuilder;
use Contao\ManagerPlugin\Config\ExtensionPluginInterface;
use HeimrichHannot\FlatpickrBundle\HeimrichHannotFlatpickrBundle;
use HeimrichHannot\EncoreBundle\HeimrichHannotContaoEncoreBundle;
use HeimrichHannot\UtilsBundle\Container\ContainerUtil;
use Symfony\Component\Config\Loader\LoaderInterface;

class Plugin implements BundlePluginInterface, ConfigPluginInterface
{

    /**
     * {@inheritdoc}
     */
	public function getBundles(ParserInterface $parser)
	{
        $loadAfter = [ContaoCoreBundle::class];

        if (class_exists('HeimrichHannot\EncoreBundle\HeimrichHannotContaoEncoreBundle')) {
            $loadAfter[] = HeimrichHannotContaoEncoreBundle::class;
        }

		return [
			BundleConfig::create(HeimrichHannotFlatpickrBundle::class)->setLoadAfter($loadAfter),
		];
	}

	public function registerContainerConfiguration(LoaderInterface $loader, array $managerConfig)
	{
        if (class_exists('HeimrichHannot\EncoreBundle\HeimrichHannotContaoEncoreBundle')) {
            $loader->load('@HeimrichHannotFlatpickrBundle/Resources/config/config_encore.yml');
        }

		$loader->load('@HeimrichHannotFlatpickrBundle/Resources/config/services.yml');
		$loader->load('@HeimrichHannotFlatpickrBundle/Resources/config/listeners.yml');
	}
}
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
use HeimrichHannot\FilterBundle\HeimrichHannotContaoFilterBundle;
use HeimrichHannot\FlatpickrBundle\HeimrichHannotFlatpickrBundle;
use HeimrichHannot\EncoreBundle\HeimrichHannotContaoEncoreBundle;
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

        if(class_exists('HeimrichHannot\FilterBundle\HeimrichHannotContaoFilterBundle')) {
            $loadAfter[] = HeimrichHannotContaoFilterBundle::class;
        }

		return [
			BundleConfig::create(HeimrichHannotFlatpickrBundle::class)->setLoadAfter($loadAfter),
		];
	}

    public function registerContainerConfiguration(LoaderInterface $loader, array $managerConfig)
    {
		$loader->load('@HeimrichHannotFlatpickrBundle/Resources/config/services.yml');
	}
}
<?php

/*
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\FlatpickrBundle\Asset;

use Symfony\Component\DependencyInjection\ContainerInterface;

class FrontendAsset
{
    /**
     * @var ContainerInterface
     */
    private $container;

    /**
     * FrontendAsset constructor.
     */
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public function addFrontendAssets()
    {
        if (!$this->container->get('huh.utils.container')->isFrontend()) {
            return;
        }

        if ($this->container->has('huh.encore.asset.frontend')) {
            $this->container->get('huh.encore.asset.frontend')->addActiveEntrypoint('contao-flatpickr-bundle');
            $this->container->get('huh.encore.asset.frontend')->addActiveEntrypoint('contao-flatpickr-bundle-theme');
        }

        $GLOBALS['TL_CSS']['contao-flatpickr-bundle'] = 'bundles/heimrichhannotflatpickr/assets/contao-flatpickr-bundle-theme.css';
        $GLOBALS['TL_JAVASCRIPT']['contao-flatpickr-bundle'] = 'bundles/heimrichhannotflatpickr/assets/contao-flatpickr-bundle.js';
        $GLOBALS['TL_JAVASCRIPT']['contao-flatpickr-bundle-theme'] = 'bundles/heimrichhannotflatpickr/assets/contao-flatpickr-bundle-theme.js';
    }
}

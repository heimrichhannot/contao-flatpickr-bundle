<?php

/*
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\FlatpickrBundle\Asset;

use HeimrichHannot\UtilsBundle\Container\ContainerUtil;
use HeimrichHannot\EncoreBundle\Asset\FrontendAsset as EncoreFrontendAsset;

class FrontendAsset
{
    /**
     * @var EncoreFrontendAsset
     */
    protected $encoreFrontendAsset;

    /**
     * @var ContainerUtil
     */
    protected $containerUtil;

    /**
     * FrontendAsset constructor.
     */
    public function __construct(ContainerUtil $containerUtil)
    {
        $this->containerUtil = $containerUtil;
    }

    public function setEncoreFrontendAsset(EncoreFrontendAsset $encoreFrontendAsset): void
    {
        $this->encoreFrontendAsset = $encoreFrontendAsset;
    }

    public function addFrontendAssets()
    {
        if (!$this->containerUtil->isFrontend()) {
            return;
        }

        if ($this->encoreFrontendAsset) {

            if(!$this->encoreFrontendAsset->isActiveEntrypoint('contao-flatpickr-bundle')) {
                $this->encoreFrontendAsset->addActiveEntrypoint('contao-flatpickr-bundle');
            }

            if(!$this->encoreFrontendAsset->isActiveEntrypoint('contao-flatpickr-bundle-theme')) {
                $this->encoreFrontendAsset->addActiveEntrypoint('contao-flatpickr-bundle-theme');
            }

        }

        $GLOBALS['TL_CSS']['contao-flatpickr-bundle'] = 'bundles/heimrichhannotflatpickr/assets/contao-flatpickr-bundle-theme.css';
        $GLOBALS['TL_JAVASCRIPT']['contao-flatpickr-bundle'] = 'bundles/heimrichhannotflatpickr/assets/contao-flatpickr-bundle.js';
        $GLOBALS['TL_JAVASCRIPT']['contao-flatpickr-bundle-theme'] = 'bundles/heimrichhannotflatpickr/assets/contao-flatpickr-bundle-theme.js';

    }
}

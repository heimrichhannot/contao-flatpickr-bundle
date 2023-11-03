<?php

/*
 * Copyright (c) 2023 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\FlatpickrBundle\Asset;

use HeimrichHannot\EncoreContracts\PageAssetsTrait;
use HeimrichHannot\UtilsBundle\Util\Utils;
use Symfony\Contracts\Service\ServiceSubscriberInterface;

class FrontendAsset implements ServiceSubscriberInterface
{
    use PageAssetsTrait;

    private Utils $utils;

    /**
     * FrontendAsset constructor.
     */
    public function __construct(Utils $utils)
    {
        $this->utils = $utils;
    }

    public function addFrontendAssets()
    {
        if ($this->utils->container()->isFrontend()) {
           $this->addPageEntrypoint('contao-flatpickr-bundle', [
               'TL_CSS' => [
                   'contao-flatpickr-bundle' => 'bundles/heimrichhannotflatpickr/assets/contao-flatpickr-bundle-theme.css',
               ],
               'TL_JAVASCRIPT' => [
                   'contao-flatpickr-bundle' => 'bundles/heimrichhannotflatpickr/assets/contao-flatpickr-bundle.js',
                   'contao-flatpickr-bundle-theme' => 'bundles/heimrichhannotflatpickr/assets/contao-flatpickr-bundle-theme.js',
               ],
           ]);
        }
    }

}

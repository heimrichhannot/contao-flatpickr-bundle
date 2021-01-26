<?php
/**
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\FlatpickrBundle\EventListener;


use Contao\DataContainer;
use HeimrichHannot\FlatpickrBundle\Util\FlatpickrUtil;

class GetAttributesFromDcaListener
{
    /**
     * @var FlatpickrUtil
     */
    private $flatpickrUtil;

    /**
     * GetAttributesFromDcaListener constructor.
     *
     * @param null $pageParents
     */
    public function __construct(FlatpickrUtil $flatpickrUtil)
    {
        $this->flatpickrUtil = $flatpickrUtil;
    }

    /**
     * @Hook("getAttributesFromDca")
     *
     * @param DataContainer $dc
     */
    public function onGetAttributesFromDca(array $attributes, $dc = null): array
    {
        return array_merge($attributes, $this->flatpickrUtil->getFlatpickrAttributes($attributes));
    }
}
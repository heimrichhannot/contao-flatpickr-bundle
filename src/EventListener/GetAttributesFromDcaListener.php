<?php
/**
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\FlatpickrBundle\EventListener;


use Contao\CoreBundle\ServiceAnnotation\Hook;
use Contao\DataContainer;
use HeimrichHannot\FlatpickrBundle\Util\FlatpickrUtil;

/**
 * @Hook("getAttributesFromDca")
 */
class GetAttributesFromDcaListener
{
    private FlatpickrUtil $flatpickrUtil;

    public function __construct(FlatpickrUtil $flatpickrUtil)
    {
        $this->flatpickrUtil = $flatpickrUtil;
    }

    /**
     * @param DataContainer $dc
     */
    public function __invoke(array $attributes, $dc = null): array
    {
        if (!($dc instanceof DataContainer) && null !== $dc) {
            return $attributes;
        }

        return array_merge($attributes, $this->flatpickrUtil->getFlatpickrAttributes($attributes, $dc));
    }
}
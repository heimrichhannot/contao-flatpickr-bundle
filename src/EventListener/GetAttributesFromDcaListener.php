<?php
/**
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\FlatpickrBundle\EventListener;


use Contao\CoreBundle\ServiceAnnotation\Hook;
use Contao\DataContainer;
use HeimrichHannot\FlatpickrBundle\Asset\FrontendAsset;
use HeimrichHannot\FlatpickrBundle\Option\FlatpickrOptions;
use HeimrichHannot\UtilsBundle\Dca\DcaUtil;
use HeimrichHannot\UtilsBundle\Model\ModelUtil;
use HeimrichHannot\UtilsBundle\Util\Utils;

/**
 * @Hook("getAttributesFromDca")
 */
class GetAttributesFromDcaListener
{
    private FlatpickrOptions $flatpickrOptions;
    private DcaUtil          $dcaUtil;
    private Utils            $utils;
    private ModelUtil        $modelUtil;
    private FrontendAsset    $frontendAsset;

    public function __construct(FlatpickrOptions $flatpickrOptions, DcaUtil $dcaUtil, Utils $utils, ModelUtil $modelUtil, FrontendAsset $frontendAsset)
    {
        $this->flatpickrOptions = $flatpickrOptions;
        $this->dcaUtil = $dcaUtil;
        $this->utils = $utils;
        $this->modelUtil = $modelUtil;
        $this->frontendAsset = $frontendAsset;
    }

    /**
     * @param DataContainer $dc
     */
    public function __invoke(array $attributes, $context = null): array
    {
        if (!($context instanceof DataContainer) && null !== $context) {
            return $attributes;
        }

        if (!$this->dcaUtil->getOverridableProperty('useFlatpickrForDatepicker', $this->getPageWithParents())) {
            return $attributes;
        }

        if (!isset($attributes['flatpickr']['active']) || !$attributes['flatpickr']['active']) {
            return $attributes;
        }

        $this->frontendAsset->addFrontendAssets();

        return array_merge($attributes, $this->flatpickrOptions->getWidgetAttributes($attributes, $context));
    }

    /**
     * retrieve page and its parent pages
     *
     * @return array
     */
    protected function getPageWithParents(): array
    {
        $currentPage = $this->utils->request()->getCurrentPageModel();

        if (null === $currentPage) {
            return [];
        }

        $pages   = $this->modelUtil->findParentsRecursively('pid', 'tl_page', $currentPage);
        $pages[] = $currentPage;

        return $pages;
    }
}
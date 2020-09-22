<?php
/**
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\FlatpickrBundle\EventListener;


use Contao\DataContainer;
use Contao\PageModel;
use HeimrichHannot\FlatpickrBundle\Asset\FrontendAsset;
use HeimrichHannot\FlatpickrBundle\Event\CustomizeFlatpickrOptionsEvent;
use Psr\Container\ContainerInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class GetAttributesFromDcaListener
{

    private $pageParents = null;

    /**
     * @var ContainerInterface
     */
    private $container;

    /**
     * @var FrontendAsset
     */
    private $frontendAsset;

    /**
     * @var EventDispatcherInterface
     */
    private $eventDispatcher;

    /**
     * GetAttributesFromDcaListener constructor.
     *
     * @param null $pageParents
     */
    public function __construct(ContainerInterface $container, FrontendAsset $frontendAsset, EventDispatcherInterface $eventDispatcher)
    {
        $this->container = $container;
        $this->frontendAsset = $frontendAsset;
        $this->eventDispatcher = $eventDispatcher;
    }

    /**
     * @Hook("getAttributesFromDca")
     *
     * @param DataContainer $dc
     */
    public function onGetAttributesFromDca(array $attributes, $dc = null): array
    {
        $this->getPageWithParents();

        if (null !== $this->pageParents) {
            if ('text' === $attributes['type']) {
                $property = $this->container->get('huh.utils.dca')->getOverridableProperty('useFlatpickrForDatepicker', $this->pageParents);

                if (true === (bool) $property) {
                    if ($attributes['flatpickr']['active']) {
                        $attributes['data-flatpickr-active'] = true;
                        $attributes['data-input'] = '1';
                        $attributes['prefix'] = 'flatpickr';

                        $this->frontendAsset->addFrontendAssets();

                    }
                }
            }
        }

        $customOptions = [];

        if (isset($attributes['flatpickr']['options']) && \is_array($attributes['flatpickr']['options'])) {
            $customOptions = $attributes['flatpickr']['options'];
            $customOptions['rgxp'] = $attributes['rgxp'];
        }


        if ($attributes['flatpickr']['active']) {
            $customOptions = $this->container->get('huh.flatpickr.manager.flatpickr_manager')->getOptionsAsArray($customOptions);
        }
        $event = $this->eventDispatcher->dispatch(CustomizeFlatpickrOptionsEvent::NAME, new CustomizeFlatpickrOptionsEvent(
            $customOptions,
            $attributes,
            $dc
        ));

        if ($attributes['flatpickr']['active']) {
            $attributes['data-flatpickr'] = json_encode($event->getFlatpickrOptions());
        }

        return $attributes;
    }

    protected function getPageWithParents()
    {
        /* @var PageModel $objPage */
        global $objPage;

        if (null === $this->pageParents && null !== $objPage) {
            $this->pageParents = $this->container->get('huh.utils.model')->findParentsRecursively('pid', 'tl_page', $objPage);
            $this->pageParents[] = $objPage;
        }

        return $this->pageParents;
    }
}
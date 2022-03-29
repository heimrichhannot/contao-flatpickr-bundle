<?php
/**
 * Copyright (c) 2020 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\FlatpickrBundle\Event;

use Contao\DataContainer;
use Symfony\Component\EventDispatcher\Event;

class CustomizeFlatpickrOptionsEvent extends Event
{
    const NAME = 'huh.flatpickr.customize_flatpickr_options';

    /**
     * @var array
     */
    private $flatpickrOptions;

    /**
     * @var array
     */
    private $fieldAttributes;

    /**
     * @var DataContainer|null
     */
    private $dc;

    /**
     * CustomizeChoicesOptionsEvent constructor.
     *
     * @param DataContainer|null $dc
     */
    public function __construct(array $customOptions, array $fieldAttributes, $dc)
    {
        $this->flatpickrOptions = $customOptions;
        $this->fieldAttributes = $fieldAttributes;
        $this->dc = $dc;
    }

    public function setFlatpickrOption(string $option, string $value): void
    {
        $this->flatpickrOptions[$option] = $value;
    }

    public function getFlatpickrOptions(): array
    {
        return $this->flatpickrOptions;
    }

    public function setFlatpickrOptions(array $options)
    {
        $this->flatpickrOptions = $options;
    }

    public function getFieldAttributes(): array
    {
        return $this->fieldAttributes;
    }

    public function getDc()
    {
        return $this->dc;
    }

}
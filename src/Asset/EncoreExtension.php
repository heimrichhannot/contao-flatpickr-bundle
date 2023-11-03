<?php

namespace HeimrichHannot\FlatpickrBundle\Asset;

use HeimrichHannot\EncoreContracts\EncoreEntry;
use HeimrichHannot\EncoreContracts\EncoreExtensionInterface;
use HeimrichHannot\FlatpickrBundle\HeimrichHannotFlatpickrBundle;

class EncoreExtension implements EncoreExtensionInterface
{

    public function getBundle(): string
    {
        return HeimrichHannotFlatpickrBundle::class;
    }

    public function getEntries(): array
    {
        return [
            EncoreEntry::create('contao-flatpickr-bundle-init', 'src/Resources/assets/js/contao-flatpickr-bundle-init.js')
                ->addJqueryEntryToRemoveFromGlobals('contao-flatpickr-bundle-init'),
            EncoreEntry::create('contao-flatpickr-bundle-theme', 'src/Resources/assets/js/contao-flatpickr-bundle-theme.js')
                ->setRequiresCss(true)
                ->addJqueryEntryToRemoveFromGlobals('contao-flatpickr-bundle-theme')
        ];
    }
}
<?php
/**
 * Contao Open Source CMS
 *
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @author  Thomas Körner <t.koerner@heimrich-hannot.de>
 * @license http://www.gnu.org/licences/lgpl-3.0.html LGPL
 */

$GLOBALS['TL_HOOKS']['getAttributesFromDca']['flatpickr'] = [
    \HeimrichHannot\FlatpickrBundle\EventListener\GetAttributesFromDcaListener::class, 'onGetAttributesFromDca'
];

$GLOBALS['TL_HOOKS']['loadDataContainer']['huh_flatpickr'] = [
    \HeimrichHannot\FlatpickrBundle\EventListener\LoadDataContainerListener::class, '__invoke',
];
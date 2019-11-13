# Contao Flatpickr Bundle

[![Latest Stable Version](https://poser.pugx.org/heimrichhannot/contao-flatpickr-bundle/v/stable)](https://packagist.org/packages/heimrichhannot/contao-flatpickr-bundle)
[![Total Downloads](https://poser.pugx.org/heimrichhannot/contao-flatpickr-bundle/downloads)](https://packagist.org/packages/heimrichhannot/contao-flatpickr-bundle)

A bundle to provide frontend date- and timepicker using [flatpickr.js](https://flatpickr.js.org).

> Beta. Currently only works with [Contao Bootstrap Templates Bundle](https://github.com/heimrichhannot/contao-bootstrap-templates-bundle) or [Contao Filter Bundle](https://github.com/heimrichhannot/contao-filter-bundle).

## Features
* show date- or timepicker in frontend forms
* dynamic language file loading using webpack dynamic import
* supports [Contao Bootstrap Templates Bundle](https://github.com/heimrichhannot/contao-bootstrap-templates-bundle)
* supports [Contao Encore Bundle](https://github.com/heimrichhannot/contao-encore-bundle)
* supports [Contao Filter Bundle](https://github.com/heimrichhannot/contao-filter-bundle)

## Setup

Install: `composer require heimrichhannot/contao-flatpickr-bundle`

## Usage

### DCA configuration

To add flatpickr to an input, set datepicker for your fields in dca to true. You can switch between datepicker, timepicker and datetimepicker by setting the corresponding format in the 'rgxp' setting.

Following additional evaluation fields are added to configure flatpickr:

Option            | Type   | Default | Description
----------------- | ------ | ------- | -----------
minDate           | string |         | A formatted date/time constraining the date/time picker to a certain minimum date/time.
maxDate           | string |         | A formatted date/time constraining the date/time picker to a certain maximum date/time.
prependDatePicker | bool   | false   | Prepend date picker button instead of append it.
enableAmPm        | bool   | false   | Display a AM/PM selector instead of using 24 hr format.

## Developers

### Events

Event | Event ID
----- | ---------
Adjust flatpickr Instance options before flatpickr initialization | `huh.flatpickr.event.prepare`

### Filter Bundle

Flatpickr is automatically added to `date` and `date_time` fields. If you want to open it also on input group prepends or append, you need to add `data-toggle` attribute to the surrounding element (for example a button). For the the options shipped already in filter bundle, flatpickr-versions are provided and just need to be selected.
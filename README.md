# Contao Flatpickr Bundle
A bundle to provide frontend date- and timepicker using [flatpickr.js](https://flatpickr.js.org).

## Features
* show date- or timepicker in frontend forms
* dynamic language file loading using webpack dynamic import
* integrations:
  * Contao form generator
  * [Filter Bundle](https://github.com/heimrichhannot/contao-filter-bundle)
* supports [Contao Encore Bundle](https://github.com/heimrichhannot/contao-encore-bundle)
* supports [Twig Templates Bundle](https://github.com/heimrichhannot/contao-twig-templates-bundle)

## Usage

### Install

Install with composer or contao manager and update the database afterwards

```
composer require heimrichhannot/contao-flatpickr-bundle
```

### Form generator

Create a text field with input validation date, time or date and time and check 'Activate flatpickr'

### Filter bundle 

Create a filter element of type date, datetime, time or text and check 'Activate flatpickr'. You can also activate flatpickr and pass additional options from dca. See chapter dca configuration for more information. Flatpickr bundle checks the corresponding field dca configuration for filter elements.

### DCA / Other frontend forms

Other frontend form systems may work (like [formhybrid](https://github.com/heimrichhannot/contao-formhybrid)), if the form widgets are processed by the getAttributesFromDca hook. You need to activate flatpickr in your dca field configuration and activate flatpickr on page level (layout section). The configuration is inherited but can be overridden.

To actived flatpickr for a dca field, set `field.eval.flatpickr.active` to `true`.

```php
$GLOBALS['TL_DCA']['tl_content']['fields']['date']['eval']['flatpickr']['active'] = true;
```

You can customize the picker type with `rgxp` eval option and pass additional flatpickr configuration:

```php
$GLOBALS['TL_DCA']['tl_content']['fields']['date'] = [
    'eval' => [
        'rgxp' => 'datim' # one of 'date', 'time' or 'datim'
        'flatpickr' => [
            'active' => true,
            'options' => [], // Pass addtional flatpickr option, see configuration chapter
            'plugins' => [], // Use and configure flatpickr plugins, see configuration chapter
          ],
    ]   
];
```

## Configuration

If flatpickr is activated for a field, it already works "out-of-the-box". Sometime additional customization are needed.

### Flatpickr picker type

Three picker types are supported: date, time and datetime.
The types are automatically selected by setting the `rgxp` value to one of 'date', 'time' or 'datim'

```php
$field['eval']['rgxp'] = 'time'
```

### Custom configuration

The most config options from flatpickr should work with this bundle.

These options can be set from:
* DCA (works for filter bundle and other frontend forms): Add the configuration to `$field['eval']['flatpickr']['options']`
* php event (work with all types): See developers chapter
* javascript event (work with all type): see developers chapter

Typical configuration options:

| Option    | Type   | Default | Description                                                                             |
|-----------|--------|---------|-----------------------------------------------------------------------------------------|
| minDate   | string |         | A formatted date/time constraining the date/time picker to a certain minimum date/time. |
| maxDate   | string |         | A formatted date/time constraining the date/time picker to a certain maximum date/time. |
| time_24hr | bool   | true    | Disable to display a AM/PM selector instead of using 24 hr format.                      |


Following additional configuration are available from this bundle:

| Option                 | Type   | Default | Description                                                                                            |
|------------------------|--------|---------|--------------------------------------------------------------------------------------------------------|
| incrementArrows        | array  |         | Append and prepend arrow buttons to increment/decrement date/time by defined amount                    |
| incrementArrows.unit   | string |         | Unit of time to increment/decrement by. **Valid values:** years, months, days, hours, minutes, seconds |
| incrementArrows.amount | int    |         | The value of time to increment/decrement by.                                                           |
| prependPicker          | bool   | false   | Prepend date picker button instead of append it.                                                       |
| customBtnTpl           | string |         | Bet custom template for flatpickr button. Type in template name (eg. btn_datepicker)                   |

### Plugins

Flatpickr can be extended with plugins. Plugins supported by this bundle can by activated and configured from `$field['eval']['flatpickr']['plugins']`.

#### monthSelectPlugin

[monthSelectPlugin](https://flatpickr.js.org/plugins/#monthselectplugin) shows a month-only calendar view. Additional to the default configuration options of the plugin
there is an addition `disabledMonths` option.

Example: 

```php
$GLOBALS['TL_DCA']['tl_content']['fields']['date']['eval']['flatpickr']['plugins']['monthSelectPlugin'] = [
    'shorthand' => true,
    'dateFormat' => "M Y",
    'disabledMonths' => [2021 => [0,3,6]]
];
```

#### rangePlugin

[rangePlugin](https://flatpickr.js.org/plugins/#rangeplugin-beta) add a range selection using two inputs.
It can be enabled in form generator or from dca:

```php
$GLOBALS['TL_DCA']['tl_content']['fields']['startDate']['eval']['flatpickr']['plugins']['rangePlugin'] = [
    'input' => '#stopDate',
];
```

## Developers

### Events

Event                                       | Description
------------------------------------------- | ---------
`huh.flatpickr.customize_flatpickr_options` | Adjust flatpickr options before they are parsed to frontend template 

#### JavaScript events
Event name               | Data                    | Description
------------------------ | ----------------------- | -----------
huh.flatpickr.prepare    | options, target, lang   | Customize flatpickr Element

### Update from version 1.x to 2.x
+ add `flatpickr => [ active => true ]` to the eval array of the dca configuration
+ move the configuration in dca from `eval` to `eval => [ flatpickr => [ options => [ option => value ] ] ]`

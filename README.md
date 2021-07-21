# Contao Flatpickr Bundle
A bundle to provide frontend date- and timepicker using [flatpickr.js](https://flatpickr.js.org).

## Features
* show date- or timepicker in frontend forms
* dynamic language file loading using webpack dynamic import
* supports [Contao Bootstrap Templates Bundle](https://github.com/heimrichhannot/contao-bootstrap-templates-bundle)
* supports [Contao Encore Bundle](https://github.com/heimrichhannot/contao-encore-bundle)

## Setup

Install: `composer require heimrichhannot/contao-flatpickr-bundle`

## Usage

Active or deactivate flatpickr support on page level (Layout section). You can overwrite settings from a parent page.

### DCA configuration

To add flatpickr to an input, set datepicker for your fields in dca to true. You can switch between datepicker, timepicker and datetimepicker by setting the corresponding format in the 'rgxp' setting.

Following additional evaluation fields are added to configure flatpickr:

Option                                              | Type   | Default | Description
--------------------------------------------------- | ------ | ------- | -----------
field.eval.flatpickr                                | array  |         | Configuration of additional flatpickr options, implemented only by this bundle
field.eval.flatpickr.active                         | bool   | false   | Activate additional flatpickr configuration
field.eval.flatpickr.options                        | array  |         | Additional configuration options
field.eval.flatpickr.options.incrementArrows        | array  |         | Append and prepend arrow buttons to increment/decrement date/time by defined amount
field.eval.flatpickr.options.incrementArrows.unit   | string |         | Unit of time to increment/decrement by. **Valid values:** years, months, days, hours, minutes, seconds
field.eval.flatpickr.options.incrementArrows.amount | int    |         | The value of time to increment/decrement by.
field.eval.flatpickr.options.minDate                | string |         | A formatted date/time constraining the date/time picker to a certain minimum date/time.
field.eval.flatpickr.options.maxDate                | string |         | A formatted date/time constraining the date/time picker to a certain maximum date/time.
field.eval.flatpickr.options.prependDatePicker      | bool   | false   | Prepend date picker button instead of append it.
field.eval.flatpickr.options.enableAmPm             | bool   | false   | Display a AM/PM selector instead of using 24 hr format.
field.eval.flatpickr.options.customBtnTpl           | string |         | Bet custom template for flatpickr button. Type in template name (eg. btn_datepicker)

It is also possible to use plugins. Only one plugin is currently implemented: <b>monthSelectPlugin</b>
Plugins can be activated over dca configuration:

Option                                              | Type   | Default | Description
--------------------------------------------------- | ------ | ------- | -----------
field.eval.flatpickr.plugins.monthSelectPlugin      | array  |         | Configuration of additional flatpickr options, implemented only by this bundle

the plugin configuration from https://flatpickr.js.org/plugins/#monthselectplugin is supported.

It is also possible to disable months for each year with(<i>see example below</i>):
field.eval.flatpickr.plugins.monthSelectPlugin.disabledMonths

#### Example
```php
    'fieldName' => [
        'eval' = [
            'flatpickr' => [ 
                'active' => true,
                'options' => [
                    'minDate' => '09.09.2020',
                    'maxDate' => '29.09.2020',
                    'incrementArrows' => [
                        'unit' => 'days',
                        'amount' => 1,
                    ],
                ],
                'plugins' => [
                    'monthSelectPlugin' => [
                        'horthand' => true,
                        'dateFormat' => "M Y",
                        'disabledMonths' => [2021 => [0,3,6]]
                    ]
                ]
            ]
        ]
    ]
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

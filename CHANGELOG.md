# Changelog
All notable changes to this project will be documented in this file.

## [2.5.2] - 2021-07-29
- fixed GetAttributesFromDcaListener to return attributes if second argument is not typeof DataContainer or null

## [2.5.1] - 2021-07-22
- fixed property type in FlatpickrUtil

## [2.5.0] - 2021-07-21
- updated flatpickr depenency to 4.6.9
- added monthSelectPlugin
- added monthSelectPlugin style to theme encore-entry

## [2.4.4] - 2021-05-28
- fixed missing twig-support-bundle dependency
- fixed refactoring leftovers
- use TwigTemplateRenderer instead Twig/Environment for renderer template rendering

## [2.4.3] - 2021-03-19
- fixed type hint for multi column wizard

## [2.4.2] - 2021-02-23
- fixed service definition for symfony 3.4

## [2.4.1] - 2021-02-11
- added support for text filter element

## [2.4.0] - 2021-02-11
- added support for `filterAjaxComplete` event from contao-filter-bundle

## [2.3.0] - 2021-01-29
- refactored flatpickrUtil and Manager, added translation (#5)

## [2.2.0] - 2021-01-29
- added support for non-dca fields with default flatpickr options (#1)

## [2.1.2] - 2020-11-25
- added support for `formhybrid_ajax_complete` event from contao-formhybrid-compatibility-bundle

## [2.1.1] - 2020-10-19
- changed compile of picker button is now moved into `FlatpickrUtil`

## [2.1.0] - 2020-10-16
- added huh_filter support
- capsuled retrieval of flatpickr config for frontend field in util

## [2.0.1] - 2020-09-29
- added customizable flatpickr button template

## [2.0.0] - 2020-09-22
- refactored to use `GetAttributesFromDcaListener` event to parse dca configuration to frontend as data attributes
- refactored js dependencies
- refactored js code used for creation of flatpickr instances

## [1.1.0] - 2020-09-21
- added increment/decrement buttons to flatpickr instance
- added theme encore entry
- added moment.js dependency
- refactored BeforeRenderWidgetListener to function with field.eval.flatpickr.options
- refactored contao-flatpickr-bundle.js to function with field.eval.flatpickr.options

## [1.0.1] - 2020-07-17
- fixed encore entry definition

## [1.0.0] - 2019-11-13

* added CustomEvent 'huh.flatpickr.event.prepare' for adjusting flatpickr options before initialization

## [0.3.1] - 2019-08-21

* fixed localization not loaded correctly

## [0.3.0] - 2019-04-04

Now works without encore bundle!

* added input prepand and append config for filter bundle
* added support for non-encore-usage
* removed outdated lines from composer.json

## [0.2.0] - 2019-02-12

* added support for [Filter Bundle](https://github.com/heimrichhannot/contao-filter-bundle) AdjustFilterOptions event
* updated js file name to new internal conventions
* updated refactored FlatpickrBundle object to class

## [0.1.3] - 2019-01-30

* removed `console.log()` debug messages
* added bind to `formhybrid_ajax_complete` event listener

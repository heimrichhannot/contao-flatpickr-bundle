# Changelog
All notable changes to this project will be documented in this file.

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

# Contao Flatpickr Bundle

A bundle to provide frontend date- and timepicker using [flatpickr.js](https://flatpickr.js.org).

## Setup

## Usage

### DCA configuration

To add flatpickr to an input, set datepickr for your fields in dca to true. You can switch between datepicker, timepicker and datetimepicker by setting the corresponding format in the 'rgxp' setting.

Following additional evaluation fields are added to configure flatpickr:

Option  | Type   | Default | Description
------- | ------ | ------- | -----------
minDate | string |         | A formatted date/time constraining the date/time picker to a certain minimum date/time.
maxDate | string |         | A formatted date/time constraining the date/time picker to a certain maximum date/time.

### Template variables

Additional template variables

Name       | Type   | Default    | Description
---------- | ------ | ---------- | -----------
groupClass | string | form-group | The outer form group class
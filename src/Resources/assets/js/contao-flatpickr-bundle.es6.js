import flatpickr from "flatpickr";
require('flatpickr/dist/flatpickr.css');

function FlatpickrBundle(selector) {
    let elements = document.querySelectorAll(selector);
    if (undefined === elements)
    {
        return;
    }

    const defaultConfig = {
        wrap: true,
        time_24hr: true,
        allowInput: true
    };

    this.createFlatpickrInstances = function()
    {
        elements.forEach((element, key, parent) => {
            let options = Object.assign({}, defaultConfig);
            let inputElement = element.querySelector('input[type="text"]');
            if (inputElement.dataset.enableTime === '1') options.enableTime = true;
            if (inputElement.dataset.noCalendar === '1') options.noCalendar = true;
            if (inputElement.dataset.minDate) options.minDate = inputElement.dataset.minDate;
            if (inputElement.dataset.maxDate) options.maxDate = inputElement.dataset.maxDate;
            if (inputElement.dataset.dateFormat) options.dateFormat = inputElement.dataset.dateFormat;
            if (inputElement.dataset.enableAmPm === '1') options.time_24hr = false;
            flatpickr(element, options);
        });
    };


    let lang = document.querySelector('html').getAttribute('lang');

    import(/* webpackChunkName: "flatpickr-[request]" */ 'flatpickr/dist/l10n/' + lang + '.js').then((locale) =>
    {
        flatpickr.localize(locale.default[lang]);
        this.createFlatpickrInstances();

    }).catch(() => {
        this.createFlatpickrInstances()
    });
}

document.addEventListener("DOMContentLoaded", function() {
    new FlatpickrBundle('.flatpickr');
});

document.addEventListener('formhybrid_ajax_complete', function() {
    new FlatpickrBundle('.flatpickr');
});
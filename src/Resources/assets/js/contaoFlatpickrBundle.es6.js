import flatpickr from "flatpickr";
require('flatpickr/dist/flatpickr.css');

function FlatpickrBundle(selector) {
    let elements = document.querySelectorAll(selector);
    if (undefined === elements)
    {
        return;
    }
    elements.forEach((element, key, parent) => {
        let options = {
            wrap: true,
            time_24hr: true
        };
        let inputElement = element.querySelector('input[type="text"]');
        if (inputElement.dataset.enableTime === '1') options.enableTime = true;
        if (inputElement.dataset.noCalendar === '1') options.noCalendar = true;
        if (inputElement.dataset.minDate) options.minDate = inputElement.dataset.minDate;
        if (inputElement.dataset.maxDate) options.maxDate = inputElement.dataset.maxDate;
        if (inputElement.dataset.dateFormat) options.dateFormat = inputElement.dataset.dateFormat;
        if (inputElement.dataset.enableAmPm === '1') options.time_24hr = false;

        console.log(options);
        console.log(inputElement.dataset);

        flatpickr(element, options);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    new FlatpickrBundle('.flatpickr');
});
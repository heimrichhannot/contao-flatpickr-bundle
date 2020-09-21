import flatpickr from "flatpickr";
import moment from "moment";
require('flatpickr/dist/flatpickr.css');

class FlatpickrBundle
{
    constructor(selector)
    {
        this.elements = document.querySelectorAll(selector);
        this.defaultConfig = {
            wrap: true,
            time_24hr: true,
            allowInput: true
        };
        this.lang = document.querySelector('html').getAttribute('lang');

        import(/* webpackChunkName: "flatpickr-[request]" */ 'flatpickr/dist/l10n/' + this.lang + '.js').then((locale) =>
        {
            flatpickr.localize(locale.default[this.lang]);
            this.createFlatpickrInstances();

        }).catch(() => {
            this.createFlatpickrInstances()
        });
    }

    createFlatpickrInstances()
    {
        if (!this.elements)
        {
            return;
        }
        this.elements.forEach((element, key, parent) => {
            let options = Object.assign({}, this.defaultConfig);
            let inputElement = element.querySelector('input[type="text"]');
            if (inputElement.dataset !== undefined)
            {
                let flatpickrOptions = JSON.parse(inputElement.dataset.flatpickr);

                if ( typeof flatpickrOptions.dateFormat !== 'undefined' ) {
                    options.dateFormat = flatpickrOptions.dateFormat;
                } else if ( typeof inputElement.dataset.dateFormat !== 'undefined' ) {
                    options.dateFormat = inputElement.dataset.dateFormat;
                }

                if ( typeof flatpickrOptions.dateFormatIso8601 !== 'undefined' ) {
                    options.dateFormatIso8601 = flatpickrOptions.dateFormatIso8601;
                } else if ( typeof inputElement.dataset.dateFormatIso8601 !== 'undefined') {
                    options.dateFormatIso8601 = inputElement.dataset.dateFormatIso8601;
                }

                if (flatpickrOptions.enableTime === true || inputElement.dataset.enableTime === '1'){
                    options.enableTime = true
                }

                if ((flatpickrOptions.noCalendar === true) || (inputElement.dataset.noCalendar === '1')) {
                    options.noCalendar = true;
                }

                if ( typeof flatpickrOptions.minDate !== 'undefined') {
                    options.minDate = flatpickrOptions.minDate;
                } else if (typeof inputElement.dataset.minDate !== 'undefined') {
                    options.minDate = inputElement.dataset.minDate;
                }

                if ( typeof flatpickrOptions.maxDate !== 'undefined') {
                    options.maxDate = flatpickrOptions.maxDate;
                } else if (typeof inputElement.dataset.maxDate !== 'undefined') {
                    options.maxDate = inputElement.dataset.maxDate;
                }

                if ( flatpickrOptions.enableAmPm === true ) {
                    options.time_24hr = false;
                } else if (inputElement.dataset.enableAmPm === '1') {
                    options.time_24hr = false;
                }

                if ( typeof flatpickrOptions.incrementArrows !== 'undefined') {
                    options.incrementArrows = flatpickrOptions.incrementArrows;
                    this.createFlatpickrIncrementButtons(options, inputElement);
                }

            }

            let event = new CustomEvent('huh.flatpickr.event.prepare', {
                bubbles: true,
                cancelable: true,
                detail: {
                    options: options,
                    target: element,
                    input: inputElement,
                    lang: this.lang
                }
            });
            element.dispatchEvent(event);
            flatpickr(element, options);
        });
    }

    // returns array of html elements
    createFlatpickrIncrementButtons(options, element) {
        let before = document.createElement('a'),
            after = document.createElement('a');

        before.classList.add('outer-increment-minus');
        after.classList.add('outer-increment-plus');

        before.addEventListener('click', (e) => {
            e.preventDefault();
        })
        after.addEventListener('click', (e) => {
            e.preventDefault();
        })

        before.setAttribute('data-parent', element.id);
        after.setAttribute('data-parent', element.id);

        before.addEventListener('click', (e) => {
            element.value = this.calculateNewDate(options, element.value, 'minus');
        })

        after.addEventListener('click', (e) => {
            element.value = this.calculateNewDate(options, element.value, 'plus');
        })

        element.parentElement.appendChild(after);
        element.parentElement.insertBefore(before, element);

    }

    calculateNewDate(options, currentDate, operation) {
        let unit = options.incrementArrows.unit;
        let amount = options.incrementArrows.amount;
        let format = options.dateFormatIso8601;

        let newDate = currentDate;

        switch (operation) {
            case 'minus':
                if(!options.minDate || moment(currentDate, format).subtract(amount, unit) >= moment(options.minDate, format) )
                {
                    newDate = moment(currentDate, format).subtract(amount, unit).format(format);
                }
                break;
            case 'plus':
                if(!options.maxDate || moment(currentDate, format).add(amount, unit) <= moment(options.maxDate, format) )
                {
                    newDate = moment(currentDate, format).add(amount, unit).format(format);
                }
                break;
        }
        return newDate;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    new FlatpickrBundle('.flatpickr');
});

document.addEventListener('formhybrid_ajax_complete', function() {
    new FlatpickrBundle('.flatpickr');
});
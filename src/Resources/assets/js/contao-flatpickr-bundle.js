import flatpickr from 'flatpickr';
import moment from 'moment';

class FlatpickrBundle
{
    static init()
    {
        let flatpickrFields = document.querySelectorAll('input[data-flatpickr-active="1"]');

        flatpickrFields.forEach((element, key, parent) => {
            let flatpickrOptions = JSON.parse(element.dataset.flatpickr);
            let lang = document.querySelector('html').getAttribute('lang');

            import(/* webpackChunkName: "flatpickr-[request]" */ 'flatpickr/dist/l10n/' + lang + '.js').then((locale) =>
                {
                    flatpickr.localize(locale.default[lang]);
                    FlatpickrBundle.createFlatpickrInstance(element, flatpickrOptions);

                }).catch(() => {
                    FlatpickrBundle.createFlatpickrInstance(element, flatpickrOptions)
                });
        })
    }

    static createFlatpickrInstance(element, options)
    {
        let parent = element.parentElement;

        if ( typeof options.incrementArrows !== 'undefined') {
            FlatpickrBundle.createFlatpickrIncrementButtons(options, element);
        }

        let event = new CustomEvent('huh.flatpickr.prepare', {
            bubbles: true,
            cancelable: true,
            detail: {
                options: options,
                target: element,
                lang: document.querySelector('html').getAttribute('lang')
            }
        });
        element.dispatchEvent(event);

        flatpickr(parent, options);
    }

    // returns array of html elements
    static createFlatpickrIncrementButtons(options, element) {
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
            element.value = FlatpickrBundle.calculateNewDate(options, element.value, 'minus');
        })

        after.addEventListener('click', (e) => {
            element.value = FlatpickrBundle.calculateNewDate(options, element.value, 'plus');
        })

        element.parentNode.insertBefore(after, element.nextSibling);
        element.parentNode.insertBefore(before, element);
    }

    static calculateNewDate(options, currentDate, operation) {
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

export { FlatpickrBundle };


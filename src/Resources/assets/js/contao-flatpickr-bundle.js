import flatpickr from 'flatpickr';
import moment from 'moment';
import monthSelectPlugin from 'flatpickr/dist/plugins/monthSelect/index';
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin';


class FlatpickrBundle
{
    static init()
    {
        let flatpickrFields = document.querySelectorAll('input[data-flatpickr]');
        if (flatpickrFields.length < 1) {
            return;
        }

        let lang = document.querySelector('html').getAttribute('lang');

        let initialize = () => {
            flatpickrFields.forEach((element, key, parent) => {
                let flatpickrOptions = JSON.parse(element.dataset.flatpickr);
                if (!flatpickrOptions.hasOwnProperty('plugins')) {
                    flatpickrOptions.plugins = [];
                }

                if ('monthSelectPlugin' in flatpickrOptions) {
                    flatpickrOptions.plugins.push(new monthSelectPlugin(flatpickrOptions.monthSelectPlugin));
                }
                FlatpickrBundle.createFlatpickrInstance(element, flatpickrOptions);
            });
        };

        import(/* webpackChunkName: "flatpickr-[request]" */ 'flatpickr/dist/l10n/' + lang + '.js').then((locale) =>
        {
            flatpickr.localize(locale.default[lang]);
            initialize();

        }).catch(() => {
            initialize();
        });
    }

    static createFlatpickrInstance(element, options)
    {
        let wrap = false;
        if ('wrap' in options && true === options.wrap) {
            wrap = true;
        }

        let parent = element;
        if (true === wrap) {
            parent = element.parentElement;
        }

        if ('rangePlugin' in options && 'input' in options.rangePlugin) {
            let secondInput = document.querySelector(options.rangePlugin.input);
            if (true === wrap) {
                secondInput.dataset.input = '1';
                options.rangePlugin.input = secondInput.parentElement;
            }

            if (null !== secondInput) {
                options.plugins.push(new rangePlugin(options.rangePlugin));
                delete options.rangePlugin;
            }
        }


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

        const flatpickrInstance = flatpickr(parent, options);

        if (options.hasOwnProperty('monthSelectPlugin') && options.monthSelectPlugin.hasOwnProperty('disabledMonths')) {
            let disabled = options.monthSelectPlugin.disabledMonths;
            if (disabled.hasOwnProperty(flatpickrInstance.currentYear) && disabled[flatpickrInstance.currentYear].length > 0) {
                let monthElements = [...flatpickrInstance.rContainer.children[0].children];
                disabled[flatpickrInstance.currentYear].forEach(month => {
                    monthElements[month].classList.add('disabled');
                    monthElements[month].disabled = true;
                });
            }
        }
    }

    // returns array of html elements
    static createFlatpickrIncrementButtons(options, element) {
        let before = document.createElement('a'),
            after = document.createElement('a');

        before.classList.add('outer-increment-minus');
        after.classList.add('outer-increment-plus');

        before.addEventListener('click', (e) => {
            e.preventDefault();
        });
        after.addEventListener('click', (e) => {
            e.preventDefault();
        });

        before.setAttribute('data-parent', element.id);
        after.setAttribute('data-parent', element.id);

        before.addEventListener('click', (e) => {
            element.value = FlatpickrBundle.calculateNewDate(options, element.value, 'minus');
        });

        after.addEventListener('click', (e) => {
            element.value = FlatpickrBundle.calculateNewDate(options, element.value, 'plus');
        });

        element.parentNode.insertBefore(after, element.nextSibling);
        element.parentNode.insertBefore(before, element);
    }

    static calculateNewDate(options, currentDate, operation) {
        let unit = options.incrementArrows.unit;
        let amount = options.incrementArrows.amount;
        let format = options.dateFormatIso8601;

        if (options.time_24hr) {
            let hours = format.slice(0,2);
            let rest = format.slice(2,format.length);

            format = hours.toUpperCase() + rest;
        }
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


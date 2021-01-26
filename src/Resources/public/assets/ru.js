(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ru"],{

/***/ "./node_modules/flatpickr/dist/l10n/ru.js":
/*!************************************************!*\
  !*** ./node_modules/flatpickr/dist/l10n/ru.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {},
      };
  var Russian = {
      weekdays: {
          shorthand: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          longhand: [
              "Воскресенье",
              "Понедельник",
              "Вторник",
              "Среда",
              "Четверг",
              "Пятница",
              "Суббота",
          ],
      },
      months: {
          shorthand: [
              "Янв",
              "Фев",
              "Март",
              "Апр",
              "Май",
              "Июнь",
              "Июль",
              "Авг",
              "Сен",
              "Окт",
              "Ноя",
              "Дек",
          ],
          longhand: [
              "Январь",
              "Февраль",
              "Март",
              "Апрель",
              "Май",
              "Июнь",
              "Июль",
              "Август",
              "Сентябрь",
              "Октябрь",
              "Ноябрь",
              "Декабрь",
          ],
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return "";
      },
      rangeSeparator: " — ",
      weekAbbreviation: "Нед.",
      scrollTitle: "Прокрутите для увеличения",
      toggleTitle: "Нажмите для переключения",
      amPM: ["ДП", "ПП"],
      yearAriaLabel: "Год",
      time_24hr: true,
  };
  fp.l10ns.ru = Russian;
  var ru = fp.l10ns;

  exports.Russian = Russian;
  exports.default = ru;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/moment/locale/ru.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ru.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Russian [ru]
//! author : Viktorminator : https://github.com/Viktorminator
//! author : Menelion Elensúle : https://github.com/Oire
//! author : Коренберг Марк : https://github.com/socketpair

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';

    //! moment.js locale configuration

    function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11
            ? forms[0]
            : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
            ? forms[1]
            : forms[2];
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
            hh: 'час_часа_часов',
            dd: 'день_дня_дней',
            MM: 'месяц_месяца_месяцев',
            yy: 'год_года_лет',
        };
        if (key === 'm') {
            return withoutSuffix ? 'минута' : 'минуту';
        } else {
            return number + ' ' + plural(format[key], +number);
        }
    }
    var monthsParse = [
        /^янв/i,
        /^фев/i,
        /^мар/i,
        /^апр/i,
        /^ма[йя]/i,
        /^июн/i,
        /^июл/i,
        /^авг/i,
        /^сен/i,
        /^окт/i,
        /^ноя/i,
        /^дек/i,
    ];

    // http://new.gramota.ru/spravka/rules/139-prop : § 103
    // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
    var ru = moment.defineLocale('ru', {
        months: {
            format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split(
                '_'
            ),
            standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split(
                '_'
            ),
        },
        monthsShort: {
            // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку?
            format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split(
                '_'
            ),
            standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split(
                '_'
            ),
        },
        weekdays: {
            standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split(
                '_'
            ),
            format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split(
                '_'
            ),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/,
        },
        weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,

        // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

        // копия предыдущего
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

        // полные названия с падежами
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,

        // Выражение, которое соответствует только сокращённым формам
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY г.',
            LLL: 'D MMMM YYYY г., H:mm',
            LLLL: 'dddd, D MMMM YYYY г., H:mm',
        },
        calendar: {
            sameDay: '[Сегодня, в] LT',
            nextDay: '[Завтра, в] LT',
            lastDay: '[Вчера, в] LT',
            nextWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return '[В следующее] dddd, [в] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[В следующий] dddd, [в] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[В следующую] dddd, [в] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[Во] dddd, [в] LT';
                    } else {
                        return '[В] dddd, [в] LT';
                    }
                }
            },
            lastWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return '[В прошлое] dddd, [в] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[В прошлый] dddd, [в] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[В прошлую] dddd, [в] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[Во] dddd, [в] LT';
                    } else {
                        return '[В] dddd, [в] LT';
                    }
                }
            },
            sameElse: 'L',
        },
        relativeTime: {
            future: 'через %s',
            past: '%s назад',
            s: 'несколько секунд',
            ss: relativeTimeWithPlural,
            m: relativeTimeWithPlural,
            mm: relativeTimeWithPlural,
            h: 'час',
            hh: relativeTimeWithPlural,
            d: 'день',
            dd: relativeTimeWithPlural,
            M: 'месяц',
            MM: relativeTimeWithPlural,
            y: 'год',
            yy: relativeTimeWithPlural,
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function (input) {
            return /^(дня|вечера)$/.test(input);
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночи';
            } else if (hour < 12) {
                return 'утра';
            } else if (hour < 17) {
                return 'дня';
            } else {
                return 'вечера';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                    return number + '-й';
                case 'D':
                    return number + '-го';
                case 'w':
                case 'W':
                    return number + '-я';
                default:
                    return number;
            }
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4, // The week that contains Jan 4th is the first week of the year.
        },
    });

    return ru;

})));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9ydS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50L2xvY2FsZS9ydS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLEVBQUUsS0FBNEQ7QUFDOUQsRUFBRSxTQUNrRDtBQUNwRCxDQUFDLDRCQUE0Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0RBQWdELGNBQWM7O0FBRTlELENBQUM7Ozs7Ozs7Ozs7OztBQzFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRCxHQUFHLEtBQ29DLFdBQVcsbUJBQU8sQ0FBQyxrREFBVztBQUNyRSxHQUFHLFNBQ3NCO0FBQ3pCLENBQUMsMkJBQTJCOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsb0NBQW9DLElBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDs7QUFFQSxDQUFDIiwiZmlsZSI6InJ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLnJ1ID0ge30pKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgZnAgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5mbGF0cGlja3IgIT09IHVuZGVmaW5lZFxuICAgICAgPyB3aW5kb3cuZmxhdHBpY2tyXG4gICAgICA6IHtcbiAgICAgICAgICBsMTBuczoge30sXG4gICAgICB9O1xuICB2YXIgUnVzc2lhbiA9IHtcbiAgICAgIHdlZWtkYXlzOiB7XG4gICAgICAgICAgc2hvcnRoYW5kOiBbXCLQktGBXCIsIFwi0J/QvVwiLCBcItCS0YJcIiwgXCLQodGAXCIsIFwi0KfRglwiLCBcItCf0YJcIiwgXCLQodCxXCJdLFxuICAgICAgICAgIGxvbmdoYW5kOiBbXG4gICAgICAgICAgICAgIFwi0JLQvtGB0LrRgNC10YHQtdC90YzQtVwiLFxuICAgICAgICAgICAgICBcItCf0L7QvdC10LTQtdC70YzQvdC40LpcIixcbiAgICAgICAgICAgICAgXCLQktGC0L7RgNC90LjQulwiLFxuICAgICAgICAgICAgICBcItCh0YDQtdC00LBcIixcbiAgICAgICAgICAgICAgXCLQp9C10YLQstC10YDQs1wiLFxuICAgICAgICAgICAgICBcItCf0Y/RgtC90LjRhtCwXCIsXG4gICAgICAgICAgICAgIFwi0KHRg9Cx0LHQvtGC0LBcIixcbiAgICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIG1vbnRoczoge1xuICAgICAgICAgIHNob3J0aGFuZDogW1xuICAgICAgICAgICAgICBcItCv0L3QslwiLFxuICAgICAgICAgICAgICBcItCk0LXQslwiLFxuICAgICAgICAgICAgICBcItCc0LDRgNGCXCIsXG4gICAgICAgICAgICAgIFwi0JDQv9GAXCIsXG4gICAgICAgICAgICAgIFwi0JzQsNC5XCIsXG4gICAgICAgICAgICAgIFwi0JjRjtC90YxcIixcbiAgICAgICAgICAgICAgXCLQmNGO0LvRjFwiLFxuICAgICAgICAgICAgICBcItCQ0LLQs1wiLFxuICAgICAgICAgICAgICBcItCh0LXQvVwiLFxuICAgICAgICAgICAgICBcItCe0LrRglwiLFxuICAgICAgICAgICAgICBcItCd0L7Rj1wiLFxuICAgICAgICAgICAgICBcItCU0LXQulwiLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbG9uZ2hhbmQ6IFtcbiAgICAgICAgICAgICAgXCLQr9C90LLQsNGA0YxcIixcbiAgICAgICAgICAgICAgXCLQpNC10LLRgNCw0LvRjFwiLFxuICAgICAgICAgICAgICBcItCc0LDRgNGCXCIsXG4gICAgICAgICAgICAgIFwi0JDQv9GA0LXQu9GMXCIsXG4gICAgICAgICAgICAgIFwi0JzQsNC5XCIsXG4gICAgICAgICAgICAgIFwi0JjRjtC90YxcIixcbiAgICAgICAgICAgICAgXCLQmNGO0LvRjFwiLFxuICAgICAgICAgICAgICBcItCQ0LLQs9GD0YHRglwiLFxuICAgICAgICAgICAgICBcItCh0LXQvdGC0Y/QsdGA0YxcIixcbiAgICAgICAgICAgICAgXCLQntC60YLRj9Cx0YDRjFwiLFxuICAgICAgICAgICAgICBcItCd0L7Rj9Cx0YDRjFwiLFxuICAgICAgICAgICAgICBcItCU0LXQutCw0LHRgNGMXCIsXG4gICAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBmaXJzdERheU9mV2VlazogMSxcbiAgICAgIG9yZGluYWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH0sXG4gICAgICByYW5nZVNlcGFyYXRvcjogXCIg4oCUIFwiLFxuICAgICAgd2Vla0FiYnJldmlhdGlvbjogXCLQndC10LQuXCIsXG4gICAgICBzY3JvbGxUaXRsZTogXCLQn9GA0L7QutGA0YPRgtC40YLQtSDQtNC70Y8g0YPQstC10LvQuNGH0LXQvdC40Y9cIixcbiAgICAgIHRvZ2dsZVRpdGxlOiBcItCd0LDQttC80LjRgtC1INC00LvRjyDQv9C10YDQtdC60LvRjtGH0LXQvdC40Y9cIixcbiAgICAgIGFtUE06IFtcItCU0J9cIiwgXCLQn9CfXCJdLFxuICAgICAgeWVhckFyaWFMYWJlbDogXCLQk9C+0LRcIixcbiAgICAgIHRpbWVfMjRocjogdHJ1ZSxcbiAgfTtcbiAgZnAubDEwbnMucnUgPSBSdXNzaWFuO1xuICB2YXIgcnUgPSBmcC5sMTBucztcblxuICBleHBvcnRzLlJ1c3NpYW4gPSBSdXNzaWFuO1xuICBleHBvcnRzLmRlZmF1bHQgPSBydTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuIiwiLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxuLy8hIGxvY2FsZSA6IFJ1c3NpYW4gW3J1XVxuLy8hIGF1dGhvciA6IFZpa3Rvcm1pbmF0b3IgOiBodHRwczovL2dpdGh1Yi5jb20vVmlrdG9ybWluYXRvclxuLy8hIGF1dGhvciA6IE1lbmVsaW9uIEVsZW5zw7psZSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9PaXJlXG4vLyEgYXV0aG9yIDog0JrQvtGA0LXQvdCx0LXRgNCzINCc0LDRgNC6IDogaHR0cHM6Ly9naXRodWIuY29tL3NvY2tldHBhaXJcblxuOyhmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJyA/IGZhY3RvcnkocmVxdWlyZSgnLi4vbW9tZW50JykpIDpcbiAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJy4uL21vbWVudCddLCBmYWN0b3J5KSA6XG4gICBmYWN0b3J5KGdsb2JhbC5tb21lbnQpXG59KHRoaXMsIChmdW5jdGlvbiAobW9tZW50KSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIC8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cblxuICAgIGZ1bmN0aW9uIHBsdXJhbCh3b3JkLCBudW0pIHtcbiAgICAgICAgdmFyIGZvcm1zID0gd29yZC5zcGxpdCgnXycpO1xuICAgICAgICByZXR1cm4gbnVtICUgMTAgPT09IDEgJiYgbnVtICUgMTAwICE9PSAxMVxuICAgICAgICAgICAgPyBmb3Jtc1swXVxuICAgICAgICAgICAgOiBudW0gJSAxMCA+PSAyICYmIG51bSAlIDEwIDw9IDQgJiYgKG51bSAlIDEwMCA8IDEwIHx8IG51bSAlIDEwMCA+PSAyMClcbiAgICAgICAgICAgID8gZm9ybXNbMV1cbiAgICAgICAgICAgIDogZm9ybXNbMl07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbGF0aXZlVGltZVdpdGhQbHVyYWwobnVtYmVyLCB3aXRob3V0U3VmZml4LCBrZXkpIHtcbiAgICAgICAgdmFyIGZvcm1hdCA9IHtcbiAgICAgICAgICAgIHNzOiB3aXRob3V0U3VmZml4ID8gJ9GB0LXQutGD0L3QtNCwX9GB0LXQutGD0L3QtNGLX9GB0LXQutGD0L3QtCcgOiAn0YHQtdC60YPQvdC00YNf0YHQtdC60YPQvdC00Ytf0YHQtdC60YPQvdC0JyxcbiAgICAgICAgICAgIG1tOiB3aXRob3V0U3VmZml4ID8gJ9C80LjQvdGD0YLQsF/QvNC40L3Rg9GC0Ytf0LzQuNC90YPRgicgOiAn0LzQuNC90YPRgtGDX9C80LjQvdGD0YLRi1/QvNC40L3Rg9GCJyxcbiAgICAgICAgICAgIGhoOiAn0YfQsNGBX9GH0LDRgdCwX9GH0LDRgdC+0LInLFxuICAgICAgICAgICAgZGQ6ICfQtNC10L3RjF/QtNC90Y9f0LTQvdC10LknLFxuICAgICAgICAgICAgTU06ICfQvNC10YHRj9GGX9C80LXRgdGP0YbQsF/QvNC10YHRj9GG0LXQsicsXG4gICAgICAgICAgICB5eTogJ9Cz0L7QtF/Qs9C+0LTQsF/Qu9C10YInLFxuICAgICAgICB9O1xuICAgICAgICBpZiAoa2V5ID09PSAnbScpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ9C80LjQvdGD0YLQsCcgOiAn0LzQuNC90YPRgtGDJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAnICcgKyBwbHVyYWwoZm9ybWF0W2tleV0sICtudW1iZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBtb250aHNQYXJzZSA9IFtcbiAgICAgICAgL17Rj9C90LIvaSxcbiAgICAgICAgL17RhNC10LIvaSxcbiAgICAgICAgL17QvNCw0YAvaSxcbiAgICAgICAgL17QsNC/0YAvaSxcbiAgICAgICAgL17QvNCwW9C50Y9dL2ksXG4gICAgICAgIC9e0LjRjtC9L2ksXG4gICAgICAgIC9e0LjRjtC7L2ksXG4gICAgICAgIC9e0LDQstCzL2ksXG4gICAgICAgIC9e0YHQtdC9L2ksXG4gICAgICAgIC9e0L7QutGCL2ksXG4gICAgICAgIC9e0L3QvtGPL2ksXG4gICAgICAgIC9e0LTQtdC6L2ksXG4gICAgXTtcblxuICAgIC8vIGh0dHA6Ly9uZXcuZ3JhbW90YS5ydS9zcHJhdmthL3J1bGVzLzEzOS1wcm9wIDogwqcgMTAzXG4gICAgLy8g0KHQvtC60YDQsNGJ0LXQvdC40Y8g0LzQtdGB0Y/RhtC10LI6IGh0dHA6Ly9uZXcuZ3JhbW90YS5ydS9zcHJhdmthL2J1cm8vc2VhcmNoLWFuc3dlcj9zPTI0MjYzN1xuICAgIC8vIENMRFIgZGF0YTogICAgICAgICAgaHR0cDovL3d3dy51bmljb2RlLm9yZy9jbGRyL2NoYXJ0cy8yOC9zdW1tYXJ5L3J1Lmh0bWwjMTc1M1xuICAgIHZhciBydSA9IG1vbWVudC5kZWZpbmVMb2NhbGUoJ3J1Jywge1xuICAgICAgICBtb250aHM6IHtcbiAgICAgICAgICAgIGZvcm1hdDogJ9GP0L3QstCw0YDRj1/RhNC10LLRgNCw0LvRj1/QvNCw0YDRgtCwX9Cw0L/RgNC10LvRj1/QvNCw0Y9f0LjRjtC90Y9f0LjRjtC70Y9f0LDQstCz0YPRgdGC0LBf0YHQtdC90YLRj9Cx0YDRj1/QvtC60YLRj9Cx0YDRj1/QvdC+0Y/QsdGA0Y9f0LTQtdC60LDQsdGA0Y8nLnNwbGl0KFxuICAgICAgICAgICAgICAgICdfJ1xuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHN0YW5kYWxvbmU6ICfRj9C90LLQsNGA0Yxf0YTQtdCy0YDQsNC70Yxf0LzQsNGA0YJf0LDQv9GA0LXQu9GMX9C80LDQuV/QuNGO0L3RjF/QuNGO0LvRjF/QsNCy0LPRg9GB0YJf0YHQtdC90YLRj9Cx0YDRjF/QvtC60YLRj9Cx0YDRjF/QvdC+0Y/QsdGA0Yxf0LTQtdC60LDQsdGA0YwnLnNwbGl0KFxuICAgICAgICAgICAgICAgICdfJ1xuICAgICAgICAgICAgKSxcbiAgICAgICAgfSxcbiAgICAgICAgbW9udGhzU2hvcnQ6IHtcbiAgICAgICAgICAgIC8vINC/0L4gQ0xEUiDQuNC80LXQvdC90L4gXCLQuNGO0LsuXCIg0LggXCLQuNGO0L0uXCIsINC90L4g0LrQsNC60L7QuSDRgdC80YvRgdC7INC80LXQvdGP0YLRjCDQsdGD0LrQstGDINC90LAg0YLQvtGH0LrRgz9cbiAgICAgICAgICAgIGZvcm1hdDogJ9GP0L3Qsi5f0YTQtdCy0YAuX9C80LDRgC5f0LDQv9GALl/QvNCw0Y9f0LjRjtC90Y9f0LjRjtC70Y9f0LDQstCzLl/RgdC10L3Rgi5f0L7QutGCLl/QvdC+0Y/QsS5f0LTQtdC6Licuc3BsaXQoXG4gICAgICAgICAgICAgICAgJ18nXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgc3RhbmRhbG9uZTogJ9GP0L3Qsi5f0YTQtdCy0YAuX9C80LDRgNGCX9Cw0L/RgC5f0LzQsNC5X9C40Y7QvdGMX9C40Y7Qu9GMX9Cw0LLQsy5f0YHQtdC90YIuX9C+0LrRgi5f0L3QvtGP0LEuX9C00LXQui4nLnNwbGl0KFxuICAgICAgICAgICAgICAgICdfJ1xuICAgICAgICAgICAgKSxcbiAgICAgICAgfSxcbiAgICAgICAgd2Vla2RheXM6IHtcbiAgICAgICAgICAgIHN0YW5kYWxvbmU6ICfQstC+0YHQutGA0LXRgdC10L3RjNC1X9C/0L7QvdC10LTQtdC70YzQvdC40Lpf0LLRgtC+0YDQvdC40Lpf0YHRgNC10LTQsF/Rh9C10YLQstC10YDQs1/Qv9GP0YLQvdC40YbQsF/RgdGD0LHQsdC+0YLQsCcuc3BsaXQoXG4gICAgICAgICAgICAgICAgJ18nXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZm9ybWF0OiAn0LLQvtGB0LrRgNC10YHQtdC90YzQtV/Qv9C+0L3QtdC00LXQu9GM0L3QuNC6X9Cy0YLQvtGA0L3QuNC6X9GB0YDQtdC00YNf0YfQtdGC0LLQtdGA0LNf0L/Rj9GC0L3QuNGG0YNf0YHRg9Cx0LHQvtGC0YMnLnNwbGl0KFxuICAgICAgICAgICAgICAgICdfJ1xuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGlzRm9ybWF0OiAvXFxbID9b0JLQsl0gPyg/OtC/0YDQvtGI0LvRg9GOfNGB0LvQtdC00YPRjtGJ0YPRjnzRjdGC0YMpPyA/XSA/ZGRkZC8sXG4gICAgICAgIH0sXG4gICAgICAgIHdlZWtkYXlzU2hvcnQ6ICfQstGBX9C/0L1f0LLRgl/RgdGAX9GH0YJf0L/Rgl/RgdCxJy5zcGxpdCgnXycpLFxuICAgICAgICB3ZWVrZGF5c01pbjogJ9Cy0YFf0L/QvV/QstGCX9GB0YBf0YfRgl/Qv9GCX9GB0LEnLnNwbGl0KCdfJyksXG4gICAgICAgIG1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgICAgICAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcbiAgICAgICAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXG5cbiAgICAgICAgLy8g0L/QvtC70L3Ri9C1INC90LDQt9Cy0LDQvdC40Y8g0YEg0L/QsNC00LXQttCw0LzQuCwg0L/QviDRgtGA0Lgg0LHRg9C60LLRiywg0LTQu9GPINC90LXQutC+0YLQvtGA0YvRhSwg0L/QviA0INCx0YPQutCy0YssINGB0L7QutGA0LDRidC10L3QuNGPINGBINGC0L7Rh9C60L7QuSDQuCDQsdC10Lcg0YLQvtGH0LrQuFxuICAgICAgICBtb250aHNSZWdleDogL14o0Y/QvdCy0LDRgFvRjNGPXXzRj9C90LJcXC4/fNGE0LXQstGA0LDQu1vRjNGPXXzRhNC10LLRgD9cXC4/fNC80LDRgNGC0LA/fNC80LDRgFxcLj980LDQv9GA0LXQu1vRjNGPXXzQsNC/0YBcXC4/fNC80LBb0LnRj1180LjRjtC9W9GM0Y9dfNC40Y7QvVxcLj980LjRjtC7W9GM0Y9dfNC40Y7Qu1xcLj980LDQstCz0YPRgdGC0LA/fNCw0LLQs1xcLj980YHQtdC90YLRj9Cx0YBb0YzRj1180YHQtdC90YI/XFwuP3zQvtC60YLRj9Cx0YBb0YzRj1180L7QutGCXFwuP3zQvdC+0Y/QsdGAW9GM0Y9dfNC90L7Rj9CxP1xcLj980LTQtdC60LDQsdGAW9GM0Y9dfNC00LXQulxcLj8pL2ksXG5cbiAgICAgICAgLy8g0LrQvtC/0LjRjyDQv9GA0LXQtNGL0LTRg9GJ0LXQs9C+XG4gICAgICAgIG1vbnRoc1Nob3J0UmVnZXg6IC9eKNGP0L3QstCw0YBb0YzRj1180Y/QvdCyXFwuP3zRhNC10LLRgNCw0Ltb0YzRj1180YTQtdCy0YA/XFwuP3zQvNCw0YDRgtCwP3zQvNCw0YBcXC4/fNCw0L/RgNC10Ltb0YzRj1180LDQv9GAXFwuP3zQvNCwW9C50Y9dfNC40Y7QvVvRjNGPXXzQuNGO0L1cXC4/fNC40Y7Qu1vRjNGPXXzQuNGO0LtcXC4/fNCw0LLQs9GD0YHRgtCwP3zQsNCy0LNcXC4/fNGB0LXQvdGC0Y/QsdGAW9GM0Y9dfNGB0LXQvdGCP1xcLj980L7QutGC0Y/QsdGAW9GM0Y9dfNC+0LrRglxcLj980L3QvtGP0LHRgFvRjNGPXXzQvdC+0Y/QsT9cXC4/fNC00LXQutCw0LHRgFvRjNGPXXzQtNC10LpcXC4/KS9pLFxuXG4gICAgICAgIC8vINC/0L7Qu9C90YvQtSDQvdCw0LfQstCw0L3QuNGPINGBINC/0LDQtNC10LbQsNC80LhcbiAgICAgICAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKNGP0L3QstCw0YBb0Y/RjF180YTQtdCy0YDQsNC7W9GP0YxdfNC80LDRgNGC0LA/fNCw0L/RgNC10Ltb0Y/RjF180LzQsFvRj9C5XXzQuNGO0L1b0Y/RjF180LjRjtC7W9GP0YxdfNCw0LLQs9GD0YHRgtCwP3zRgdC10L3RgtGP0LHRgFvRj9GMXXzQvtC60YLRj9Cx0YBb0Y/RjF180L3QvtGP0LHRgFvRj9GMXXzQtNC10LrQsNCx0YBb0Y/RjF0pL2ksXG5cbiAgICAgICAgLy8g0JLRi9GA0LDQttC10L3QuNC1LCDQutC+0YLQvtGA0L7QtSDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0LXRgiDRgtC+0LvRjNC60L4g0YHQvtC60YDQsNGJ0ZHQvdC90YvQvCDRhNC+0YDQvNCw0LxcbiAgICAgICAgbW9udGhzU2hvcnRTdHJpY3RSZWdleDogL14o0Y/QvdCyXFwufNGE0LXQstGAP1xcLnzQvNCw0YBb0YIuXXzQsNC/0YBcXC580LzQsFvRj9C5XXzQuNGO0L1b0YzRjy5dfNC40Y7Qu1vRjNGPLl180LDQstCzXFwufNGB0LXQvdGCP1xcLnzQvtC60YJcXC580L3QvtGP0LE/XFwufNC00LXQulxcLikvaSxcbiAgICAgICAgbG9uZ0RhdGVGb3JtYXQ6IHtcbiAgICAgICAgICAgIExUOiAnSDptbScsXG4gICAgICAgICAgICBMVFM6ICdIOm1tOnNzJyxcbiAgICAgICAgICAgIEw6ICdERC5NTS5ZWVlZJyxcbiAgICAgICAgICAgIExMOiAnRCBNTU1NIFlZWVkg0LMuJyxcbiAgICAgICAgICAgIExMTDogJ0QgTU1NTSBZWVlZINCzLiwgSDptbScsXG4gICAgICAgICAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkg0LMuLCBIOm1tJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2FsZW5kYXI6IHtcbiAgICAgICAgICAgIHNhbWVEYXk6ICdb0KHQtdCz0L7QtNC90Y8sINCyXSBMVCcsXG4gICAgICAgICAgICBuZXh0RGF5OiAnW9CX0LDQstGC0YDQsCwg0LJdIExUJyxcbiAgICAgICAgICAgIGxhc3REYXk6ICdb0JLRh9C10YDQsCwg0LJdIExUJyxcbiAgICAgICAgICAgIG5leHRXZWVrOiBmdW5jdGlvbiAobm93KSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdy53ZWVrKCkgIT09IHRoaXMud2VlaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kYXkoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnW9CSINGB0LvQtdC00YPRjtGJ0LXQtV0gZGRkZCwgW9CyXSBMVCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdb0JIg0YHQu9C10LTRg9GO0YnQuNC5XSBkZGRkLCBb0LJdIExUJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1vQkiDRgdC70LXQtNGD0Y7RidGD0Y5dIGRkZGQsIFvQsl0gTFQnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF5KCkgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnW9CS0L5dIGRkZGQsIFvQsl0gTFQnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdb0JJdIGRkZGQsIFvQsl0gTFQnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxhc3RXZWVrOiBmdW5jdGlvbiAobm93KSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdy53ZWVrKCkgIT09IHRoaXMud2VlaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kYXkoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnW9CSINC/0YDQvtGI0LvQvtC1XSBkZGRkLCBb0LJdIExUJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ1vQkiDQv9GA0L7RiNC70YvQuV0gZGRkZCwgW9CyXSBMVCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdb0JIg0L/RgNC+0YjQu9GD0Y5dIGRkZGQsIFvQsl0gTFQnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF5KCkgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnW9CS0L5dIGRkZGQsIFvQsl0gTFQnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdb0JJdIGRkZGQsIFvQsl0gTFQnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNhbWVFbHNlOiAnTCcsXG4gICAgICAgIH0sXG4gICAgICAgIHJlbGF0aXZlVGltZToge1xuICAgICAgICAgICAgZnV0dXJlOiAn0YfQtdGA0LXQtyAlcycsXG4gICAgICAgICAgICBwYXN0OiAnJXMg0L3QsNC30LDQtCcsXG4gICAgICAgICAgICBzOiAn0L3QtdGB0LrQvtC70YzQutC+INGB0LXQutGD0L3QtCcsXG4gICAgICAgICAgICBzczogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICAgICAgICAgIG06IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgICAgICAgICBtbTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICAgICAgICAgIGg6ICfRh9Cw0YEnLFxuICAgICAgICAgICAgaGg6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgICAgICAgICBkOiAn0LTQtdC90YwnLFxuICAgICAgICAgICAgZGQ6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgICAgICAgICBNOiAn0LzQtdGB0Y/RhicsXG4gICAgICAgICAgICBNTTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcbiAgICAgICAgICAgIHk6ICfQs9C+0LQnLFxuICAgICAgICAgICAgeXk6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXG4gICAgICAgIH0sXG4gICAgICAgIG1lcmlkaWVtUGFyc2U6IC/QvdC+0YfQuHzRg9GC0YDQsHzQtNC90Y980LLQtdGH0LXRgNCwL2ksXG4gICAgICAgIGlzUE06IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuIC9eKNC00L3Rj3zQstC10YfQtdGA0LApJC8udGVzdChpbnB1dCk7XG4gICAgICAgIH0sXG4gICAgICAgIG1lcmlkaWVtOiBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XG4gICAgICAgICAgICBpZiAoaG91ciA8IDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ9C90L7Rh9C4JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICfRg9GC0YDQsCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhvdXIgPCAxNykge1xuICAgICAgICAgICAgICAgIHJldHVybiAn0LTQvdGPJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICfQstC10YfQtdGA0LAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0tKNC5fNCz0L580Y8pLyxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG51bWJlciwgcGVyaW9kKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHBlcmlvZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ0RERCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAnLdC5JztcbiAgICAgICAgICAgICAgICBjYXNlICdEJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bWJlciArICct0LPQvic7XG4gICAgICAgICAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICAgICAgY2FzZSAnVyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIgKyAnLdGPJztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3ZWVrOiB7XG4gICAgICAgICAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgICAgICAgICAgZG95OiA0LCAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcnU7XG5cbn0pKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9
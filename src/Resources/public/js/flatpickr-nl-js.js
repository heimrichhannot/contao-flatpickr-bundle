(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flatpickr-nl-js"],{

/***/ "./node_modules/flatpickr/dist/l10n/nl.js":
/*!************************************************!*\
  !*** ./node_modules/flatpickr/dist/l10n/nl.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Dutch = {
      weekdays: {
          shorthand: ["zo", "ma", "di", "wo", "do", "vr", "za"],
          longhand: [
              "zondag",
              "maandag",
              "dinsdag",
              "woensdag",
              "donderdag",
              "vrijdag",
              "zaterdag",
          ]
      },
      months: {
          shorthand: [
              "jan",
              "feb",
              "mrt",
              "apr",
              "mei",
              "jun",
              "jul",
              "aug",
              "sept",
              "okt",
              "nov",
              "dec",
          ],
          longhand: [
              "januari",
              "februari",
              "maart",
              "april",
              "mei",
              "juni",
              "juli",
              "augustus",
              "september",
              "oktober",
              "november",
              "december",
          ]
      },
      firstDayOfWeek: 1,
      weekAbbreviation: "wk",
      rangeSeparator: " tot ",
      scrollTitle: "Scroll voor volgende / vorige",
      toggleTitle: "Klik om te wisselen",
      time_24hr: true,
      ordinal: function (nth) {
          if (nth === 1 || nth === 8 || nth >= 20)
              return "ste";
          return "de";
      }
  };
  fp.l10ns.nl = Dutch;
  var nl = fp.l10ns;

  exports.Dutch = Dutch;
  exports.default = nl;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9ubC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLEVBQUUsS0FBNEQ7QUFDOUQsRUFBRSxTQUNrRDtBQUNwRCxDQUFDLDJCQUEyQjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnREFBZ0QsY0FBYzs7QUFFOUQsQ0FBQyIsImZpbGUiOiJmbGF0cGlja3ItbmwtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwubmwgPSB7fSkpO1xufSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGZwID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuZmxhdHBpY2tyICE9PSB1bmRlZmluZWRcbiAgICAgID8gd2luZG93LmZsYXRwaWNrclxuICAgICAgOiB7XG4gICAgICAgICAgbDEwbnM6IHt9XG4gICAgICB9O1xuICB2YXIgRHV0Y2ggPSB7XG4gICAgICB3ZWVrZGF5czoge1xuICAgICAgICAgIHNob3J0aGFuZDogW1wiem9cIiwgXCJtYVwiLCBcImRpXCIsIFwid29cIiwgXCJkb1wiLCBcInZyXCIsIFwiemFcIl0sXG4gICAgICAgICAgbG9uZ2hhbmQ6IFtcbiAgICAgICAgICAgICAgXCJ6b25kYWdcIixcbiAgICAgICAgICAgICAgXCJtYWFuZGFnXCIsXG4gICAgICAgICAgICAgIFwiZGluc2RhZ1wiLFxuICAgICAgICAgICAgICBcIndvZW5zZGFnXCIsXG4gICAgICAgICAgICAgIFwiZG9uZGVyZGFnXCIsXG4gICAgICAgICAgICAgIFwidnJpamRhZ1wiLFxuICAgICAgICAgICAgICBcInphdGVyZGFnXCIsXG4gICAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIG1vbnRoczoge1xuICAgICAgICAgIHNob3J0aGFuZDogW1xuICAgICAgICAgICAgICBcImphblwiLFxuICAgICAgICAgICAgICBcImZlYlwiLFxuICAgICAgICAgICAgICBcIm1ydFwiLFxuICAgICAgICAgICAgICBcImFwclwiLFxuICAgICAgICAgICAgICBcIm1laVwiLFxuICAgICAgICAgICAgICBcImp1blwiLFxuICAgICAgICAgICAgICBcImp1bFwiLFxuICAgICAgICAgICAgICBcImF1Z1wiLFxuICAgICAgICAgICAgICBcInNlcHRcIixcbiAgICAgICAgICAgICAgXCJva3RcIixcbiAgICAgICAgICAgICAgXCJub3ZcIixcbiAgICAgICAgICAgICAgXCJkZWNcIixcbiAgICAgICAgICBdLFxuICAgICAgICAgIGxvbmdoYW5kOiBbXG4gICAgICAgICAgICAgIFwiamFudWFyaVwiLFxuICAgICAgICAgICAgICBcImZlYnJ1YXJpXCIsXG4gICAgICAgICAgICAgIFwibWFhcnRcIixcbiAgICAgICAgICAgICAgXCJhcHJpbFwiLFxuICAgICAgICAgICAgICBcIm1laVwiLFxuICAgICAgICAgICAgICBcImp1bmlcIixcbiAgICAgICAgICAgICAgXCJqdWxpXCIsXG4gICAgICAgICAgICAgIFwiYXVndXN0dXNcIixcbiAgICAgICAgICAgICAgXCJzZXB0ZW1iZXJcIixcbiAgICAgICAgICAgICAgXCJva3RvYmVyXCIsXG4gICAgICAgICAgICAgIFwibm92ZW1iZXJcIixcbiAgICAgICAgICAgICAgXCJkZWNlbWJlclwiLFxuICAgICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBmaXJzdERheU9mV2VlazogMSxcbiAgICAgIHdlZWtBYmJyZXZpYXRpb246IFwid2tcIixcbiAgICAgIHJhbmdlU2VwYXJhdG9yOiBcIiB0b3QgXCIsXG4gICAgICBzY3JvbGxUaXRsZTogXCJTY3JvbGwgdm9vciB2b2xnZW5kZSAvIHZvcmlnZVwiLFxuICAgICAgdG9nZ2xlVGl0bGU6IFwiS2xpayBvbSB0ZSB3aXNzZWxlblwiLFxuICAgICAgdGltZV8yNGhyOiB0cnVlLFxuICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG50aCkge1xuICAgICAgICAgIGlmIChudGggPT09IDEgfHwgbnRoID09PSA4IHx8IG50aCA+PSAyMClcbiAgICAgICAgICAgICAgcmV0dXJuIFwic3RlXCI7XG4gICAgICAgICAgcmV0dXJuIFwiZGVcIjtcbiAgICAgIH1cbiAgfTtcbiAgZnAubDEwbnMubmwgPSBEdXRjaDtcbiAgdmFyIG5sID0gZnAubDEwbnM7XG5cbiAgZXhwb3J0cy5EdXRjaCA9IER1dGNoO1xuICBleHBvcnRzLmRlZmF1bHQgPSBubDtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSk7XG4iXSwic291cmNlUm9vdCI6IiJ9
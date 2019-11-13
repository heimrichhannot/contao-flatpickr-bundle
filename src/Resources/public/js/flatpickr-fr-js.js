(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flatpickr-fr-js"],{

/***/ "./node_modules/flatpickr/dist/l10n/fr.js":
/*!************************************************!*\
  !*** ./node_modules/flatpickr/dist/l10n/fr.js ***!
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
  var French = {
      firstDayOfWeek: 1,
      weekdays: {
          shorthand: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
          longhand: [
              "dimanche",
              "lundi",
              "mardi",
              "mercredi",
              "jeudi",
              "vendredi",
              "samedi",
          ]
      },
      months: {
          shorthand: [
              "janv",
              "févr",
              "mars",
              "avr",
              "mai",
              "juin",
              "juil",
              "août",
              "sept",
              "oct",
              "nov",
              "déc",
          ],
          longhand: [
              "janvier",
              "février",
              "mars",
              "avril",
              "mai",
              "juin",
              "juillet",
              "août",
              "septembre",
              "octobre",
              "novembre",
              "décembre",
          ]
      },
      ordinal: function (nth) {
          if (nth > 1)
              return "";
          return "er";
      },
      rangeSeparator: " au ",
      weekAbbreviation: "Sem",
      scrollTitle: "Défiler pour augmenter la valeur",
      toggleTitle: "Cliquer pour basculer",
      time_24hr: true
  };
  fp.l10ns.fr = French;
  var fr = fp.l10ns;

  exports.French = French;
  exports.default = fr;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9mci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLEVBQUUsS0FBNEQ7QUFDOUQsRUFBRSxTQUNrRDtBQUNwRCxDQUFDLDJCQUEyQjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdEQUFnRCxjQUFjOztBQUU5RCxDQUFDIiwiZmlsZSI6ImZsYXRwaWNrci1mci1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5mciA9IHt9KSk7XG59KHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgZnAgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5mbGF0cGlja3IgIT09IHVuZGVmaW5lZFxuICAgICAgPyB3aW5kb3cuZmxhdHBpY2tyXG4gICAgICA6IHtcbiAgICAgICAgICBsMTBuczoge31cbiAgICAgIH07XG4gIHZhciBGcmVuY2ggPSB7XG4gICAgICBmaXJzdERheU9mV2VlazogMSxcbiAgICAgIHdlZWtkYXlzOiB7XG4gICAgICAgICAgc2hvcnRoYW5kOiBbXCJkaW1cIiwgXCJsdW5cIiwgXCJtYXJcIiwgXCJtZXJcIiwgXCJqZXVcIiwgXCJ2ZW5cIiwgXCJzYW1cIl0sXG4gICAgICAgICAgbG9uZ2hhbmQ6IFtcbiAgICAgICAgICAgICAgXCJkaW1hbmNoZVwiLFxuICAgICAgICAgICAgICBcImx1bmRpXCIsXG4gICAgICAgICAgICAgIFwibWFyZGlcIixcbiAgICAgICAgICAgICAgXCJtZXJjcmVkaVwiLFxuICAgICAgICAgICAgICBcImpldWRpXCIsXG4gICAgICAgICAgICAgIFwidmVuZHJlZGlcIixcbiAgICAgICAgICAgICAgXCJzYW1lZGlcIixcbiAgICAgICAgICBdXG4gICAgICB9LFxuICAgICAgbW9udGhzOiB7XG4gICAgICAgICAgc2hvcnRoYW5kOiBbXG4gICAgICAgICAgICAgIFwiamFudlwiLFxuICAgICAgICAgICAgICBcImbDqXZyXCIsXG4gICAgICAgICAgICAgIFwibWFyc1wiLFxuICAgICAgICAgICAgICBcImF2clwiLFxuICAgICAgICAgICAgICBcIm1haVwiLFxuICAgICAgICAgICAgICBcImp1aW5cIixcbiAgICAgICAgICAgICAgXCJqdWlsXCIsXG4gICAgICAgICAgICAgIFwiYW/Du3RcIixcbiAgICAgICAgICAgICAgXCJzZXB0XCIsXG4gICAgICAgICAgICAgIFwib2N0XCIsXG4gICAgICAgICAgICAgIFwibm92XCIsXG4gICAgICAgICAgICAgIFwiZMOpY1wiLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbG9uZ2hhbmQ6IFtcbiAgICAgICAgICAgICAgXCJqYW52aWVyXCIsXG4gICAgICAgICAgICAgIFwiZsOpdnJpZXJcIixcbiAgICAgICAgICAgICAgXCJtYXJzXCIsXG4gICAgICAgICAgICAgIFwiYXZyaWxcIixcbiAgICAgICAgICAgICAgXCJtYWlcIixcbiAgICAgICAgICAgICAgXCJqdWluXCIsXG4gICAgICAgICAgICAgIFwianVpbGxldFwiLFxuICAgICAgICAgICAgICBcImFvw7t0XCIsXG4gICAgICAgICAgICAgIFwic2VwdGVtYnJlXCIsXG4gICAgICAgICAgICAgIFwib2N0b2JyZVwiLFxuICAgICAgICAgICAgICBcIm5vdmVtYnJlXCIsXG4gICAgICAgICAgICAgIFwiZMOpY2VtYnJlXCIsXG4gICAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudGgpIHtcbiAgICAgICAgICBpZiAobnRoID4gMSlcbiAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgcmV0dXJuIFwiZXJcIjtcbiAgICAgIH0sXG4gICAgICByYW5nZVNlcGFyYXRvcjogXCIgYXUgXCIsXG4gICAgICB3ZWVrQWJicmV2aWF0aW9uOiBcIlNlbVwiLFxuICAgICAgc2Nyb2xsVGl0bGU6IFwiRMOpZmlsZXIgcG91ciBhdWdtZW50ZXIgbGEgdmFsZXVyXCIsXG4gICAgICB0b2dnbGVUaXRsZTogXCJDbGlxdWVyIHBvdXIgYmFzY3VsZXJcIixcbiAgICAgIHRpbWVfMjRocjogdHJ1ZVxuICB9O1xuICBmcC5sMTBucy5mciA9IEZyZW5jaDtcbiAgdmFyIGZyID0gZnAubDEwbnM7XG5cbiAgZXhwb3J0cy5GcmVuY2ggPSBGcmVuY2g7XG4gIGV4cG9ydHMuZGVmYXVsdCA9IGZyO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
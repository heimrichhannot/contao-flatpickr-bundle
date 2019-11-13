(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flatpickr-cy-js"],{

/***/ "./node_modules/flatpickr/dist/l10n/cy.js":
/*!************************************************!*\
  !*** ./node_modules/flatpickr/dist/l10n/cy.js ***!
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
  var Welsh = {
      weekdays: {
          shorthand: ["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"],
          longhand: [
              "Dydd Sul",
              "Dydd Llun",
              "Dydd Mawrth",
              "Dydd Mercher",
              "Dydd Iau",
              "Dydd Gwener",
              "Dydd Sadwrn",
          ]
      },
      months: {
          shorthand: [
              "Ion",
              "Chwef",
              "Maw",
              "Ebr",
              "Mai",
              "Meh",
              "Gorff",
              "Awst",
              "Medi",
              "Hyd",
              "Tach",
              "Rhag",
          ],
          longhand: [
              "Ionawr",
              "Chwefror",
              "Mawrth",
              "Ebrill",
              "Mai",
              "Mehefin",
              "Gorffennaf",
              "Awst",
              "Medi",
              "Hydref",
              "Tachwedd",
              "Rhagfyr",
          ]
      },
      firstDayOfWeek: 1,
      ordinal: function (nth) {
          if (nth === 1)
              return "af";
          if (nth === 2)
              return "ail";
          if (nth === 3 || nth === 4)
              return "ydd";
          if (nth === 5 || nth === 6)
              return "ed";
          if ((nth >= 7 && nth <= 10) ||
              nth == 12 ||
              nth == 15 ||
              nth == 18 ||
              nth == 20)
              return "fed";
          if (nth == 11 ||
              nth == 13 ||
              nth == 14 ||
              nth == 16 ||
              nth == 17 ||
              nth == 19)
              return "eg";
          if (nth >= 21 && nth <= 39)
              return "ain";
          // Inconclusive.
          return "";
      },
      time_24hr: true
  };
  fp.l10ns.cy = Welsh;
  var cy = fp.l10ns;

  exports.Welsh = Welsh;
  exports.default = cy;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9jeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLEVBQUUsS0FBNEQ7QUFDOUQsRUFBRSxTQUNrRDtBQUNwRCxDQUFDLDJCQUEyQjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdEQUFnRCxjQUFjOztBQUU5RCxDQUFDIiwiZmlsZSI6ImZsYXRwaWNrci1jeS1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5jeSA9IHt9KSk7XG59KHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgZnAgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5mbGF0cGlja3IgIT09IHVuZGVmaW5lZFxuICAgICAgPyB3aW5kb3cuZmxhdHBpY2tyXG4gICAgICA6IHtcbiAgICAgICAgICBsMTBuczoge31cbiAgICAgIH07XG4gIHZhciBXZWxzaCA9IHtcbiAgICAgIHdlZWtkYXlzOiB7XG4gICAgICAgICAgc2hvcnRoYW5kOiBbXCJTdWxcIiwgXCJMbHVuXCIsIFwiTWF3XCIsIFwiTWVyXCIsIFwiSWF1XCIsIFwiR3dlXCIsIFwiU2FkXCJdLFxuICAgICAgICAgIGxvbmdoYW5kOiBbXG4gICAgICAgICAgICAgIFwiRHlkZCBTdWxcIixcbiAgICAgICAgICAgICAgXCJEeWRkIExsdW5cIixcbiAgICAgICAgICAgICAgXCJEeWRkIE1hd3J0aFwiLFxuICAgICAgICAgICAgICBcIkR5ZGQgTWVyY2hlclwiLFxuICAgICAgICAgICAgICBcIkR5ZGQgSWF1XCIsXG4gICAgICAgICAgICAgIFwiRHlkZCBHd2VuZXJcIixcbiAgICAgICAgICAgICAgXCJEeWRkIFNhZHdyblwiLFxuICAgICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBtb250aHM6IHtcbiAgICAgICAgICBzaG9ydGhhbmQ6IFtcbiAgICAgICAgICAgICAgXCJJb25cIixcbiAgICAgICAgICAgICAgXCJDaHdlZlwiLFxuICAgICAgICAgICAgICBcIk1hd1wiLFxuICAgICAgICAgICAgICBcIkViclwiLFxuICAgICAgICAgICAgICBcIk1haVwiLFxuICAgICAgICAgICAgICBcIk1laFwiLFxuICAgICAgICAgICAgICBcIkdvcmZmXCIsXG4gICAgICAgICAgICAgIFwiQXdzdFwiLFxuICAgICAgICAgICAgICBcIk1lZGlcIixcbiAgICAgICAgICAgICAgXCJIeWRcIixcbiAgICAgICAgICAgICAgXCJUYWNoXCIsXG4gICAgICAgICAgICAgIFwiUmhhZ1wiLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgbG9uZ2hhbmQ6IFtcbiAgICAgICAgICAgICAgXCJJb25hd3JcIixcbiAgICAgICAgICAgICAgXCJDaHdlZnJvclwiLFxuICAgICAgICAgICAgICBcIk1hd3J0aFwiLFxuICAgICAgICAgICAgICBcIkVicmlsbFwiLFxuICAgICAgICAgICAgICBcIk1haVwiLFxuICAgICAgICAgICAgICBcIk1laGVmaW5cIixcbiAgICAgICAgICAgICAgXCJHb3JmZmVubmFmXCIsXG4gICAgICAgICAgICAgIFwiQXdzdFwiLFxuICAgICAgICAgICAgICBcIk1lZGlcIixcbiAgICAgICAgICAgICAgXCJIeWRyZWZcIixcbiAgICAgICAgICAgICAgXCJUYWNod2VkZFwiLFxuICAgICAgICAgICAgICBcIlJoYWdmeXJcIixcbiAgICAgICAgICBdXG4gICAgICB9LFxuICAgICAgZmlyc3REYXlPZldlZWs6IDEsXG4gICAgICBvcmRpbmFsOiBmdW5jdGlvbiAobnRoKSB7XG4gICAgICAgICAgaWYgKG50aCA9PT0gMSlcbiAgICAgICAgICAgICAgcmV0dXJuIFwiYWZcIjtcbiAgICAgICAgICBpZiAobnRoID09PSAyKVxuICAgICAgICAgICAgICByZXR1cm4gXCJhaWxcIjtcbiAgICAgICAgICBpZiAobnRoID09PSAzIHx8IG50aCA9PT0gNClcbiAgICAgICAgICAgICAgcmV0dXJuIFwieWRkXCI7XG4gICAgICAgICAgaWYgKG50aCA9PT0gNSB8fCBudGggPT09IDYpXG4gICAgICAgICAgICAgIHJldHVybiBcImVkXCI7XG4gICAgICAgICAgaWYgKChudGggPj0gNyAmJiBudGggPD0gMTApIHx8XG4gICAgICAgICAgICAgIG50aCA9PSAxMiB8fFxuICAgICAgICAgICAgICBudGggPT0gMTUgfHxcbiAgICAgICAgICAgICAgbnRoID09IDE4IHx8XG4gICAgICAgICAgICAgIG50aCA9PSAyMClcbiAgICAgICAgICAgICAgcmV0dXJuIFwiZmVkXCI7XG4gICAgICAgICAgaWYgKG50aCA9PSAxMSB8fFxuICAgICAgICAgICAgICBudGggPT0gMTMgfHxcbiAgICAgICAgICAgICAgbnRoID09IDE0IHx8XG4gICAgICAgICAgICAgIG50aCA9PSAxNiB8fFxuICAgICAgICAgICAgICBudGggPT0gMTcgfHxcbiAgICAgICAgICAgICAgbnRoID09IDE5KVxuICAgICAgICAgICAgICByZXR1cm4gXCJlZ1wiO1xuICAgICAgICAgIGlmIChudGggPj0gMjEgJiYgbnRoIDw9IDM5KVxuICAgICAgICAgICAgICByZXR1cm4gXCJhaW5cIjtcbiAgICAgICAgICAvLyBJbmNvbmNsdXNpdmUuXG4gICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9LFxuICAgICAgdGltZV8yNGhyOiB0cnVlXG4gIH07XG4gIGZwLmwxMG5zLmN5ID0gV2Vsc2g7XG4gIHZhciBjeSA9IGZwLmwxMG5zO1xuXG4gIGV4cG9ydHMuV2Vsc2ggPSBXZWxzaDtcbiAgZXhwb3J0cy5kZWZhdWx0ID0gY3k7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flatpickr-cat-js"],{

/***/ "./node_modules/flatpickr/dist/l10n/cat.js":
/*!*************************************************!*\
  !*** ./node_modules/flatpickr/dist/l10n/cat.js ***!
  \*************************************************/
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
  var Catalan = {
      weekdays: {
          shorthand: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
          longhand: [
              "Diumenge",
              "Dilluns",
              "Dimarts",
              "Dimecres",
              "Dijous",
              "Divendres",
              "Dissabte",
          ]
      },
      months: {
          shorthand: [
              "Gen",
              "Febr",
              "Març",
              "Abr",
              "Maig",
              "Juny",
              "Jul",
              "Ag",
              "Set",
              "Oct",
              "Nov",
              "Des",
          ],
          longhand: [
              "Gener",
              "Febrer",
              "Març",
              "Abril",
              "Maig",
              "Juny",
              "Juliol",
              "Agost",
              "Setembre",
              "Octubre",
              "Novembre",
              "Desembre",
          ]
      },
      ordinal: function (nth) {
          var s = nth % 100;
          if (s > 3 && s < 21)
              return "è";
          switch (s % 10) {
              case 1:
                  return "r";
              case 2:
                  return "n";
              case 3:
                  return "r";
              case 4:
                  return "t";
              default:
                  return "è";
          }
      },
      firstDayOfWeek: 1,
      time_24hr: true
  };
  fp.l10ns.cat = Catalan;
  var cat = fp.l10ns;

  exports.Catalan = Catalan;
  exports.default = cat;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9jYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxFQUFFLEtBQTREO0FBQzlELEVBQUUsU0FDbUQ7QUFDckQsQ0FBQywyQkFBMkI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0RBQWdELGNBQWM7O0FBRTlELENBQUMiLCJmaWxlIjoiZmxhdHBpY2tyLWNhdC1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5jYXQgPSB7fSkpO1xufSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGZwID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cuZmxhdHBpY2tyICE9PSB1bmRlZmluZWRcbiAgICAgID8gd2luZG93LmZsYXRwaWNrclxuICAgICAgOiB7XG4gICAgICAgICAgbDEwbnM6IHt9XG4gICAgICB9O1xuICB2YXIgQ2F0YWxhbiA9IHtcbiAgICAgIHdlZWtkYXlzOiB7XG4gICAgICAgICAgc2hvcnRoYW5kOiBbXCJEZ1wiLCBcIkRsXCIsIFwiRHRcIiwgXCJEY1wiLCBcIkRqXCIsIFwiRHZcIiwgXCJEc1wiXSxcbiAgICAgICAgICBsb25naGFuZDogW1xuICAgICAgICAgICAgICBcIkRpdW1lbmdlXCIsXG4gICAgICAgICAgICAgIFwiRGlsbHVuc1wiLFxuICAgICAgICAgICAgICBcIkRpbWFydHNcIixcbiAgICAgICAgICAgICAgXCJEaW1lY3Jlc1wiLFxuICAgICAgICAgICAgICBcIkRpam91c1wiLFxuICAgICAgICAgICAgICBcIkRpdmVuZHJlc1wiLFxuICAgICAgICAgICAgICBcIkRpc3NhYnRlXCIsXG4gICAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIG1vbnRoczoge1xuICAgICAgICAgIHNob3J0aGFuZDogW1xuICAgICAgICAgICAgICBcIkdlblwiLFxuICAgICAgICAgICAgICBcIkZlYnJcIixcbiAgICAgICAgICAgICAgXCJNYXLDp1wiLFxuICAgICAgICAgICAgICBcIkFiclwiLFxuICAgICAgICAgICAgICBcIk1haWdcIixcbiAgICAgICAgICAgICAgXCJKdW55XCIsXG4gICAgICAgICAgICAgIFwiSnVsXCIsXG4gICAgICAgICAgICAgIFwiQWdcIixcbiAgICAgICAgICAgICAgXCJTZXRcIixcbiAgICAgICAgICAgICAgXCJPY3RcIixcbiAgICAgICAgICAgICAgXCJOb3ZcIixcbiAgICAgICAgICAgICAgXCJEZXNcIixcbiAgICAgICAgICBdLFxuICAgICAgICAgIGxvbmdoYW5kOiBbXG4gICAgICAgICAgICAgIFwiR2VuZXJcIixcbiAgICAgICAgICAgICAgXCJGZWJyZXJcIixcbiAgICAgICAgICAgICAgXCJNYXLDp1wiLFxuICAgICAgICAgICAgICBcIkFicmlsXCIsXG4gICAgICAgICAgICAgIFwiTWFpZ1wiLFxuICAgICAgICAgICAgICBcIkp1bnlcIixcbiAgICAgICAgICAgICAgXCJKdWxpb2xcIixcbiAgICAgICAgICAgICAgXCJBZ29zdFwiLFxuICAgICAgICAgICAgICBcIlNldGVtYnJlXCIsXG4gICAgICAgICAgICAgIFwiT2N0dWJyZVwiLFxuICAgICAgICAgICAgICBcIk5vdmVtYnJlXCIsXG4gICAgICAgICAgICAgIFwiRGVzZW1icmVcIixcbiAgICAgICAgICBdXG4gICAgICB9LFxuICAgICAgb3JkaW5hbDogZnVuY3Rpb24gKG50aCkge1xuICAgICAgICAgIHZhciBzID0gbnRoICUgMTAwO1xuICAgICAgICAgIGlmIChzID4gMyAmJiBzIDwgMjEpXG4gICAgICAgICAgICAgIHJldHVybiBcIsOoXCI7XG4gICAgICAgICAgc3dpdGNoIChzICUgMTApIHtcbiAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiclwiO1xuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICByZXR1cm4gXCJuXCI7XG4gICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgIHJldHVybiBcInJcIjtcbiAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidFwiO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiw6hcIjtcbiAgICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmlyc3REYXlPZldlZWs6IDEsXG4gICAgICB0aW1lXzI0aHI6IHRydWVcbiAgfTtcbiAgZnAubDEwbnMuY2F0ID0gQ2F0YWxhbjtcbiAgdmFyIGNhdCA9IGZwLmwxMG5zO1xuXG4gIGV4cG9ydHMuQ2F0YWxhbiA9IENhdGFsYW47XG4gIGV4cG9ydHMuZGVmYXVsdCA9IGNhdDtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSk7XG4iXSwic291cmNlUm9vdCI6IiJ9
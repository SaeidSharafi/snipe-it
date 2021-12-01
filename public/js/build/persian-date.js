/*!
 * 
 * persian-date -  1.1.0
 * Reza Babakhani <babakhani.reza@gmail.com>
 * http://babakhani.github.io/PersianWebToolkit/docs/persian-date/
 * Under MIT license 
 * 
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["persianDate"] = factory();
	else
		root["persianDate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var durationUnit = __webpack_require__(4).durationUnit;

var Helpers = function () {
    function Helpers() {
        _classCallCheck(this, Helpers);
    }

    _createClass(Helpers, [{
        key: 'toPersianDigit',


        /**
         * @description return converted string to persian digit
         * @param digit
         * @returns {string|*}
         */
        value: function toPersianDigit(digit) {
            var latinDigit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            return digit.toString().replace(/\d+/g, function (digit) {
                var enDigitArr = [],
                    peDigitArr = [],
                    i = void 0,
                    j = void 0;
                for (i = 0; i < digit.length; i += 1) {
                    enDigitArr.push(digit.charCodeAt(i));
                }
                for (j = 0; j < enDigitArr.length; j += 1) {
                    peDigitArr.push(String.fromCharCode(enDigitArr[j] + (!!latinDigit && latinDigit === true ? 1584 : 1728)));
                }
                return peDigitArr.join('');
            });
        }

        /**
         * @param number
         * @param targetLength
         * @returns {string}
         */

    }, {
        key: 'leftZeroFill',
        value: function leftZeroFill(number, targetLength) {
            var output = number + '';
            while (output.length < targetLength) {
                output = '0' + output;
            }
            return output;
        }

        /**
         * @description normalize duration params and return valid param
         * @return {{unit: *, value: *}}
         */

    }, {
        key: 'normalizeDuration',
        value: function normalizeDuration() {
            var unit = void 0,
                value = void 0;
            if (typeof arguments[0] === 'string') {
                unit = arguments[0];
                value = arguments[1];
            } else {
                value = arguments[0];
                unit = arguments[1];
            }
            if (durationUnit.year.indexOf(unit) > -1) {
                unit = 'year';
            } else if (durationUnit.month.indexOf(unit) > -1) {
                unit = 'month';
            } else if (durationUnit.week.indexOf(unit) > -1) {
                unit = 'week';
            } else if (durationUnit.day.indexOf(unit) > -1) {
                unit = 'day';
            } else if (durationUnit.hour.indexOf(unit) > -1) {
                unit = 'hour';
            } else if (durationUnit.minute.indexOf(unit) > -1) {
                unit = 'minute';
            } else if (durationUnit.second.indexOf(unit) > -1) {
                unit = 'second';
            } else if (durationUnit.millisecond.indexOf(unit) > -1) {
                unit = 'millisecond';
            }
            return {
                unit: unit,
                value: value
            };
        }

        /**
         *
         * @param number
         * @returns {number}
         */

    }, {
        key: 'absRound',
        value: function absRound(number) {
            if (number < 0) {
                return Math.ceil(number);
            } else {
                return Math.floor(number);
            }
        }

        /**
         *
         * @param number
         * @return {number}
         */

    }, {
        key: 'absFloor',
        value: function absFloor(number) {
            if (number < 0) {
                // -0 -> 0
                return Math.ceil(number) || 0;
            } else {
                return Math.floor(number);
            }
        }
    }]);

    return Helpers;
}();

module.exports = Helpers;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TypeChecking = __webpack_require__(10);
var Algorithms = __webpack_require__(2);
var Helpers = __webpack_require__(0);
var Duration = __webpack_require__(5);
var Validator = __webpack_require__(11);
var toPersianDigit = new Helpers().toPersianDigit;
var leftZeroFill = new Helpers().leftZeroFill;
var normalizeDuration = new Helpers().normalizeDuration;
var fa = __webpack_require__(7);
var en = __webpack_require__(6);

/**
 * @description persian date class
 */

var PersianDateClass = function () {

    /**
     * @param input
     * @return {PersianDateClass}
     */
    function PersianDateClass(input) {
        _classCallCheck(this, PersianDateClass);

        this.calendarType = PersianDateClass.calendarType;
        this.localType = PersianDateClass.localType;
        this.leapYearMode = PersianDateClass.leapYearMode;

        this.algorithms = new Algorithms(this);
        this.version = "1.1.0";
        this._utcMode = false;
        if (this.localType !== 'fa') {
            this.formatPersian = false;
        } else {
            this.formatPersian = '_default';
        }
        this.State = this.algorithms.State;
        this.setup(input);
        if (this.State.isInvalidDate) {
            // Return Date like message
            return new Date([-1, -1]);
        }
        return this;
    }

    /**
     * @param input
     */


    _createClass(PersianDateClass, [{
        key: 'setup',
        value: function setup(input) {
            // Convert Any thing to Gregorian Date
            if (TypeChecking.isDate(input)) {
                this._gDateToCalculators(input);
            } else if (TypeChecking.isArray(input)) {
                if (!Validator.validateInputArray(input)) {
                    this.State.isInvalidDate = true;
                    return false;
                }
                this.algorithmsCalc([input[0], input[1] ? input[1] : 1, input[2] ? input[2] : 1, input[3] ? input[3] : 0, input[4] ? input[4] : 0, input[5] ? input[5] : 0, input[6] ? input[6] : 0]);
            } else if (TypeChecking.isNumber(input)) {
                var fromUnix = new Date(input);
                this._gDateToCalculators(fromUnix);
            }
            // instance of pDate
            else if (input instanceof PersianDateClass) {
                    this.algorithmsCalc([input.year(), input.month(), input.date(), input.hour(), input.minute(), input.second(), input.millisecond()]);
                }
                // ASP.NET JSON Date
                else if (input && input.substring(0, 6) === '/Date(') {
                        var fromDotNet = new Date(parseInt(input.substr(6)));
                        this._gDateToCalculators(fromDotNet);
                    } else {
                        var now = new Date();
                        this._gDateToCalculators(now);
                    }
        }

        /**
         * @param input
         * @return {*}
         * @private
         */

    }, {
        key: '_getSyncedClass',
        value: function _getSyncedClass(input) {
            var syncedCelander = PersianDateClass.toCalendar(this.calendarType).toLocale(this.localType).toLeapYearMode(this.leapYearMode);
            return new syncedCelander(input);
        }

        /**
         * @param inputgDate
         * @private
         */

    }, {
        key: '_gDateToCalculators',
        value: function _gDateToCalculators(inputgDate) {
            this.algorithms.calcGregorian([inputgDate.getFullYear(), inputgDate.getMonth(), inputgDate.getDate(), inputgDate.getHours(), inputgDate.getMinutes(), inputgDate.getSeconds(), inputgDate.getMilliseconds()]);
        }

        /**
         * @since 1.0.0
         * @description Helper method that return date range name like week days name, month names, month days names (specially in persian calendar).
         * @static
         * @return {*}
         */

    }, {
        key: 'rangeName',


        /**
         * @since 1.0.0
         * @description Helper method that return date range name like week days name, month names, month days names (specially in persian calendar).
         * @return {*}
         */
        value: function rangeName() {
            var t = this.calendarType;
            if (this.localType === 'fa') {
                if (t === 'persian') {
                    return fa.persian;
                } else {
                    return fa.gregorian;
                }
            } else {
                if (t === 'persian') {
                    return en.persian;
                } else {
                    return en.gregorian;
                }
            }
        }

        /**
         * @since 1.0.0
         * @param input
         * @return {PersianDateClass}
         */

    }, {
        key: 'toLeapYearMode',
        value: function toLeapYearMode(input) {
            this.leapYearMode = input;
            if (input === 'astronomical' && this.calendarType == 'persian') {
                this.leapYearMode = 'astronomical';
            } else if (input === 'algorithmic' && this.calendarType == 'persian') {
                this.leapYearMode = 'algorithmic';
            }
            this.algorithms.updateFromGregorian();
            return this;
        }

        /**
         * @since 1.0.0
         * @static
         * @param input
         * @return {PersianDateClass}
         */

    }, {
        key: 'toCalendar',


        /**
         * @since 1.0.0
         * @param input
         * @return {PersianDateClass}
         */
        value: function toCalendar(input) {
            this.calendarType = input;
            this.algorithms.updateFromGregorian();
            return this;
        }

        /**
         * @since 1.0.0
         * @static
         * @param input
         * @return {PersianDateClass}
         */

    }, {
        key: 'toLocale',


        /**
         * @since 1.0.0
         * @param input
         * @return {PersianDateClass}
         */
        value: function toLocale(input) {
            this.localType = input;
            if (this.localType !== 'fa') {
                this.formatPersian = false;
            } else {
                this.formatPersian = '_default';
            }
            return this;
        }

        /**
         * @return {*}
         * @private
         */

    }, {
        key: '_locale',
        value: function _locale() {
            var t = this.calendarType;
            if (this.localType === 'fa') {
                if (t === 'persian') {
                    return fa.persian;
                } else {
                    return fa.gregorian;
                }
            } else {
                if (t === 'persian') {
                    return en.persian;
                } else {
                    return en.gregorian;
                }
            }
        }

        /**
         * @param input
         * @private
         */

    }, {
        key: '_weekName',
        value: function _weekName(input) {
            return this._locale().weekdays[input - 1];
        }

        /**
         * @param input
         * @private
         */

    }, {
        key: '_weekNameShort',
        value: function _weekNameShort(input) {
            return this._locale().weekdaysShort[input - 1];
        }

        /**
         * @param input
         * @private
         */

    }, {
        key: '_weekNameMin',
        value: function _weekNameMin(input) {
            return this._locale().weekdaysMin[input - 1];
        }

        /**
         * @param input
         * @return {*}
         * @private
         */

    }, {
        key: '_dayName',
        value: function _dayName(input) {
            return this._locale().persianDaysName[input - 1];
        }

        /**
         * @param input
         * @private
         */

    }, {
        key: '_monthName',
        value: function _monthName(input) {
            return this._locale().months[input - 1];
        }

        /**
         * @param input
         * @private
         */

    }, {
        key: '_monthNameShort',
        value: function _monthNameShort(input) {
            return this._locale().monthsShort[input - 1];
        }

        /**
         * @param obj
         * @returns {boolean}
         */

    }, {
        key: 'isPersianDate',


        /**
         * @param obj
         * @return {boolean}
         */
        value: function isPersianDate(obj) {
            return obj instanceof PersianDateClass;
        }

        /**
         * @returns {PersianDate}
         */

    }, {
        key: 'clone',
        value: function clone() {
            return this._getSyncedClass(this.State.gDate);
        }

        /**
         * @since 1.0.0
         * @param dateArray
         * @return {*}
         */

    }, {
        key: 'algorithmsCalc',
        value: function algorithmsCalc(dateArray) {
            if (this.isPersianDate(dateArray)) {
                dateArray = [dateArray.year(), dateArray.month(), dateArray.date(), dateArray.hour(), dateArray.minute(), dateArray.second(), dateArray.millisecond()];
            }
            if (this.calendarType === 'persian' && this.leapYearMode == 'algorithmic') {
                return this.algorithms.calcPersian(dateArray);
            } else if (this.calendarType === 'persian' && this.leapYearMode == 'astronomical') {
                return this.algorithms.calcPersiana(dateArray);
            } else if (this.calendarType === 'gregorian') {
                dateArray[1] = dateArray[1] - 1;
                return this.algorithms.calcGregorian(dateArray);
            }
        }

        /**
         * @since 1.0.0
         * @return {*}
         */

    }, {
        key: 'calendar',
        value: function calendar() {
            var key = void 0;
            if (this.calendarType == 'persian') {
                if (this.leapYearMode == 'astronomical') {
                    key = 'persianAstro';
                } else if (this.leapYearMode == 'algorithmic') {
                    key = 'persianAlgo';
                }
            } else {
                key = 'gregorian';
            }
            return this.State[key];
        }

        /**
         * @description return Duration object
         * @param input
         * @param key
         * @returns {Duration}
         */

    }, {
        key: 'duration',


        /**
         * @description return Duration object
         * @param input
         * @param key
         * @returns {Duration}
         */
        value: function duration(input, key) {
            return new Duration(input, key);
        }

        /**
         * @description check if passed object is duration
         * @param obj
         * @returns {boolean}
         */

    }, {
        key: 'isDuration',


        /**
         * @description check if passed object is duration
         * @param obj
         * @returns {boolean}
         */
        value: function isDuration(obj) {
            return obj instanceof Duration;
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'years',
        value: function years(input) {
            return this.year(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'year',
        value: function year(input) {
            if (input || input === 0) {
                this.algorithmsCalc([input, this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]);
                return this;
            } else {
                return this.calendar().year;
            }
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'month',
        value: function month(input) {
            if (input || input === 0) {
                this.algorithmsCalc([this.year(), input, this.date()]);
                return this;
            } else {
                return this.calendar().month + 1;
            }
        }

        /**
         * Day of week
         * @returns {Function|Date.toJSON.day|date_json.day|PersianDate.day|day|output.day|*}
         */

    }, {
        key: 'days',
        value: function days() {
            return this.day();
        }

        /**
         * @returns {Function|Date.toJSON.day|date_json.day|PersianDate.day|day|output.day|*}
         */

    }, {
        key: 'day',
        value: function day() {
            return this.calendar().weekday;
        }

        /**
         * Day of Months
         * @param input
         * @returns {*}
         */

    }, {
        key: 'dates',
        value: function dates(input) {
            return this.date(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'date',
        value: function date(input) {
            if (input || input === 0) {
                this.algorithmsCalc([this.year(), this.month(), input]);
                return this;
            } else {
                return this.calendar().day;
            }
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'hour',
        value: function hour(input) {
            return this.hours(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'hours',
        value: function hours(input) {
            if (input || input === 0) {
                if (input === 0) {
                    input = 24;
                }
                this.algorithmsCalc([this.year(), this.month(), this.date(), input]);
                return this;
            } else {
                return this.State.gDate.getHours();
            }
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'minute',
        value: function minute(input) {
            return this.minutes(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'minutes',
        value: function minutes(input) {
            if (input || input === 0) {
                this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), input]);
                return this;
            } else {
                return this.State.gDate.getMinutes();
            }
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'second',
        value: function second(input) {
            return this.seconds(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'seconds',
        value: function seconds(input) {
            if (input || input === 0) {
                this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), this.minute(), input]);
                return this;
            } else {
                return this.State.gDate.getSeconds();
            }
        }

        /**
         * @param input
         * @returns {*}
         * Getter Setter
         */

    }, {
        key: 'millisecond',
        value: function millisecond(input) {
            return this.milliseconds(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'milliseconds',
        value: function milliseconds(input) {
            if (input || input === 0) {
                this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), input]);
                return this;
            } else {
                return this.State.gregorian.millisecond;
            }
        }

        /**
         * Return Milliseconds since the Unix Epoch (1318874398806)
         * @returns {*}
         * @private
         */
        //    _valueOf () {
        //        return this.State.gDate.valueOf();
        //    }


    }, {
        key: 'unix',


        /**
         * Return Unix Timestamp (1318874398)
         * @param timestamp
         * @returns {*}
         */
        value: function unix(timestamp) {
            var output = void 0;
            if (timestamp) {
                return this._getSyncedClass(timestamp * 1000);
            } else {
                var str = this.State.gDate.valueOf().toString();
                output = str.substring(0, str.length - 3);
            }
            return parseInt(output);
        }

        /**
         * @returns {*}
         */

    }, {
        key: 'valueOf',
        value: function valueOf() {
            return this.State.gDate.valueOf();
        }

        /**
         * @param year
         * @param month
         * @returns {*}
         * @since 1.0.0
         */

    }, {
        key: 'getFirstWeekDayOfMonth',


        /**
         * @param year
         * @param month
         * @returns {*}
         * @since 1.0.0
         */
        value: function getFirstWeekDayOfMonth(year, month) {
            return this._getSyncedClass([year, month, 1]).day();
        }

        /**
         * @param input
         * @param val
         * @param asFloat
         * @returns {*}
         */

    }, {
        key: 'diff',
        value: function diff(input, val, asFloat) {
            var self = this,
                inputMoment = input,
                zoneDiff = 0,
                diff = self.State.gDate - inputMoment.toDate() - zoneDiff,
                year = self.year() - inputMoment.year(),
                month = self.month() - inputMoment.month(),
                date = (self.date() - inputMoment.date()) * -1,
                output = void 0;

            if (val === 'months' || val === 'month') {
                output = year * 12 + month + date / 30;
            } else if (val === 'years' || val === 'year') {
                output = year + (month + date / 30) / 12;
            } else {
                output = val === 'seconds' || val === 'second' ? diff / 1e3 : // 1000
                val === 'minutes' || val === 'minute' ? diff / 6e4 : // 1000 * 60
                val === 'hours' || val === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                val === 'days' || val === 'day' ? diff / 864e5 : // 1000 * 60 * 60 * 24
                val === 'weeks' || val === 'week' ? diff / 6048e5 : // 1000 * 60 * 60 * 24 * 7
                diff;
            }
            return asFloat ? output : Math.round(output);
        }

        /**
         * @param key
         * @returns {*}
         */

    }, {
        key: 'startOf',
        value: function startOf(key) {
            var syncedCelander = PersianDateClass.toCalendar(this.calendarType).toLocale(this.localType);
            var newArray = new PersianDateClass(this.valueOf() - (this.calendar().weekday - 1) * 86400000).toArray();
            // Simplify this\
            /* jshint ignore:start */
            switch (key) {
                case 'years':
                case 'year':
                    return new syncedCelander([this.year(), 1, 1]);
                case 'months':
                case 'month':
                    return new syncedCelander([this.year(), this.month(), 1]);
                case 'days':
                case 'day':
                    return new syncedCelander([this.year(), this.month(), this.date(), 0, 0, 0]);
                case 'hours':
                case 'hour':
                    return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), 0, 0]);
                case 'minutes':
                case 'minute':
                    return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 0]);
                case 'seconds':
                case 'second':
                    return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
                case 'weeks':
                case 'week':
                    return new syncedCelander(newArray);
                default:
                    return this.clone();
            }
            /* jshint ignore:end */
        }

        /**
         * @param key
         * @returns {*}
         */
        /* eslint-disable no-case-declarations */

    }, {
        key: 'endOf',
        value: function endOf(key) {
            var syncedCelander = PersianDateClass.toCalendar(this.calendarType).toLocale(this.localType);
            // Simplify this
            switch (key) {
                case 'years':
                case 'year':
                    var days = this.isLeapYear() ? 30 : 29;
                    return new syncedCelander([this.year(), 12, days, 23, 59, 59]);
                case 'months':
                case 'month':
                    var monthDays = this.daysInMonth(this.year(), this.month());
                    return new syncedCelander([this.year(), this.month(), monthDays, 23, 59, 59]);
                case 'days':
                case 'day':
                    return new syncedCelander([this.year(), this.month(), this.date(), 23, 59, 59]);
                case 'hours':
                case 'hour':
                    return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), 59, 59]);
                case 'minutes':
                case 'minute':
                    return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 59]);
                case 'seconds':
                case 'second':
                    return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
                case 'weeks':
                case 'week':
                    var weekDayNumber = this.calendar().weekday;
                    return new syncedCelander([this.year(), this.month(), this.date() + (7 - weekDayNumber)]);
                default:
                    return this.clone();
            }
            /* eslint-enable no-case-declarations */
        }

        /**
         * @returns {*}
         */

    }, {
        key: 'sod',
        value: function sod() {
            return this.startOf('day');
        }

        /**
         * @returns {*}
         */

    }, {
        key: 'eod',
        value: function eod() {
            return this.endOf('day');
        }

        /** Get the timezone offset in minutes.
         * @return {*}
         */

    }, {
        key: 'zone',
        value: function zone(input) {
            if (input || input === 0) {
                this.State.zone = input;
                return this;
            } else {
                return this.State.zone;
            }
        }

        /**
         * @returns {PersianDate}
         */

    }, {
        key: 'local',
        value: function local() {
            var utcStamp = void 0;
            if (this._utcMode) {
                var ThatDayOffset = new Date(this.toDate()).getTimezoneOffset();
                var offsetMils = ThatDayOffset * 60 * 1000;
                if (ThatDayOffset < 0) {
                    utcStamp = this.valueOf() - offsetMils;
                } else {
                    /* istanbul ignore next */
                    utcStamp = this.valueOf() + offsetMils;
                }
                this.toCalendar(PersianDateClass.calendarType);
                var utcDate = new Date(utcStamp);
                this._gDateToCalculators(utcDate);
                this._utcMode = false;
                this.zone(ThatDayOffset);
                return this;
            } else {
                return this;
            }
        }

        /**
         * @param input
         * @return {*}
         */

    }, {
        key: 'utc',


        /**
         * @description Current date/time in UTC mode
         * @param input
         * @returns {*}
         */
        value: function utc(input) {
            var utcStamp = void 0;
            if (input) {
                return this._getSyncedClass(input).utc();
            }
            if (this._utcMode) {
                return this;
            } else {
                var offsetMils = this.zone() * 60 * 1000;
                if (this.zone() < 0) {
                    utcStamp = this.valueOf() + offsetMils;
                } else {
                    /* istanbul ignore next */
                    utcStamp = this.valueOf() - offsetMils;
                }
                var utcDate = new Date(utcStamp),
                    d = this._getSyncedClass(utcDate);
                this.algorithmsCalc(d);
                this._utcMode = true;
                this.zone(0);
                return this;
            }
        }

        /**
         * @returns {boolean}
         */

    }, {
        key: 'isUtc',
        value: function isUtc() {
            return this._utcMode;
        }

        /**
         * @returns {boolean}
         * @link https://fa.wikipedia.org/wiki/%D8%B3%D8%A7%D8%B9%D8%AA_%D8%AA%D8%A7%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%DB%8C
         */

    }, {
        key: 'isDST',
        value: function isDST() {
            var month = this.month(),
                day = this.date();
            if (month == 1 && day > 1 || month == 6 && day < 31 || month < 6 && month >= 2) {
                return true;
            } else {
                return false;
            }
        }

        /**
         * @returns {boolean}
         */

    }, {
        key: 'isLeapYear',
        value: function isLeapYear(year) {
            if (year === undefined) {
                year = this.year();
            }
            if (this.calendarType == 'persian' && this.leapYearMode === 'algorithmic') {
                return this.algorithms.leap_persian(year);
            }
            if (this.calendarType == 'persian' && this.leapYearMode === 'astronomical') {
                return this.algorithms.leap_persiana(year);
            } else if (this.calendarType == 'gregorian') {
                return this.algorithms.leap_gregorian(year);
            }
        }

        /**
         * @param yearInput
         * @param monthInput
         * @returns {number}
         */

    }, {
        key: 'daysInMonth',
        value: function daysInMonth(yearInput, monthInput) {
            var year = yearInput ? yearInput : this.year(),
                month = monthInput ? monthInput : this.month();
            if (this.calendarType === 'persian') {
                if (month < 1 || month > 12) return 0;
                if (month < 7) return 31;
                if (month < 12) return 30;
                if (this.isLeapYear(year)) {
                    return 30;
                }
                return 29;
            }
            if (this.calendarType === 'gregorian') {
                return new Date(year, month, 0).getDate();
            }
        }

        /**
         * @description Return Native Javascript Date
         * @returns {*|PersianDate.gDate}
         */

    }, {
        key: 'toDate',
        value: function toDate() {
            return this.State.gDate;
        }

        /**
         * @description Returns Array Of Persian Date
         * @returns {array}
         */

    }, {
        key: 'toArray',
        value: function toArray() {
            return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
        }

        /**
         * @returns {*}
         */

    }, {
        key: 'formatNumber',
        value: function formatNumber() {
            var output = void 0,
                self = this;

            // if default conf dosent set follow golbal config
            if (this.formatPersian === '_default') {
                if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
                    /* istanbul ignore next */
                    if (self.formatPersian === false) {
                        output = false;
                    } else {
                        // Default Conf
                        output = true;
                    }
                }
                /* istanbul ignore next */
                else {
                        if (window.formatPersian === false) {
                            output = false;
                        } else {
                            // Default Conf
                            output = true;
                        }
                    }
            } else {
                if (this.formatPersian === true) {
                    output = true;
                } else if (this.formatPersian === false) {
                    output = false;
                } else {
                    Error('Invalid Config "formatPersian" !!');
                }
            }
            return output;
        }

        /**
         * @param inputString
         * @returns {*}
         */

    }, {
        key: 'format',
        value: function format(inputString) {
            if (this.State.isInvalidDate) {
                return false;
            }
            var self = this,
                formattingTokens = /([[^[]*])|(\\)?(Mo|MM?M?M?|Do|DD?D?D?|dddddd?|ddddd?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|X|LT|ll?l?l?|LL?L?L?)/g,
                info = {
                year: self.year(),
                month: self.month(),
                hour: self.hours(),
                minute: self.minutes(),
                second: self.seconds(),
                date: self.date(),
                timezone: self.zone(),
                unix: self.unix()
            },
                formatToPersian = self.formatNumber();

            var checkPersian = function checkPersian(i) {
                if (formatToPersian) {
                    return toPersianDigit(i);
                } else {
                    return i;
                }
            };

            /* jshint ignore:start */
            function replaceFunction(input) {
                switch (input) {
                    // AM/PM
                    case 'a':
                        {
                            if (formatToPersian) return info.hour >= 12 ? 'ب ظ' : 'ق ظ';else return info.hour >= 12 ? 'PM' : 'AM';
                        }
                    // Hours (Int)
                    case 'H':
                        {
                            return checkPersian(info.hour);
                        }
                    case 'HH':
                        {
                            return checkPersian(leftZeroFill(info.hour, 2));
                        }
                    case 'h':
                        {
                            return checkPersian(info.hour % 12);
                        }
                    case 'hh':
                        {
                            return checkPersian(leftZeroFill(info.hour % 12, 2));
                        }
                    // Minutes
                    case 'm':
                        {
                            return checkPersian(leftZeroFill(info.minute, 2));
                        }
                    // Two Digit Minutes
                    case 'mm':
                        {
                            return checkPersian(leftZeroFill(info.minute, 2));
                        }
                    // Second
                    case 's':
                        {
                            return checkPersian(info.second);
                        }
                    case 'ss':
                        {
                            return checkPersian(leftZeroFill(info.second, 2));
                        }
                    // Day (Int)
                    case 'D':
                        {
                            return checkPersian(leftZeroFill(info.date));
                        }
                    // Return Two Digit
                    case 'DD':
                        {
                            return checkPersian(leftZeroFill(info.date, 2));
                        }
                    // Return day Of Month
                    case 'DDD':
                        {
                            var t = self.startOf('year');
                            return checkPersian(leftZeroFill(self.diff(t, 'days'), 3));
                        }
                    // Return Day of Year
                    case 'DDDD':
                        {
                            var _t = self.startOf('year');
                            return checkPersian(leftZeroFill(self.diff(_t, 'days'), 3));
                        }
                    // Return day Of week
                    case 'd':
                        {
                            return checkPersian(self.calendar().weekday);
                        }
                    // Return week day name abbr
                    case 'ddd':
                        {
                            return self._weekNameShort(self.calendar().weekday);
                        }
                    case 'dddd':
                        {
                            return self._weekName(self.calendar().weekday);
                        }
                    // Return Persian Day Name
                    case 'ddddd':
                        {
                            return self._dayName(self.calendar().day);
                        }
                    // Return Persian Day Name
                    case 'dddddd':
                        {
                            return self._weekNameMin(self.calendar().weekday);
                        }
                    // Return Persian Day Name
                    case 'w':
                        {
                            var _t2 = self.startOf('year'),
                                day = parseInt(self.diff(_t2, 'days') / 7) + 1;
                            return checkPersian(day);
                        }
                    // Return Persian Day Name
                    case 'ww':
                        {
                            var _t3 = self.startOf('year'),
                                _day = leftZeroFill(parseInt(self.diff(_t3, 'days') / 7) + 1, 2);
                            return checkPersian(_day);
                        }
                    // Month  (Int)
                    case 'M':
                        {
                            return checkPersian(info.month);
                        }
                    // Two Digit Month (Str)
                    case 'MM':
                        {
                            return checkPersian(leftZeroFill(info.month, 2));
                        }
                    // Abbr String of Month (Str)
                    case 'MMM':
                        {
                            return self._monthNameShort(info.month);
                        }
                    // Full String name of Month (Str)
                    case 'MMMM':
                        {
                            return self._monthName(info.month);
                        }
                    // Year
                    // Two Digit Year (Str)
                    case 'YY':
                        {
                            var yearDigitArray = info.year.toString().split('');
                            return checkPersian(yearDigitArray[2] + yearDigitArray[3]);
                        }
                    // Full Year (Int)
                    case 'YYYY':
                        {
                            return checkPersian(info.year);
                        }
                    /* istanbul ignore next */
                    case 'Z':
                        {
                            var flag = '+',
                                hours = Math.round(info.timezone / 60),
                                minutes = info.timezone % 60;

                            if (minutes < 0) {
                                minutes *= -1;
                            }
                            if (hours < 0) {
                                flag = '-';
                                hours *= -1;
                            }

                            var z = flag + leftZeroFill(hours, 2) + ':' + leftZeroFill(minutes, 2);
                            return checkPersian(z);
                        }
                    /* istanbul ignore next */
                    case 'ZZ':
                        {
                            var _flag = '+',
                                _hours = Math.round(info.timezone / 60),
                                _minutes = info.timezone % 60;

                            if (_minutes < 0) {
                                _minutes *= -1;
                            }
                            if (_hours < 0) {
                                _flag = '-';
                                _hours *= -1;
                            }
                            var _z = _flag + leftZeroFill(_hours, 2) + '' + leftZeroFill(_minutes, 2);
                            return checkPersian(_z);
                        }
                    /* istanbul ignore next */
                    case 'X':
                        {
                            return self.unix();
                        }
                    // 8:30 PM
                    case 'LT':
                        {
                            return self.format('H:m a');
                        }
                    // 09/04/1986
                    case 'L':
                        {
                            return self.format('YYYY/MM/DD');
                        }
                    // 9/4/1986
                    case 'l':
                        {
                            return self.format('YYYY/M/D');
                        }
                    // September 4th 1986
                    case 'LL':
                        {
                            return self.format('MMMM DD YYYY');
                        }
                    // Sep 4 1986
                    case 'll':
                        {
                            return self.format('MMM DD YYYY');
                        }
                    //September 4th 1986 8:30 PM
                    case 'LLL':
                        {
                            return self.format('MMMM YYYY DD   H:m  a');
                        }
                    // Sep 4 1986 8:30 PM
                    case 'lll':
                        {
                            return self.format('MMM YYYY DD   H:m  a');
                        }
                    //Thursday, September 4th 1986 8:30 PM
                    case 'LLLL':
                        {
                            return self.format('dddd D MMMM YYYY  H:m  a');
                        }
                    // Thu, Sep 4 1986 8:30 PM
                    case 'llll':
                        {
                            return self.format('ddd D MMM YYYY  H:m  a');
                        }
                }
            }

            /* jshint ignore:end */

            if (inputString) {
                return inputString.replace(formattingTokens, replaceFunction);
            } else {
                var _inputString = 'YYYY-MM-DD HH:mm:ss a';
                return _inputString.replace(formattingTokens, replaceFunction);
            }
        }

        /**
         * @param key
         * @param value
         * @returns {PersianDate}
         */

    }, {
        key: 'add',
        value: function add(key, value) {
            if (value === 0) {
                return this;
            }
            var unit = normalizeDuration(key, value).unit,
                arr = this.toArray();
            value = normalizeDuration(key, value).value;
            if (unit === 'year') {
                var normalizedDate = arr[2],
                    monthDays = this.daysInMonth(arr[0] + value, arr[1]);
                if (arr[2] > monthDays) {
                    normalizedDate = monthDays;
                }
                var tempDate = new PersianDateClass([arr[0] + value, arr[1], normalizedDate, arr[3], arr[4], arr[5], arr[6], arr[7]]);
                return tempDate;
            }
            if (unit === 'month') {
                var tempYear = Math.floor(value / 12);
                var remainingMonth = value - tempYear * 12,
                    calcedMonth = null;
                if (arr[1] + remainingMonth > 12) {
                    tempYear += 1;
                    calcedMonth = arr[1] + remainingMonth - 12;
                } else {
                    calcedMonth = arr[1] + remainingMonth;
                }
                var normalizaedDate = arr[2],
                    tempDateArray = new PersianDateClass([arr[0] + tempYear, calcedMonth, 1, arr[3], arr[4], arr[5], arr[6], arr[7]]).toArray(),
                    _monthDays = this.daysInMonth(arr[0] + tempYear, calcedMonth);
                if (arr[2] > _monthDays) {
                    normalizaedDate = _monthDays;
                }
                return new PersianDateClass([tempDateArray[0], tempDateArray[1], normalizaedDate, tempDateArray[3], tempDateArray[4], tempDateArray[5], tempDateArray[6], tempDateArray[7]]);
            }
            if (unit === 'day') {
                var calcedDay = new PersianDateClass(this.valueOf()).hour(12),
                    newMillisecond = calcedDay.valueOf() + value * 86400000,
                    newDate = new PersianDateClass(newMillisecond);
                return newDate.hour(arr[3]);
            }
            if (unit === 'week') {
                var _calcedDay = new PersianDateClass(this.valueOf()).hour(12),
                    _newMillisecond = _calcedDay.valueOf() + 7 * value * 86400000,
                    _newDate = new PersianDateClass(_newMillisecond);
                return _newDate.hour(arr[3]);
            }
            if (unit === 'hour') {
                var _newMillisecond2 = this.valueOf() + value * 3600000;
                return this.unix(_newMillisecond2 / 1000);
            }
            if (unit === 'minute') {
                var _newMillisecond3 = this.valueOf() + value * 60000;
                return this.unix(_newMillisecond3 / 1000);
            }
            if (unit === 'second') {
                var _newMillisecond4 = this.valueOf() + value * 1000;
                return this.unix(_newMillisecond4 / 1000);
            }
            if (unit === 'millisecond') {
                var _newMillisecond5 = this.valueOf() + value;
                return this.unix(_newMillisecond5 / 1000);
            }
            return this._getSyncedClass(this.valueOf());
        }

        /**
         * @param key
         * @param value
         * @returns {PersianDate}
         */

    }, {
        key: 'subtract',
        value: function subtract(key, value) {
            return this.add(key, value * -1);
        }

        /**
         * check if a date is same as b
         * @param dateA
         * @param dateB
         * @since 1.0.0
         * @return {boolean}
         * @static
         */

    }, {
        key: 'isSameDay',


        /**
         * @param dateB
         * @since 1.0.0
         * @return {PersianDateClass|*|boolean}
         */
        value: function isSameDay(dateB) {
            return this && dateB && this.date() == dateB.date() && this.year() == dateB.year() && this.month() == dateB.month();
        }

        /**
         * @desc check if a month is same as b
         * @param {Date} dateA
         * @param {Date} dateB
         * @return {boolean}
         * @since 1.0.0
         * @static
         */

    }, {
        key: 'isSameMonth',


        /**
         * @desc check two for month similarity
         * @param dateA
         * @param dateB
         * @since 1.0.0
         * @return {*|boolean}
         */
        value: function isSameMonth(dateB) {
            return this && dateB && this.year() == this.year() && this.month() == dateB.month();
        }
    }], [{
        key: 'rangeName',
        value: function rangeName() {
            var p = PersianDateClass,
                t = p.calendarType;
            if (p.localType === 'fa') {
                if (t === 'persian') {
                    return fa.persian;
                } else {
                    return fa.gregorian;
                }
            } else {
                if (t === 'persian') {
                    return en.persian;
                } else {
                    return en.gregorian;
                }
            }
        }
    }, {
        key: 'toLeapYearMode',
        value: function toLeapYearMode(input) {
            var d = PersianDateClass;
            d.leapYearMode = input;
            return d;
        }
    }, {
        key: 'toCalendar',
        value: function toCalendar(input) {
            var d = PersianDateClass;
            d.calendarType = input;
            return d;
        }

        /**
         * @since 1.0.0
         * @static
         * @param input
         * @return {PersianDateClass}
         */

    }, {
        key: 'toLocale',
        value: function toLocale(input) {
            var d = PersianDateClass;
            d.localType = input;
            if (d.localType !== 'fa') {
                d.formatPersian = false;
            } else {
                d.formatPersian = '_default';
            }
            return d;
        }
    }, {
        key: 'isPersianDate',
        value: function isPersianDate(obj) {
            return obj instanceof PersianDateClass;
        }
    }, {
        key: 'duration',
        value: function duration(input, key) {
            return new Duration(input, key);
        }
    }, {
        key: 'isDuration',
        value: function isDuration(obj) {
            return obj instanceof Duration;
        }
    }, {
        key: 'unix',
        value: function unix(timestamp) {
            if (timestamp) {
                return new PersianDateClass(timestamp * 1000);
            } else {
                return new PersianDateClass().unix();
            }
        }
    }, {
        key: 'getFirstWeekDayOfMonth',
        value: function getFirstWeekDayOfMonth(year, month) {
            return new PersianDateClass([year, month, 1]).day();
        }
    }, {
        key: 'utc',
        value: function utc(input) {
            if (input) {
                return new PersianDateClass(input).utc();
            } else {
                return new PersianDateClass().utc();
            }
        }
    }, {
        key: 'isSameDay',
        value: function isSameDay(dateA, dateB) {
            return dateA && dateB && dateA.date() == dateB.date() && dateA.year() == dateB.year() && dateA.month() == dateB.month();
        }
    }, {
        key: 'isSameMonth',
        value: function isSameMonth(dateA, dateB) {
            return dateA && dateB && dateA.year() == dateB.year() && dateA.month() == dateB.month();
        }
    }]);

    return PersianDateClass;
}();

/**
 * @type {PersianDateClass}
 */


module.exports = PersianDateClass;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Start algorithm class
var ASTRO = __webpack_require__(3);
var State = __webpack_require__(9);

var Algorithms = function () {
    function Algorithms(parent) {
        _classCallCheck(this, Algorithms);

        this.parent = parent;
        this.ASTRO = new ASTRO();
        this.State = new State();
        /*  You may notice that a variety of array variables logically local
         to functions are declared globally here.  In JavaScript, construction
         of an array variable from source code occurs as the code is
         interpreted.  Making these variables pseudo-globals permits us
         to avoid overhead constructing and disposing of them in each
         call on the function in which whey are used.  */
        // TODO this block didnt used in main agorithm
        this.J0000 = 1721424.5; // Julian date of Gregorian epoch: 0000-01-01
        this.J1970 = 2440587.5; // Julian date at Unix epoch: 1970-01-01
        this.JMJD = 2400000.5; // Epoch of Modified Julian Date system
        this.NormLeap = [false /*"Normal year"*/, true /*"Leap year"*/];
        // TODO END
        this.GREGORIAN_EPOCH = 1721425.5;
        this.PERSIAN_EPOCH = 1948320.5;
    }

    /**
     * @desc LEAP_GREGORIAN  --  Is a given year in the Gregorian calendar a leap year ?
     * @param year
     * @return {boolean}
     */


    _createClass(Algorithms, [{
        key: 'leap_gregorian',
        value: function leap_gregorian(year) {
            return year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0);
        }

        /**
         * @desc Determine Julian day number from Gregorian calendar date
         * @param {*} year
         * @param {*} month
         * @param {*} day
         */

    }, {
        key: 'gregorian_to_jd',
        value: function gregorian_to_jd(year, month, day) {
            return this.GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) + -Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : this.leap_gregorian(year) ? -1 : -2) + day);
        }

        /**
         * @desc Calculate Gregorian calendar date from Julian day
         * @param {*} jd
         */

    }, {
        key: 'jd_to_gregorian',
        value: function jd_to_gregorian(jd) {
            var wjd = void 0,
                depoch = void 0,
                quadricent = void 0,
                dqc = void 0,
                cent = void 0,
                dcent = void 0,
                quad = void 0,
                dquad = void 0,
                yindex = void 0,
                year = void 0,
                yearday = void 0,
                leapadj = void 0,
                month = void 0,
                day = void 0;

            wjd = Math.floor(jd - 0.5) + 0.5;
            depoch = wjd - this.GREGORIAN_EPOCH;
            quadricent = Math.floor(depoch / 146097);
            dqc = this.ASTRO.mod(depoch, 146097);
            cent = Math.floor(dqc / 36524);
            dcent = this.ASTRO.mod(dqc, 36524);
            quad = Math.floor(dcent / 1461);
            dquad = this.ASTRO.mod(dcent, 1461);
            yindex = Math.floor(dquad / 365);
            year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
            if (!(cent === 4 || yindex === 4)) {
                year++;
            }
            yearday = wjd - this.gregorian_to_jd(year, 1, 1);
            leapadj = wjd < this.gregorian_to_jd(year, 3, 1) ? 0 : this.leap_gregorian(year) ? 1 : 2;
            month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
            day = wjd - this.gregorian_to_jd(year, month, 1) + 1;

            return [year, month, day];
        }

        /**
         * @param {*} year
         */
        //    leap_julian (year) {
        //        return this.ASTRO.mod(year, 4) === ((year > 0) ? 0 : 3);
        //    }


        /**
         * @desc Calculate Julian calendar date from Julian day
         * @param {*} td
         */
        //    jd_to_julian (td) {
        //        let z, a, b, c, d, e, year, month, day;
        //
        //        td += 0.5;
        //        z = Math.floor(td);
        //
        //        a = z;
        //        b = a + 1524;
        //        c = Math.floor((b - 122.1) / 365.25);
        //        d = Math.floor(365.25 * c);
        //        e = Math.floor((b - d) / 30.6001);
        //
        //        month = Math.floor((e < 14) ? (e - 1) : (e - 13));
        //        year = Math.floor((month > 2) ? (c - 4716) : (c - 4715));
        //        day = b - d - Math.floor(30.6001 * e);
        //
        //        /*  If year is less than 1, subtract one to convert from
        //         a zero based date system to the common era system in
        //         which the year -1 (1 B.C.E) is followed by year 1 (1 C.E.).  */
        //
        //        if (year < 1) {
        //            year--;
        //        }
        //
        //        return [year, month, day];
        //    }


        /**
         * @desc TEHRAN_EQUINOX  --  Determine Julian day and fraction of the
         March equinox at the Tehran meridian in
         a given Gregorian year.
         * @param {*} year
         */

    }, {
        key: 'tehran_equinox',
        value: function tehran_equinox(year) {
            var equJED = void 0,
                equJD = void 0,
                equAPP = void 0,
                equTehran = void 0,
                dtTehran = void 0;

            //  March equinox in dynamical time
            equJED = this.ASTRO.equinox(year, 0);

            //  Correct for delta T to obtain Universal time
            equJD = equJED - this.ASTRO.deltat(year) / (24 * 60 * 60);

            //  Apply the equation of time to yield the apparent time at Greenwich
            equAPP = equJD + this.ASTRO.equationOfTime(equJED);

            /*  Finally, we must correct for the constant difference between
             the Greenwich meridian andthe time zone standard for
             Iran Standard time, 52°30' to the East.  */

            dtTehran = (52 + 30 / 60.0 + 0 / (60.0 * 60.0)) / 360;
            equTehran = equAPP + dtTehran;

            return equTehran;
        }

        /**
         * @desc TEHRAN_EQUINOX_JD  --  Calculate Julian day during which the
         March equinox, reckoned from the Tehran
         meridian, occurred for a given Gregorian
         year.
         * @param {*} year
         */

    }, {
        key: 'tehran_equinox_jd',
        value: function tehran_equinox_jd(year) {
            var ep = void 0,
                epg = void 0;

            ep = this.tehran_equinox(year);
            epg = Math.floor(ep);

            return epg;
        }

        /**
         * @desc  PERSIANA_YEAR  --  Determine the year in the Persian
         astronomical calendar in which a
         given Julian day falls.  Returns an
         array of two elements:
          [0]  Persian year
         [1]  Julian day number containing
         equinox for this year.
         * @param {*} jd
         */

    }, {
        key: 'persiana_year',
        value: function persiana_year(jd) {
            var guess = this.jd_to_gregorian(jd)[0] - 2,
                lasteq = void 0,
                nexteq = void 0,
                adr = void 0;

            lasteq = this.tehran_equinox_jd(guess);
            while (lasteq > jd) {
                guess--;
                lasteq = this.tehran_equinox_jd(guess);
            }
            nexteq = lasteq - 1;
            while (!(lasteq <= jd && jd < nexteq)) {
                lasteq = nexteq;
                guess++;
                nexteq = this.tehran_equinox_jd(guess);
            }
            adr = Math.round((lasteq - this.PERSIAN_EPOCH) / this.ASTRO.TropicalYear) + 1;

            return [adr, lasteq];
        }

        /**
         * @desc Calculate date in the Persian astronomical
         calendar from Julian day.
         * @param {*} jd
         */

    }, {
        key: 'jd_to_persiana',
        value: function jd_to_persiana(jd) {
            var year = void 0,
                month = void 0,
                day = void 0,
                adr = void 0,
                equinox = void 0,
                yday = void 0;

            jd = Math.floor(jd) + 0.5;
            adr = this.persiana_year(jd);
            year = adr[0];
            equinox = adr[1];
            day = Math.floor((jd - equinox) / 30) + 1;

            yday = Math.floor(jd) - this.persiana_to_jd(year, 1, 1) + 1;
            month = yday <= 186 ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
            day = Math.floor(jd) - this.persiana_to_jd(year, month, 1) + 1;

            return [year, month, day];
        }

        /**
         * @desc Obtain Julian day from a given Persian
         astronomical calendar date.
         * @param {*} year
         * @param {*} month
         * @param {*} day
         */

    }, {
        key: 'persiana_to_jd',
        value: function persiana_to_jd(year, month, day) {
            var adr = void 0,
                equinox = void 0,
                guess = void 0,
                jd = void 0;

            guess = this.PERSIAN_EPOCH - 1 + this.ASTRO.TropicalYear * (year - 1 - 1);
            adr = [year - 1, 0];

            while (adr[0] < year) {
                adr = this.persiana_year(guess);
                guess = adr[1] + (this.ASTRO.TropicalYear + 2);
            }
            equinox = adr[1];

            jd = equinox + (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) + (day - 1);
            return jd;
        }

        /**
         * @desc Is a given year a leap year in the Persian astronomical calendar ?
         * @param {*} year
         */

    }, {
        key: 'leap_persiana',
        value: function leap_persiana(year) {
            return this.persiana_to_jd(year + 1, 1, 1) - this.persiana_to_jd(year, 1, 1) > 365;
        }

        /**
         * @desc Is a given year a leap year in the Persian calendar ?
         * also nasa use this algorithm https://eclipse.gsfc.nasa.gov/SKYCAL/algorithm.js search for 'getLastDayOfPersianMonth' and you can find it
         * @param {*} year
         *
         */

    }, {
        key: 'leap_persian',
        value: function leap_persian(year) {
            return ((year - (year > 0 ? 474 : 473)) % 2820 + 474 + 38) * 682 % 2816 < 682;
        }

        /**
         * @desc Determine Julian day from Persian date
         * @param {*} year
         * @param {*} month
         * @param {*} day
         */

    }, {
        key: 'persian_to_jd',
        value: function persian_to_jd(year, month, day) {
            var epbase = void 0,
                epyear = void 0;

            epbase = year - (year >= 0 ? 474 : 473);
            epyear = 474 + this.ASTRO.mod(epbase, 2820);

            return day + (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) + Math.floor((epyear * 682 - 110) / 2816) + (epyear - 1) * 365 + Math.floor(epbase / 2820) * 1029983 + (this.PERSIAN_EPOCH - 1);
        }

        /**
         * @desc Calculate Persian date from Julian day
         * @param {*} jd
         */

    }, {
        key: 'jd_to_persian',
        value: function jd_to_persian(jd) {
            var year = void 0,
                month = void 0,
                day = void 0,
                depoch = void 0,
                cycle = void 0,
                cyear = void 0,
                ycycle = void 0,
                aux1 = void 0,
                aux2 = void 0,
                yday = void 0;

            jd = Math.floor(jd) + 0.5;

            depoch = jd - this.persian_to_jd(475, 1, 1);
            cycle = Math.floor(depoch / 1029983);
            cyear = this.ASTRO.mod(depoch, 1029983);
            if (cyear === 1029982) {
                ycycle = 2820;
            } else {
                aux1 = Math.floor(cyear / 366);
                aux2 = this.ASTRO.mod(cyear, 366);
                ycycle = Math.floor((2134 * aux1 + 2816 * aux2 + 2815) / 1028522) + aux1 + 1;
            }
            year = ycycle + 2820 * cycle + 474;
            if (year <= 0) {
                year--;
            }
            yday = jd - this.persian_to_jd(year, 1, 1) + 1;
            month = yday <= 186 ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
            day = jd - this.persian_to_jd(year, month, 1) + 1;
            return [year, month, day];
        }

        /**
         *
         * @param {*} weekday
         */

    }, {
        key: 'gWeekDayToPersian',
        value: function gWeekDayToPersian(weekday) {
            if (weekday + 2 === 8) {
                return 1;
            } else if (weekday + 2 === 7) {
                return 7;
            } else {
                return weekday + 2;
            }
        }

        /**
         * @desc updateFromGregorian  --  Update all calendars from Gregorian.
         "Why not Julian date?" you ask.  Because
         starting from Gregorian guarantees we're
         already snapped to an integral second, so
         we don't get roundoff errors in other
         calendars.
         */

    }, {
        key: 'updateFromGregorian',
        value: function updateFromGregorian() {
            var j = void 0,
                year = void 0,
                mon = void 0,
                mday = void 0,
                hour = void 0,
                min = void 0,
                sec = void 0,
                weekday = void 0,
                utime = void 0,
                perscal = void 0;

            year = this.State.gregorian.year;
            mon = this.State.gregorian.month;
            mday = this.State.gregorian.day;
            hour = 0; //this.State.gregorian.hour;
            min = 0; //this.State.gregorian.minute;
            sec = 0; //this.State.gregorian.second;

            this.State.gDate = new Date(year, mon, mday, this.State.gregorian.hour, this.State.gregorian.minute, this.State.gregorian.second, this.State.gregorian.millisecond);

            if (this.parent._utcMode === false) {
                this.State.zone = this.State.gDate.getTimezoneOffset();
            }

            // Added for this algorithms cant parse 2016,13,32 successfully
            this.State.gregorian.year = this.State.gDate.getFullYear();
            this.State.gregorian.month = this.State.gDate.getMonth();
            this.State.gregorian.day = this.State.gDate.getDate();

            //  Update Julian day
            // ---------------------------------------------------------------------------
            j = this.gregorian_to_jd(year, mon + 1, mday) + Math.floor(sec + 60 * (min + 60 * hour) + 0.5) / 86400.0;

            this.State.julianday = j;
            this.State.modifiedjulianday = j - this.JMJD;

            //  Update day of week in Gregorian box
            // ---------------------------------------------------------------------------
            weekday = this.ASTRO.jwday(j);
            // Move to 1 indexed number
            this.State.gregorian.weekday = weekday + 1;

            //  Update leap year status in Gregorian box
            // ---------------------------------------------------------------------------
            this.State.gregorian.leap = this.NormLeap[this.leap_gregorian(year) ? 1 : 0];

            //  Update Julian Calendar
            // ---------------------------------------------------------------------------
            //        julcal = this.jd_to_julian(j);
            //
            //        this.State.juliancalendar.year = julcal[0];
            //        this.State.juliancalendar.month = julcal[1] - 1;
            //        this.State.juliancalendar.day = julcal[2];
            //        this.State.juliancalendar.leap = this.NormLeap[this.leap_julian(julcal[0]) ? 1 : 0];
            weekday = this.ASTRO.jwday(j);
            //        this.State.juliancalendar.weekday = weekday;

            //  Update Persian Calendar
            // ---------------------------------------------------------------------------
            if (this.parent.calendarType == 'persian' && this.parent.leapYearMode == 'algorithmic') {
                perscal = this.jd_to_persian(j);
                this.State.persian.year = perscal[0];
                this.State.persian.month = perscal[1] - 1;
                this.State.persian.day = perscal[2];
                this.State.persian.weekday = this.gWeekDayToPersian(weekday);
                this.State.persian.leap = this.NormLeap[this.leap_persian(perscal[0]) ? 1 : 0];
            }

            //  Update Persian Astronomical Calendar
            // ---------------------------------------------------------------------------
            if (this.parent.calendarType == 'persian' && this.parent.leapYearMode == 'astronomical') {
                perscal = this.jd_to_persiana(j);
                this.State.persianAstro.year = perscal[0];
                this.State.persianAstro.month = perscal[1] - 1;
                this.State.persianAstro.day = perscal[2];
                this.State.persianAstro.weekday = this.gWeekDayToPersian(weekday);
                this.State.persianAstro.leap = this.NormLeap[this.leap_persiana(perscal[0]) ? 1 : 0];
            }
            //  Update Gregorian serial number
            // ---------------------------------------------------------------------------
            if (this.State.gregserial.day !== null) {
                this.State.gregserial.day = j - this.J0000;
            }

            //  Update Unix time()
            // ---------------------------------------------------------------------------
            utime = (j - this.J1970) * (60 * 60 * 24 * 1000);

            this.State.unixtime = Math.round(utime / 1000);
        }

        /**
         * @desc Perform calculation starting with a Gregorian date
         * @param {*} dateArray
         */

    }, {
        key: 'calcGregorian',
        value: function calcGregorian(dateArray) {
            if (dateArray[0] || dateArray[0] === 0) {
                this.State.gregorian.year = dateArray[0];
            }
            if (dateArray[1] || dateArray[1] === 0) {
                this.State.gregorian.month = dateArray[1];
            }
            if (dateArray[2] || dateArray[2] === 0) {
                this.State.gregorian.day = dateArray[2];
            }
            if (dateArray[3] || dateArray[3] === 0) {
                this.State.gregorian.hour = dateArray[3];
            }
            if (dateArray[4] || dateArray[4] === 0) {
                this.State.gregorian.minute = dateArray[4];
            }
            if (dateArray[5] || dateArray[5] === 0) {
                this.State.gregorian.second = dateArray[5];
            }
            if (dateArray[6] || dateArray[6] === 0) {
                this.State.gregorian.millisecond = dateArray[6];
            }
            this.updateFromGregorian();
        }

        /**
         * @desc Perform calculation starting with a Julian date
         */

    }, {
        key: 'calcJulian',
        value: function calcJulian() {
            var j = void 0,
                date = void 0;
            j = this.State.julianday;
            date = this.jd_to_gregorian(j);
            this.State.gregorian.year = date[0];
            this.State.gregorian.month = date[1] - 1;
            this.State.gregorian.day = date[2];
            //        this.State.gregorian.hour = this.pad(time[0], 2, " ");
            //        this.State.gregorian.minute = this.pad(time[1], 2, "0");
            //        this.State.gregorian.second = this.pad(time[2], 2, "0");
            this.updateFromGregorian();
        }

        /**
         * @desc Set Julian date and update all calendars
         * @param {*} j
         */

    }, {
        key: 'setJulian',
        value: function setJulian(j) {
            this.State.julianday = j;
            this.calcJulian();
        }

        /**
         * @desc  Update from Persian calendar
         * @param {*} dateArray
         */

    }, {
        key: 'calcPersian',
        value: function calcPersian(dateArray) {
            if (dateArray[0] || dateArray[0] === 0) {
                this.State.persian.year = dateArray[0];
            }
            if (dateArray[1] || dateArray[1] === 0) {
                this.State.persian.month = dateArray[1];
            }
            if (dateArray[2] || dateArray[2] === 0) {
                this.State.persian.day = dateArray[2];
            }
            if (dateArray[3] || dateArray[3] === 0) {
                this.State.gregorian.hour = dateArray[3];
            }
            if (dateArray[4] || dateArray[4] === 0) {
                this.State.gregorian.minute = dateArray[4];
            }
            if (dateArray[5] || dateArray[5] === 0) {
                this.State.gregorian.second = dateArray[5];
            }
            if (dateArray[6] || dateArray[6] === 0) {
                this.State.gregorian.millisecond = dateArray[6];
            }

            this.setJulian(this.persian_to_jd(this.State.persian.year, this.State.persian.month, this.State.persian.day));
        }

        /**
         * @desc Update from Persian astronomical calendar
         * @param {*} dateArray
         */

    }, {
        key: 'calcPersiana',
        value: function calcPersiana(dateArray) {
            if (dateArray[0] || dateArray[0] === 0) {
                this.State.persianAstro.year = dateArray[0];
            }
            if (dateArray[1] || dateArray[1] === 0) {
                this.State.persianAstro.month = dateArray[1];
            }
            if (dateArray[2] || dateArray[2] === 0) {
                this.State.persianAstro.day = dateArray[2];
            }

            if (dateArray[3] || dateArray[3] === 0) {
                this.State.gregorian.hour = dateArray[3];
            }
            if (dateArray[4] || dateArray[4] === 0) {
                this.State.gregorian.minute = dateArray[4];
            }
            if (dateArray[5] || dateArray[5] === 0) {
                this.State.gregorian.second = dateArray[5];
            }
            if (dateArray[6] || dateArray[6] === 0) {
                this.State.gregorian.millisecond = dateArray[6];
            }
            this.setJulian(this.persiana_to_jd(this.State.persianAstro.year, this.State.persianAstro.month, this.State.persianAstro.day + 0.5));
        }
    }]);

    return Algorithms;
}();

module.exports = Algorithms;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 JavaScript functions for positional astronomy
 by John Walker  --  September, MIM
 http://www.fourmilab.ch/
 This program is in the public domain.
 */

var ASTRO = function () {
    function ASTRO() {
        _classCallCheck(this, ASTRO);

        //  Frequently-used constants
        this.J2000 = 2451545.0; // Julian day of J2000 epoch
        this.JulianCentury = 36525.0; // Days in Julian century
        this.JulianMillennium = this.JulianCentury * 10; // Days in Julian millennium
        //        this.AstronomicalUnit = 149597870.0;           // Astronomical unit in kilometres
        this.TropicalYear = 365.24219878; // Mean solar tropical year

        /*  OBLIQEQ  --  Calculate the obliquity of the ecliptic for a given
         Julian date.  This uses Laskar's tenth-degree
         polynomial fit (J. Laskar, Astronomy and
         Astrophysics, Vol. 157, page 68 [1986]) which is
         accurate to within 0.01 arc second between AD 1000
         and AD 3000, and within a few seconds of arc for
         +/-10000 years around AD 2000.  If we're outside the
         range in which this fit is valid (deep time) we
         simply return the J2000 value of the obliquity, which
         happens to be almost precisely the mean.  */
        this.oterms = [-4680.93, -1.55, 1999.25, -51.38, -249.67, -39.05, 7.12, 27.87, 5.79, 2.45];
        /* Periodic terms for nutation in longiude (delta \Psi) and
         obliquity (delta \Epsilon) as given in table 21.A of
         Meeus, "Astronomical Algorithms", first edition. */
        this.nutArgMult = [0, 0, 0, 0, 1, -2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, -2, 1, 0, 2, 2, 0, 0, 0, 2, 1, 0, 0, 1, 2, 2, -2, -1, 0, 2, 2, -2, 0, 1, 0, 0, -2, 0, 0, 2, 1, 0, 0, -1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 0, -1, 2, 2, 0, 0, -1, 0, 1, 0, 0, 1, 2, 1, -2, 0, 2, 0, 0, 0, 0, -2, 2, 1, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, -2, 0, 1, 2, 2, 0, 0, 0, 2, 0, -2, 0, 0, 2, 0, 0, 0, -1, 2, 1, 0, 2, 0, 0, 0, 2, 0, -1, 0, 1, -2, 2, 0, 2, 2, 0, 1, 0, 0, 1, -2, 0, 1, 0, 1, 0, -1, 0, 0, 1, 0, 0, 2, -2, 0, 2, 0, -1, 2, 1, 2, 0, 1, 2, 2, 0, 1, 0, 2, 2, -2, 1, 1, 0, 0, 0, -1, 0, 2, 2, 2, 0, 0, 2, 1, 2, 0, 1, 0, 0, -2, 0, 2, 2, 2, -2, 0, 1, 2, 1, 2, 0, -2, 0, 1, 2, 0, 0, 0, 1, 0, -1, 1, 0, 0, -2, -1, 0, 2, 1, -2, 0, 0, 0, 1, 0, 0, 2, 2, 1, -2, 0, 2, 0, 1, -2, 1, 0, 2, 1, 0, 0, 1, -2, 0, -1, 0, 1, 0, 0, -2, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, -1, -1, 1, 0, 0, 0, 1, 1, 0, 0, 0, -1, 1, 2, 2, 2, -1, -1, 2, 2, 0, 0, -2, 2, 2, 0, 0, 3, 2, 2, 2, -1, 0, 2, 2];

        this.nutArgCoeff = [-171996, -1742, 92095, 89, /*  0,  0,  0,  0,  1 */
        -13187, -16, 5736, -31, /* -2,  0,  0,  2,  2 */
        -2274, -2, 977, -5, /*  0,  0,  0,  2,  2 */
        2062, 2, -895, 5, /*  0,  0,  0,  0,  2 */
        1426, -34, 54, -1, /*  0,  1,  0,  0,  0 */
        712, 1, -7, 0, /*  0,  0,  1,  0,  0 */
        -517, 12, 224, -6, /* -2,  1,  0,  2,  2 */
        -386, -4, 200, 0, /*  0,  0,  0,  2,  1 */
        -301, 0, 129, -1, /*  0,  0,  1,  2,  2 */
        217, -5, -95, 3, /* -2, -1,  0,  2,  2 */
        -158, 0, 0, 0, /* -2,  0,  1,  0,  0 */
        129, 1, -70, 0, /* -2,  0,  0,  2,  1 */
        123, 0, -53, 0, /*  0,  0, -1,  2,  2 */
        63, 0, 0, 0, /*  2,  0,  0,  0,  0 */
        63, 1, -33, 0, /*  0,  0,  1,  0,  1 */
        -59, 0, 26, 0, /*  2,  0, -1,  2,  2 */
        -58, -1, 32, 0, /*  0,  0, -1,  0,  1 */
        -51, 0, 27, 0, /*  0,  0,  1,  2,  1 */
        48, 0, 0, 0, /* -2,  0,  2,  0,  0 */
        46, 0, -24, 0, /*  0,  0, -2,  2,  1 */
        -38, 0, 16, 0, /*  2,  0,  0,  2,  2 */
        -31, 0, 13, 0, /*  0,  0,  2,  2,  2 */
        29, 0, 0, 0, /*  0,  0,  2,  0,  0 */
        29, 0, -12, 0, /* -2,  0,  1,  2,  2 */
        26, 0, 0, 0, /*  0,  0,  0,  2,  0 */
        -22, 0, 0, 0, /* -2,  0,  0,  2,  0 */
        21, 0, -10, 0, /*  0,  0, -1,  2,  1 */
        17, -1, 0, 0, /*  0,  2,  0,  0,  0 */
        16, 0, -8, 0, /*  2,  0, -1,  0,  1 */
        -16, 1, 7, 0, /* -2,  2,  0,  2,  2 */
        -15, 0, 9, 0, /*  0,  1,  0,  0,  1 */
        -13, 0, 7, 0, /* -2,  0,  1,  0,  1 */
        -12, 0, 6, 0, /*  0, -1,  0,  0,  1 */
        11, 0, 0, 0, /*  0,  0,  2, -2,  0 */
        -10, 0, 5, 0, /*  2,  0, -1,  2,  1 */
        -8, 0, 3, 0, /*  2,  0,  1,  2,  2 */
        7, 0, -3, 0, /*  0,  1,  0,  2,  2 */
        -7, 0, 0, 0, /* -2,  1,  1,  0,  0 */
        -7, 0, 3, 0, /*  0, -1,  0,  2,  2 */
        -7, 0, 3, 0, /*  2,  0,  0,  2,  1 */
        6, 0, 0, 0, /*  2,  0,  1,  0,  0 */
        6, 0, -3, 0, /* -2,  0,  2,  2,  2 */
        6, 0, -3, 0, /* -2,  0,  1,  2,  1 */
        -6, 0, 3, 0, /*  2,  0, -2,  0,  1 */
        -6, 0, 3, 0, /*  2,  0,  0,  0,  1 */
        5, 0, 0, 0, /*  0, -1,  1,  0,  0 */
        -5, 0, 3, 0, /* -2, -1,  0,  2,  1 */
        -5, 0, 3, 0, /* -2,  0,  0,  0,  1 */
        -5, 0, 3, 0, /*  0,  0,  2,  2,  1 */
        4, 0, 0, 0, /* -2,  0,  2,  0,  1 */
        4, 0, 0, 0, /* -2,  1,  0,  2,  1 */
        4, 0, 0, 0, /*  0,  0,  1, -2,  0 */
        -4, 0, 0, 0, /* -1,  0,  1,  0,  0 */
        -4, 0, 0, 0, /* -2,  1,  0,  0,  0 */
        -4, 0, 0, 0, /*  1,  0,  0,  0,  0 */
        3, 0, 0, 0, /*  0,  0,  1,  2,  0 */
        -3, 0, 0, 0, /* -1, -1,  1,  0,  0 */
        -3, 0, 0, 0, /*  0,  1,  1,  0,  0 */
        -3, 0, 0, 0, /*  0, -1,  1,  2,  2 */
        -3, 0, 0, 0, /*  2, -1, -1,  2,  2 */
        -3, 0, 0, 0, /*  0,  0, -2,  2,  2 */
        -3, 0, 0, 0, /*  0,  0,  3,  2,  2 */
        -3, 0, 0, 0 /*  2, -1,  0,  2,  2 */
        ];

        /**
         * @desc Table of observed Delta T values at the beginning of even numbered years from 1620 through 2002.
         * @type Array
         */
        this.deltaTtab = [121, 112, 103, 95, 88, 82, 77, 72, 68, 63, 60, 56, 53, 51, 48, 46, 44, 42, 40, 38, 35, 33, 31, 29, 26, 24, 22, 20, 18, 16, 14, 12, 11, 10, 9, 8, 7, 7, 7, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 14, 13, 13.1, 12.5, 12.2, 12, 12, 12, 12, 12, 12, 11.9, 11.6, 11, 10.2, 9.2, 8.2, 7.1, 6.2, 5.6, 5.4, 5.3, 5.4, 5.6, 5.9, 6.2, 6.5, 6.8, 7.1, 7.3, 7.5, 7.6, 7.7, 7.3, 6.2, 5.2, 2.7, 1.4, -1.2, -2.8, -3.8, -4.8, -5.5, -5.3, -5.6, -5.7, -5.9, -6, -6.3, -6.5, -6.2, -4.7, -2.8, -0.1, 2.6, 5.3, 7.7, 10.4, 13.3, 16, 18.2, 20.2, 21.1, 22.4, 23.5, 23.8, 24.3, 24, 23.9, 23.9, 23.7, 24, 24.3, 25.3, 26.2, 27.3, 28.2, 29.1, 30, 30.7, 31.4, 32.2, 33.1, 34, 35, 36.5, 38.3, 40.2, 42.2, 44.5, 46.5, 48.5, 50.5, 52.2, 53.8, 54.9, 55.8, 56.9, 58.3, 60, 61.6, 63, 65, 66.6];

        /*  EQUINOX  --  Determine the Julian Ephemeris Day of an
         equinox or solstice.  The "which" argument
         selects the item to be computed:
          0   March equinox
         1   June solstice
         2   September equinox
         3   December solstice
          */
        /**
         * @desc Periodic terms to obtain true time
         * @type Array
         */
        this.EquinoxpTerms = [485, 324.96, 1934.136, 203, 337.23, 32964.467, 199, 342.08, 20.186, 182, 27.85, 445267.112, 156, 73.14, 45036.886, 136, 171.52, 22518.443, 77, 222.54, 65928.934, 74, 296.72, 3034.906, 70, 243.58, 9037.513, 58, 119.81, 33718.147, 52, 297.17, 150.678, 50, 21.02, 2281.226, 45, 247.54, 29929.562, 44, 325.15, 31555.956, 29, 60.93, 4443.417, 18, 155.12, 67555.328, 17, 288.79, 4562.452, 16, 198.04, 62894.029, 14, 199.76, 31436.921, 12, 95.39, 14577.848, 12, 287.11, 31931.756, 12, 320.81, 34777.259, 9, 227.73, 1222.114, 8, 15.45, 16859.074];

        this.JDE0tab1000 = [new Array(1721139.29189, 365242.13740, 0.06134, 0.00111, -0.00071), new Array(1721233.25401, 365241.72562, -0.05323, 0.00907, 0.00025), new Array(1721325.70455, 365242.49558, -0.11677, -0.00297, 0.00074), new Array(1721414.39987, 365242.88257, -0.00769, -0.00933, -0.00006)];

        this.JDE0tab2000 = [new Array(2451623.80984, 365242.37404, 0.05169, -0.00411, -0.00057), new Array(2451716.56767, 365241.62603, 0.00325, 0.00888, -0.00030), new Array(2451810.21715, 365242.01767, -0.11575, 0.00337, 0.00078), new Array(2451900.05952, 365242.74049, -0.06223, -0.00823, 0.00032)];
    }

    /**
     *
     * @param Degrees to radians.
     * @return {number}
     */


    _createClass(ASTRO, [{
        key: "dtr",
        value: function dtr(d) {
            return d * Math.PI / 180.0;
        }

        /**
         * @desc Radians to degrees.
         * @param r
         * @return {number}
         */

    }, {
        key: "rtd",
        value: function rtd(r) {
            return r * 180.0 / Math.PI;
        }

        /**
         * @desc Range reduce angle in degrees.
         * @param a
         * @return {number}
         */

    }, {
        key: "fixangle",
        value: function fixangle(a) {
            return a - 360.0 * Math.floor(a / 360.0);
        }

        /**
         * @desc Range reduce angle in radians.
         * @param a
         * @return {number}
         */

    }, {
        key: "fixangr",
        value: function fixangr(a) {
            return a - 2 * Math.PI * Math.floor(a / (2 * Math.PI));
        }

        /**
         * @desc  Sine of an angle in degrees
         * @param d
         * @return {number}
         */

    }, {
        key: "dsin",
        value: function dsin(d) {
            return Math.sin(this.dtr(d));
        }

        /**
         * @desc Cosine of an angle in degrees
         * @param d
         * @return {number}
         */

    }, {
        key: "dcos",
        value: function dcos(d) {
            return Math.cos(this.dtr(d));
        }

        /**
         * @desc Modulus function which works for non-integers.
         * @param a
         * @param b
         * @return {number}
         */

    }, {
        key: "mod",
        value: function mod(a, b) {
            return a - b * Math.floor(a / b);
        }

        /**
         *
         * @param j
         * @return {number}
         */

    }, {
        key: "jwday",
        value: function jwday(j) {
            return this.mod(Math.floor(j + 1.5), 7);
        }

        /**
         *
         * @param jd
         * @return {number|*}
         */

    }, {
        key: "obliqeq",
        value: function obliqeq(jd) {
            var eps, u, v, i;
            v = u = (jd - this.J2000) / (this.JulianCentury * 100);
            eps = 23 + 26 / 60.0 + 21.448 / 3600.0;

            if (Math.abs(u) < 1.0) {
                for (i = 0; i < 10; i++) {
                    eps += this.oterms[i] / 3600.0 * v;
                    v *= u;
                }
            }
            return eps;
        }

        /**
         * @desc  Calculate the nutation in longitude, deltaPsi, and
         obliquity, deltaEpsilon for a given Julian date
         jd.  Results are returned as a two element Array
         giving (deltaPsi, deltaEpsilon) in degrees.
         * @param jd
         * @return Object
         */

    }, {
        key: "nutation",
        value: function nutation(jd) {
            var deltaPsi,
                deltaEpsilon,
                i,
                j,
                t = (jd - 2451545.0) / 36525.0,
                t2,
                t3,
                to10,
                ta = [],
                dp = 0,
                de = 0,
                ang;

            t3 = t * (t2 = t * t);

            /* Calculate angles.  The correspondence between the elements
             of our array and the terms cited in Meeus are:
              ta[0] = D  ta[0] = M  ta[2] = M'  ta[3] = F  ta[4] = \Omega
              */

            ta[0] = this.dtr(297.850363 + 445267.11148 * t - 0.0019142 * t2 + t3 / 189474.0);
            ta[1] = this.dtr(357.52772 + 35999.05034 * t - 0.0001603 * t2 - t3 / 300000.0);
            ta[2] = this.dtr(134.96298 + 477198.867398 * t + 0.0086972 * t2 + t3 / 56250.0);
            ta[3] = this.dtr(93.27191 + 483202.017538 * t - 0.0036825 * t2 + t3 / 327270);
            ta[4] = this.dtr(125.04452 - 1934.136261 * t + 0.0020708 * t2 + t3 / 450000.0);

            /* Range reduce the angles in case the sine and cosine functions
             don't do it as accurately or quickly. */

            for (i = 0; i < 5; i++) {
                ta[i] = this.fixangr(ta[i]);
            }

            to10 = t / 10.0;
            for (i = 0; i < 63; i++) {
                ang = 0;
                for (j = 0; j < 5; j++) {
                    if (this.nutArgMult[i * 5 + j] !== 0) {
                        ang += this.nutArgMult[i * 5 + j] * ta[j];
                    }
                }
                dp += (this.nutArgCoeff[i * 4 + 0] + this.nutArgCoeff[i * 4 + 1] * to10) * Math.sin(ang);
                de += (this.nutArgCoeff[i * 4 + 2] + this.nutArgCoeff[i * 4 + 3] * to10) * Math.cos(ang);
            }

            /* Return the result, converting from ten thousandths of arc
             seconds to radians in the process. */

            deltaPsi = dp / (3600.0 * 10000.0);
            deltaEpsilon = de / (3600.0 * 10000.0);

            return [deltaPsi, deltaEpsilon];
        }

        /**
         * @desc  Determine the difference, in seconds, between
         Dynamical time and Universal time.
         * @param year
         * @return {*}
         */

    }, {
        key: "deltat",
        value: function deltat(year) {
            var dt, f, i, t;

            if (year >= 1620 && year <= 2000) {
                i = Math.floor((year - 1620) / 2);
                f = (year - 1620) / 2 - i;
                /* Fractional part of year */
                dt = this.deltaTtab[i] + (this.deltaTtab[i + 1] - this.deltaTtab[i]) * f;
            } else {
                t = (year - 2000) / 100;
                if (year < 948) {
                    dt = 2177 + 497 * t + 44.1 * t * t;
                } else {
                    dt = 102 + 102 * t + 25.3 * t * t;
                    if (year > 2000 && year < 2100) {
                        dt += 0.37 * (year - 2100);
                    }
                }
            }
            return dt;
        }

        /**
         *
         * @param year
         * @param which
         * @return {*}
         */

    }, {
        key: "equinox",
        value: function equinox(year, which) {
            var deltaL = void 0,
                i = void 0,
                j = void 0,
                JDE0 = void 0,
                JDE = void 0,
                JDE0tab = void 0,
                S = void 0,
                T = void 0,
                W = void 0,
                Y = void 0;
            /*  Initialise terms for mean equinox and solstices.  We
             have two sets: one for years prior to 1000 and a second
             for subsequent years.  */

            if (year < 1000) {
                JDE0tab = this.JDE0tab1000;
                Y = year / 1000;
            } else {
                JDE0tab = this.JDE0tab2000;
                Y = (year - 2000) / 1000;
            }

            JDE0 = JDE0tab[which][0] + JDE0tab[which][1] * Y + JDE0tab[which][2] * Y * Y + JDE0tab[which][3] * Y * Y * Y + JDE0tab[which][4] * Y * Y * Y * Y;
            T = (JDE0 - 2451545.0) / 36525;
            W = 35999.373 * T - 2.47;
            deltaL = 1 + 0.0334 * this.dcos(W) + 0.0007 * this.dcos(2 * W);
            S = 0;
            for (i = j = 0; i < 24; i++) {
                S += this.EquinoxpTerms[j] * this.dcos(this.EquinoxpTerms[j + 1] + this.EquinoxpTerms[j + 2] * T);
                j += 3;
            }
            JDE = JDE0 + S * 0.00001 / deltaL;
            return JDE;
        }

        /**
         * @desc  Position of the Sun.  Please see the comments
         on the return statement at the end of this function
         which describe the array it returns.  We return
         intermediate values because they are useful in a
         variety of other contexts.
         * @param jd
         * @return Object
         */

    }, {
        key: "sunpos",
        value: function sunpos(jd) {
            var T = void 0,
                T2 = void 0,
                L0 = void 0,
                M = void 0,
                e = void 0,
                C = void 0,
                sunLong = void 0,
                sunAnomaly = void 0,
                sunR = void 0,
                Omega = void 0,
                Lambda = void 0,
                epsilon = void 0,
                epsilon0 = void 0,
                Alpha = void 0,
                Delta = void 0,
                AlphaApp = void 0,
                DeltaApp = void 0;

            T = (jd - this.J2000) / this.JulianCentury;
            T2 = T * T;
            L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T2;
            L0 = this.fixangle(L0);
            M = 357.52911 + 35999.05029 * T + -0.0001537 * T2;
            M = this.fixangle(M);
            e = 0.016708634 + -0.000042037 * T + -0.0000001267 * T2;
            C = (1.914602 + -0.004817 * T + -0.000014 * T2) * this.dsin(M) + (0.019993 - 0.000101 * T) * this.dsin(2 * M) + 0.000289 * this.dsin(3 * M);
            sunLong = L0 + C;
            sunAnomaly = M + C;
            sunR = 1.000001018 * (1 - e * e) / (1 + e * this.dcos(sunAnomaly));
            Omega = 125.04 - 1934.136 * T;
            Lambda = sunLong + -0.00569 + -0.00478 * this.dsin(Omega);
            epsilon0 = this.obliqeq(jd);
            epsilon = epsilon0 + 0.00256 * this.dcos(Omega);
            Alpha = this.rtd(Math.atan2(this.dcos(epsilon0) * this.dsin(sunLong), this.dcos(sunLong)));
            Alpha = this.fixangle(Alpha);
            Delta = this.rtd(Math.asin(this.dsin(epsilon0) * this.dsin(sunLong)));
            AlphaApp = this.rtd(Math.atan2(this.dcos(epsilon) * this.dsin(Lambda), this.dcos(Lambda)));
            AlphaApp = this.fixangle(AlphaApp);
            DeltaApp = this.rtd(Math.asin(this.dsin(epsilon) * this.dsin(Lambda)));

            return [//  Angular quantities are expressed in decimal degrees
            L0, //  [0] Geometric mean longitude of the Sun
            M, //  [1] Mean anomaly of the Sun
            e, //  [2] Eccentricity of the Earth's orbit
            C, //  [3] Sun's equation of the Centre
            sunLong, //  [4] Sun's true longitude
            sunAnomaly, //  [5] Sun's true anomaly
            sunR, //  [6] Sun's radius vector in AU
            Lambda, //  [7] Sun's apparent longitude at true equinox of the date
            Alpha, //  [8] Sun's true right ascension
            Delta, //  [9] Sun's true declination
            AlphaApp, // [10] Sun's apparent right ascension
            DeltaApp // [11] Sun's apparent declination
            ];
        }

        /**
         * @desc Compute equation of time for a given moment. Returns the equation of time as a fraction of a day.
         * @param jd
         * @return {number|*}
         */

    }, {
        key: "equationOfTime",
        value: function equationOfTime(jd) {
            var alpha = void 0,
                deltaPsi = void 0,
                E = void 0,
                epsilon = void 0,
                L0 = void 0,
                tau = void 0;
            tau = (jd - this.J2000) / this.JulianMillennium;
            L0 = 280.4664567 + 360007.6982779 * tau + 0.03032028 * tau * tau + tau * tau * tau / 49931 + -(tau * tau * tau * tau / 15300) + -(tau * tau * tau * tau * tau / 2000000);
            L0 = this.fixangle(L0);
            alpha = this.sunpos(jd)[10];
            deltaPsi = this.nutation(jd)[0];
            epsilon = this.obliqeq(jd) + this.nutation(jd)[1];
            E = L0 + -0.0057183 + -alpha + deltaPsi * this.dcos(epsilon);
            E = E - 20.0 * Math.floor(E / 20.0);
            E = E / (24 * 60);
            return E;
        }
    }]);

    return ASTRO;
}();

module.exports = ASTRO;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Constants
 * @module constants
 */

module.exports = {
    durationUnit: {
        year: ['y', 'years', 'year'],
        month: ['M', 'months', 'month'],
        day: ['d', 'days', 'day'],
        hour: ['h', 'hours', 'hour'],
        minute: ['m', 'minutes', 'minute'],
        second: ['s', 'second', 'seconds'],
        millisecond: ['ms', 'milliseconds', 'millisecond'],
        week: ['W', 'w', 'weeks', 'week']
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helpers = __webpack_require__(0);
var normalizeDuration = new Helpers().normalizeDuration;
var absRound = new Helpers().absRound;
var absFloor = new Helpers().absFloor;
/**
 * Duration object constructor
 * @param duration
 * @class Duration
 * @constructor
 */

var Duration = function () {
    function Duration(key, value) {
        _classCallCheck(this, Duration);

        var duration = {},
            data = this._data = {},
            milliseconds = 0,
            normalizedUnit = normalizeDuration(key, value),
            unit = normalizedUnit.unit;
        duration[unit] = normalizedUnit.value;
        milliseconds = duration.milliseconds || duration.millisecond || duration.ms || 0;

        var years = duration.years || duration.year || duration.y || 0,
            months = duration.months || duration.month || duration.M || 0,
            weeks = duration.weeks || duration.w || duration.week || 0,
            days = duration.days || duration.d || duration.day || 0,
            hours = duration.hours || duration.hour || duration.h || 0,
            minutes = duration.minutes || duration.minute || duration.m || 0,
            seconds = duration.seconds || duration.second || duration.s || 0;
        // representation for dateAddRemove
        this._milliseconds = milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 36e5;
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = days + weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = months + years * 12;
        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;
        seconds += absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        minutes += absRound(seconds / 60);
        data.minutes = minutes % 60;
        hours += absRound(minutes / 60);
        data.hours = hours % 24;
        days += absRound(hours / 24);
        days += weeks * 7;
        data.days = days % 30;
        months += absRound(days / 30);
        data.months = months % 12;
        years += absRound(months / 12);
        data.years = years;
        return this;
    }

    _createClass(Duration, [{
        key: 'valueOf',
        value: function valueOf() {
            return this._milliseconds + this._days * 864e5 + this._months * 2592e6;
        }
    }]);

    return Duration;
}();

module.exports = Duration;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Constants
 * @module constants
 */

module.exports = {
    gregorian: {
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    },
    persian: {
        months: ['Farvardin', 'Ordibehesht', 'Khordad', 'Tir', 'Mordad', 'Shahrivar', 'Mehr', 'Aban', 'Azar', 'Dey', 'Bahman', 'Esfand'],
        monthsShort: ['Far', 'Ord', 'Kho', 'Tir', 'Mor', 'Sha', 'Meh', 'Aba', 'Aza', 'Dey', 'Bah', 'Esf'],
        weekdays: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        weekdaysShort: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        weekdaysMin: ['Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr'],
        persianDaysName: ['Urmazd', 'Bahman', 'Ordibehesht', 'Shahrivar', 'Sepandarmaz', 'Khurdad', 'Amordad', 'Dey-be-azar', 'Azar', 'Aban', 'Khorshid', 'Mah', 'Tir', 'Gush', 'Dey-be-mehr', 'Mehr', 'Sorush', 'Rashn', 'Farvardin', 'Bahram', 'Ram', 'Bad', 'Dey-be-din', 'Din', 'Ord', 'Ashtad', 'Asman', 'Zamyad', 'Mantre-sepand', 'Anaram', 'Ziadi']
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Constants
 * @module constants
 */

module.exports = {
    gregorian: {
        months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        weekdays: '\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647'.split('_'),
        weekdaysShort: '\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647'.split('_'),
        weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_')
    },
    persian: {
        months: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        monthsShort: ['فرو', 'ارد', 'خرد', 'تیر', 'مرد', 'شهر', 'مهر', 'آبا', 'آذر', 'دی', 'بهم', 'اسف'],
        weekdays: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهار شنبه', '\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647', 'جمعه'],
        weekdaysShort: ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'],
        weekdaysMin: ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'],
        persianDaysName: ['اورمزد', 'بهمن', 'اوردیبهشت', 'شهریور', 'سپندارمذ', 'خورداد', 'امرداد', 'دی به آذز', 'آذز', 'آبان', 'خورشید', 'ماه', 'تیر', 'گوش', 'دی به مهر', 'مهر', 'سروش', 'رشن', 'فروردین', 'بهرام', 'رام', 'باد', 'دی به دین', 'دین', 'ارد', 'اشتاد', 'آسمان', 'زامیاد', 'مانتره سپند', 'انارام', 'زیادی']
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PersianDateClass = __webpack_require__(1);
PersianDateClass.calendarType = 'persian';
PersianDateClass.leapYearMode = 'astronomical';
PersianDateClass.localType = 'fa';
module.exports = PersianDateClass;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Container = function Container() {
    _classCallCheck(this, Container);

    this.isInvalidDate = null;

    this.gDate = null;
    /**
     *
     * @type {number}
     */
    this.modifiedjulianday = 0;

    /**
     *
     * @type {number}
     */
    this.julianday = 0;

    /**
     *
     * @type {{day: number}}
     */
    this.gregserial = {
        day: 0
    };

    this.zone = 0;

    /**
     *
     * @type {{year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number, weekday: number, unix: number, leap: number}}
     */
    this.gregorian = {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        weekday: 0,
        unix: 0,
        leap: 0
    };

    /**
     *
     * @type {{year: number, month: number, day: number, leap: number, weekday: number}}
     */
    this.juliancalendar = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
    };

    /**
     *
     * @type {{year: number, month: number, day: number, leap: number, weekday: number}}
     */
    this.islamic = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
    };

    /**
     *
     * @type {{year: number, month: number, day: number, leap: number, weekday: number}}
     */
    this.persianAlgo = this.persian = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
    };

    /**
     *
     * @type {{year: number, month: number, day: number, leap: number, weekday: number}}
     */
    this.persianAstro = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
    };

    /**
     *
     * @type {{year: number, week: number, day: number}}
     */
    this.isoweek = {
        year: 0,
        week: 0,
        day: 0
    };

    /**
     *
     * @type {{year: number, day: number}}
     */
    this.isoday = {
        year: 0,
        day: 0
    };
};

module.exports = Container;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    /**
     * @param input
     * @returns {boolean}
     */
    isArray: function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    },


    /**
     *
     * @param input
     * @returns {boolean}
     */
    isNumber: function isNumber(input) {
        return typeof input === 'number';
    },


    /**
     *
     * @param input
     * @returns {boolean}
     */
    isDate: function isDate(input) {
        return input instanceof Date;
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  /**
   * @param input
   * @returns {boolean}
   */
  validateInputArray: function validateInputArray(input) {
    var out = true;
    // Check month
    if (input[1] < 1 || input[1] > 12) {
      out = false;
    }
    // Check date
    if (input[2] < 1 || input[1] > 31) {
      out = false;
    }
    // Check hour 
    if (input[3] < 0 || input[3] > 24) {
      out = false;
    }
    // Check minute 
    if (input[4] < 0 || input[4] > 60) {
      out = false;
    }
    // Check second 
    if (input[5] < 0 || input[5] > 60) {
      out = false;
    }
    return out;
  }
};

/***/ })
/******/ ]);
});
/*
** persian-datepicker - v1.2.0
** Reza Babakhani <babakhani.reza@gmail.com>
** http://babakhani.github.io/PersianWebToolkit/docs/datepicker
** Under MIT license 
*/ 

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.persianDatepicker=t():e.persianDatepicker=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,i){"use strict";var n={debounce:function(e,t,i){var n;return function(){var a=this,o=arguments,s=function(){n=null,i||e.apply(a,o)},r=i&&!n;clearTimeout(n),n=setTimeout(s,t),r&&e.apply(a,o)}},log:function(e){console.log(e)},isMobile:function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}(),debug:function(e,t){window.persianDatepickerDebug&&(e.constructor.name?console.log("Debug: "+e.constructor.name+" : "+t):console.log("Debug: "+t))},delay:function(e,t){clearTimeout(window.datepickerTimer),window.datepickerTimer=setTimeout(e,t)}};e.exports=n},function(e,t,i){"use strict";e.exports='\n<div id="plotId" class="datepicker-plot-area {{cssClass}}">\n    {{#navigator.enabled}}\n        <div data-navigator class="datepicker-navigator">\n            <div class="pwt-btn pwt-btn-next">{{navigator.text.btnNextText}}</div>\n            <div class="pwt-btn pwt-btn-switch">{{navigator.switch.text}}</div>\n            <div class="pwt-btn pwt-btn-prev">{{navigator.text.btnPrevText}}</div>\n        </div>\n    {{/navigator.enabled}}\n    <div class="datepicker-grid-view" >\n    {{#days.enabled}}\n        {{#days.viewMode}}\n        <div class="datepicker-day-view" >    \n            <div class="month-grid-box">\n                <div class="header">\n                    <div class="title"></div>\n                    <div class="header-row">\n                        {{#weekdays.list}}\n                            <div class="header-row-cell">{{.}}</div>\n                        {{/weekdays.list}}\n                    </div>\n                </div>    \n                <table cellspacing="0" class="table-days">\n                    <tbody>\n                        {{#days.list}}\n                           \n                            <tr>\n                                {{#.}}\n                                    {{#enabled}}\n                                        <td data-date="{{dataDate}}" data-unix="{{dataUnix}}" >\n                                            <span  class="{{#otherMonth}}other-month{{/otherMonth}}">{{title}}</span>\n                                            {{#altCalendarShowHint}}\n                                            <i  class="alter-calendar-day">{{alterCalTitle}}</i>\n                                            {{/altCalendarShowHint}}\n                                        </td>\n                                    {{/enabled}}\n                                    {{^enabled}}\n                                        <td data-date="{{dataDate}}" data-unix="{{dataUnix}}" class="disabled">\n                                            <span class="{{#otherMonth}}other-month{{/otherMonth}}">{{title}}</span>\n                                            {{#altCalendarShowHint}}\n                                            <i  class="alter-calendar-day">{{alterCalTitle}}</i>\n                                            {{/altCalendarShowHint}}\n                                        </td>\n                                    {{/enabled}}\n                                    \n                                {{/.}}\n                            </tr>\n                        {{/days.list}}\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        {{/days.viewMode}}\n    {{/days.enabled}}\n    \n    {{#month.enabled}}\n        {{#month.viewMode}}\n            <div class="datepicker-month-view">\n                {{#month.list}}\n                    {{#enabled}}               \n                        <div data-year="{{year}}" data-month="{{dataMonth}}" class="month-item {{#selected}}selected{{/selected}}">{{title}}</small></div>\n                    {{/enabled}}\n                    {{^enabled}}               \n                        <div data-year="{{year}}"data-month="{{dataMonth}}" class="month-item month-item-disable {{#selected}}selected{{/selected}}">{{title}}</small></div>\n                    {{/enabled}}\n                {{/month.list}}\n            </div>\n        {{/month.viewMode}}\n    {{/month.enabled}}\n    \n    {{#year.enabled }}\n        {{#year.viewMode }}\n            <div class="datepicker-year-view" >\n                {{#year.list}}\n                    {{#enabled}}\n                        <div data-year="{{dataYear}}" class="year-item {{#selected}}selected{{/selected}}">{{title}}</div>\n                    {{/enabled}}\n                    {{^enabled}}\n                        <div data-year="{{dataYear}}" class="year-item year-item-disable {{#selected}}selected{{/selected}}">{{title}}</div>\n                    {{/enabled}}                    \n                {{/year.list}}\n            </div>\n        {{/year.viewMode }}\n    {{/year.enabled }}\n    \n    </div>\n    {{#time}}\n    {{#enabled}}\n    <div class="datepicker-time-view">\n        {{#hour.enabled}}\n            <div class="hour time-segment" data-time-key="hour">\n                <div class="up-btn" data-time-key="hour">▲</div>\n                <input disabled value="{{hour.title}}" type="text" placeholder="hour" class="hour-input">\n                <div class="down-btn" data-time-key="hour">▼</div>                    \n            </div>       \n            <div class="divider">\n                <span>:</span>\n            </div>\n        {{/hour.enabled}}\n        {{#minute.enabled}}\n            <div class="minute time-segment" data-time-key="minute" >\n                <div class="up-btn" data-time-key="minute">▲</div>\n                <input disabled value="{{minute.title}}" type="text" placeholder="minute" class="minute-input">\n                <div class="down-btn" data-time-key="minute">▼</div>\n            </div>        \n            <div class="divider second-divider">\n                <span>:</span>\n            </div>\n        {{/minute.enabled}}\n        {{#second.enabled}}\n            <div class="second time-segment" data-time-key="second"  >\n                <div class="up-btn" data-time-key="second" >▲</div>\n                <input disabled value="{{second.title}}"  type="text" placeholder="second" class="second-input">\n                <div class="down-btn" data-time-key="second" >▼</div>\n            </div>\n            <div class="divider meridian-divider"></div>\n            <div class="divider meridian-divider"></div>\n        {{/second.enabled}}\n        {{#meridian.enabled}}\n            <div class="meridian time-segment" data-time-key="meridian" >\n                <div class="up-btn" data-time-key="meridian">▲</div>\n                <input disabled value="{{meridian.title}}" type="text" class="meridian-input">\n                <div class="down-btn" data-time-key="meridian">▼</div>\n            </div>\n        {{/meridian.enabled}}\n    </div>\n    {{/enabled}}\n    {{/time}}\n    \n    {{#toolbox}}\n    {{#enabled}}\n    <div class="toolbox">\n        {{#toolbox.submitButton.enabled}}\n            <div class="pwt-btn-submit">{{submitButtonText}}</div>\n        {{/toolbox.submitButton.enabled}}        \n        {{#toolbox.todayButton.enabled}}\n            <div class="pwt-btn-today">{{todayButtonText}}</div>\n        {{/toolbox.todayButton.enabled}}        \n        {{#toolbox.calendarSwitch.enabled}}\n            <div class="pwt-btn-calendar">{{calendarSwitchText}}</div>\n        {{/toolbox.calendarSwitch.enabled}}\n    </div>\n    {{/enabled}}\n    {{^enabled}}\n        {{#onlyTimePicker}}\n        <div class="toolbox">\n            <div class="pwt-btn-submit">{{submitButtonText}}</div>\n        </div>\n        {{/onlyTimePicker}}\n    {{/enabled}}\n    {{/toolbox}}\n</div>\n'},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=i(11),s=i(12),r=i(13),l=i(6),d=i(3),c=i(7),u=i(8),h=i(10),m=function(){function e(t,i){return n(this,e),this.components(t,i)}return a(e,[{key:"components",value:function(e,t){return this.initialUnix=null,this.inputElement=e,this.options=new u(t,this),this.PersianDate=new h(this),this.state=new o(this),this.api=new d(this),this.input=new l(this,e),this.view=new r(this),this.toolbox=new s(this),this.updateInput=function(e){this.input.update(e)},this.state.setViewDateTime("unix",this.input.getOnInitState()),this.state.setSelectedDateTime("unix",this.input.getOnInitState()),this.view.render(),this.navigator=new c(this),this.api}}]),e}();e.exports=m},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=function(){function e(t){n(this,e),this.model=t}return a(e,[{key:"show",value:function(){return this.model.view.show(),this.model.options.onShow(this.model),this.model}},{key:"getState",value:function(){return this.model.state}},{key:"hide",value:function(){return this.model.view.hide(),this.model.options.onHide(this.model),this.model}},{key:"toggle",value:function(){return this.model.view.toggle(),this.model.options.onToggle(this.model),this.model}},{key:"destroy",value:function(){this.model&&(this.model.view.destroy(),this.model.options.onDestroy(this.model),delete this.model)}},{key:"setDate",value:function(e){return this.model.state.setSelectedDateTime("unix",e),this.model.state.setViewDateTime("unix",e),this.model.state.setSelectedDateTime("unix",e),this.model.view.render(this.view),this.model.options.onSet(e),this.model}},{key:"options",get:function(){return this.model.options},set:function(e){var t=$.extend(!0,this.model.options,e);this.model.view.destroy(),this.model.components(this.model.inputElement,t)}}]),e}();e.exports=o},function(e,t,i){"use strict";var n=i(0),a={calendarType:"persian",calendar:{persian:{locale:"fa",showHint:!1,leapYearMode:"algorithmic"},gregorian:{locale:"en",showHint:!1}},responsive:!0,inline:!1,initialValue:!0,initialValueType:"gregorian",persianDigit:!0,viewMode:"day",format:"LLLL",formatter:function(e){var t=this;return this.model.PersianDate.date(e).format(t.format)},altField:!1,altFormat:"unix",altFieldFormatter:function(e){var t=this,i=t.altFormat.toLowerCase(),n=void 0;return"gregorian"===i||"g"===i?new Date(e):"unix"===i||"u"===i?e:(n=this.model.PersianDate.date(e),n.format(t.altFormat))},minDate:null,maxDate:null,navigator:{enabled:!0,scroll:{enabled:!0},text:{btnNextText:"<",btnPrevText:">"},onNext:function(e){n.debug(e,"Event: onNext")},onPrev:function(e){n.debug(e,"Event: onPrev")},onSwitch:function(e){n.debug(e,"dayPicker Event: onSwitch")}},toolbox:{enabled:!0,text:{btnToday:"امروز"},submitButton:{enabled:n.isMobile,text:{fa:"تایید",en:"submit"},onSubmit:function(e){n.debug(e,"dayPicker Event: onSubmit")}},todayButton:{enabled:!0,text:{fa:"امروز",en:"today"},onToday:function(e){n.debug(e,"dayPicker Event: onToday")}},calendarSwitch:{enabled:!0,format:"MMMM",onSwitch:function(e){n.debug(e,"dayPicker Event: onSwitch")}},onToday:function(e){n.debug(e,"dayPicker Event: onToday")}},onlyTimePicker:!1,onlySelectOnDate:!0,checkDate:function(){return!0},checkMonth:function(){return!0},checkYear:function(){return!0},timePicker:{enabled:!1,step:1,hour:{enabled:!0,step:null},minute:{enabled:!0,step:null},second:{enabled:!0,step:null},meridian:{enabled:!1}},dayPicker:{enabled:!0,titleFormat:"YYYY MMMM",titleFormatter:function(e,t){return this.model.PersianDate.date([e,t]).format(this.model.options.dayPicker.titleFormat)},onSelect:function(e){n.debug(this,"dayPicker Event: onSelect : "+e)}},monthPicker:{enabled:!0,titleFormat:"YYYY",titleFormatter:function(e){return this.model.PersianDate.date(e).format(this.model.options.monthPicker.titleFormat)},onSelect:function(e){n.debug(this,"monthPicker Event: onSelect : "+e)}},yearPicker:{enabled:!0,titleFormat:"YYYY",titleFormatter:function(e){var t=12*parseInt(e/12,10),i=this.model.PersianDate.date([t]),n=this.model.PersianDate.date([t+11]);return i.format(this.model.options.yearPicker.titleFormat)+"-"+n.format(this.model.options.yearPicker.titleFormat)},onSelect:function(e){n.debug(this,"yearPicker Event: onSelect : "+e)}},onSelect:function(e){n.debug(this,"datepicker Event: onSelect : "+e)},onSet:function(e){n.debug(this,"datepicker Event: onSet : "+e)},position:"auto",onShow:function(e){n.debug(e,"Event: onShow ")},onHide:function(e){n.debug(e,"Event: onHide ")},onToggle:function(e){n.debug(e,"Event: onToggle ")},onDestroy:function(e){n.debug(e,"Event: onDestroy ")},autoClose:!1,template:null,observer:!1,inputDelay:800};e.exports=a},function(e,t,i){"use strict";var n=i(2);!function(e){e.fn.persianDatepicker=e.fn.pDatepicker=function(t){var i=Array.prototype.slice.call(arguments),a=null,o=this;return this||e.error("Invalid selector"),e(this).each(function(){var s=[],r=i.concat(s),l=e(this).data("datepicker"),d=null;l&&"string"==typeof r[0]?(d=r[0],a=l[d](r[0])):o.pDatePicker=new n(this,t)}),e(this).data("datepicker",o.pDatePicker),o.pDatePicker}}(jQuery)},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=i(0),s=i(9),r=function(){function e(t,i){return n(this,e),this.model=t,this._firstUpdate=!0,this.elem=i,this.model.options.observer&&this.observe(),this.addInitialClass(),this.initialUnix=null,0==this.model.options.inline&&this._attachInputElementEvents(),this}return a(e,[{key:"addInitialClass",value:function(){$(this.elem).addClass("pwt-datepicker-input-element")}},{key:"parseInput",value:function(e){var t=new s,i=this;if(void 0!==t.parse(e)){var n=this.model.PersianDate.date(t.parse(e)).valueOf();i.model.state.setSelectedDateTime("unix",n),i.model.state.setViewDateTime("unix",n),i.model.view.render()}}},{key:"observe",value:function(){function e(e){t.parseInput(e.val())}var t=this;$(t.elem).bind("paste",function(e){o.delay(function(){t.parseInput(e.target.value)},60)});var i=void 0,n=t.model.options.inputDelay,a=!1,s=[17,91];$(document).keydown(function(e){$.inArray(e.keyCode,s)>0&&(a=!0)}).keyup(function(e){$.inArray(e.keyCode,s)>0&&(a=!1)}),$(t.elem).bind("keyup",function(t){var o=$(this),r=!1;(8===t.keyCode||t.keyCode<105&&t.keyCode>96||t.keyCode<58&&t.keyCode>47||a&&(86==t.keyCode||$.inArray(t.keyCode,s)>0))&&(r=!0),r&&(clearTimeout(i),i=setTimeout(function(){e(o)},n))}),$(t.elem).on("keydown",function(){clearTimeout(i)})}},{key:"_attachInputElementEvents",value:function(){var e=this,t=function t(i){$(i.target).is(e.elem)||$(i.target).is(e.model.view.$container)||0!=$(i.target).closest("#"+e.model.view.$container.attr("id")).length||$(i.target).is($(e.elem).children())||(e.model.api.hide(),$("body").unbind("click",t))};$(this.elem).on("focus click",o.debounce(function(i){return e.model.api.show(),!1===e.model.state.ui.isInline&&$("body").unbind("click",t).bind("click",t),o.isMobile&&$(this).blur(),i.stopPropagation(),!1},200)),$(this.elem).on("keydown",o.debounce(function(t){if(9===t.which)return e.model.api.hide(),!1},200))}},{key:"getInputPosition",value:function(){return $(this.elem).offset()}},{key:"getInputSize",value:function(){return{width:$(this.elem).outerWidth(),height:$(this.elem).outerHeight()}}},{key:"_updateAltField",value:function(e){var t=this.model.options.altFieldFormatter(e);$(this.model.options.altField).val(t)}},{key:"_updateInputField",value:function(e){var t=this.model.options.formatter(e);$(this.elem).val()!=t&&$(this.elem).val(t)}},{key:"update",value:function(e){0==this.model.options.initialValue&&this._firstUpdate?this._firstUpdate=!1:(this._updateInputField(e),this._updateAltField(e))}},{key:"getOnInitState",value:function(){var e=null,t=$(this.elem),i=void 0;if((i="INPUT"===t[0].nodeName?t[0].getAttribute("value"):t.data("date"))&&i.match("^([0-1][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?$")){var n=i.split(":"),a=new Date;a.setHours(n[0]),a.setMinutes(n[1]),n[2]?a.setSeconds(n[2]):a.setSeconds(0),this.initialUnix=a.valueOf()}else{if("persian"===this.model.options.initialValueType&&i){var o=new s,r=new persianDate(o.parse(i)).valueOf();e=new Date(r).valueOf()}else"unix"===this.model.options.initialValueType&&i?e=parseInt(i):i&&(e=new Date(i).valueOf());this.initialUnix=e&&"undefined"!=e?e:(new Date).valueOf()}return this.initialUnix}}]),e}();e.exports=r},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=i(14),s=function(){function e(t){return n(this,e),this.model=t,this.liveAttach(),this._attachEvents(),this}return a(e,[{key:"liveAttach",value:function(){if(this.model.options.navigator.scroll.enabled){var e=this,t=$("#"+e.model.view.id+" .datepicker-grid-view")[0];o(t).wheel(function(t,i){i>0?e.model.state.navigate("next"):e.model.state.navigate("prev"),e.model.view.render(),t.preventDefault()}),this.model.options.timePicker.enabled&&$("#"+e.model.view.id+" .time-segment").each(function(){o(this).wheel(function(t,i){var n=$(t.target),a=n.data("time-key")?n.data("time-key"):n.parents("[data-time-key]").data("time-key");a&&(i>0?e.timeUp(a):e.timeDown(a)),e.model.view.render(),t.preventDefault()})})}}},{key:"timeUp",value:function(e){if(void 0!=this.model.options.timePicker[e]){var t=void 0,i=void 0,n=this;"meridian"==e?(t=12,i="PM"==this.model.state.view.meridian?this.model.PersianDate.date(this.model.state.selected.unixDate).add("hour",t).valueOf():this.model.PersianDate.date(this.model.state.selected.unixDate).subtract("hour",t).valueOf(),this.model.state.meridianToggle()):(t=this.model.options.timePicker[e].step,i=this.model.PersianDate.date(this.model.state.selected.unixDate).add(e,t).valueOf()),this.model.state.setViewDateTime("unix",i),this.model.state.setSelectedDateTime("unix",i),this.model.view.renderTimePartial(),clearTimeout(this.scrollDelayTimeDown),this.scrollDelayTimeUp=setTimeout(function(){n.model.view.markSelectedDay()},300)}}},{key:"timeDown",value:function(e){if(void 0!=this.model.options.timePicker[e]){var t=void 0,i=void 0,n=this;"meridian"==e?(t=12,i="AM"==this.model.state.view.meridian?this.model.PersianDate.date(this.model.state.selected.unixDate).add("hour",t).valueOf():this.model.PersianDate.date(this.model.state.selected.unixDate).subtract("hour",t).valueOf(),this.model.state.meridianToggle()):(t=this.model.options.timePicker[e].step,i=this.model.PersianDate.date(this.model.state.selected.unixDate).subtract(e,t).valueOf()),this.model.state.setViewDateTime("unix",i),this.model.state.setSelectedDateTime("unix",i),this.model.view.renderTimePartial(),clearTimeout(this.scrollDelayTimeDown),this.scrollDelayTimeDown=setTimeout(function(){n.model.view.markSelectedDay()},300)}}},{key:"_attachEvents",value:function(){var e=this;this.model.options.navigator.enabled&&$(document).on("click","#"+e.model.view.id+" .pwt-btn",function(){$(this).is(".pwt-btn-next")?(e.model.state.navigate("next"),e.model.view.render(),e.model.options.navigator.onNext(e.model)):$(this).is(".pwt-btn-switch")?(e.model.state.switchViewMode(),e.model.view.render(),e.model.options.navigator.onSwitch(e.model)):$(this).is(".pwt-btn-prev")&&(e.model.state.navigate("prev"),e.model.view.render(),e.model.options.navigator.onPrev(e.model))}),this.model.options.timePicker.enabled&&($(document).on("click","#"+e.model.view.id+" .up-btn",function(){var t=$(this).data("time-key");e.timeUp(t),e.model.options.onSelect(e.model.state.selected.unixDate)}),$(document).on("click","#"+e.model.view.id+" .down-btn",function(){var t=$(this).data("time-key");e.timeDown(t),e.model.options.onSelect(e.model.state.selected.unixDate)})),this.model.options.dayPicker.enabled&&$(document).on("click","#"+e.model.view.id+" .datepicker-day-view td:not(.disabled)",function(){var t=$(this).data("unix"),i=void 0;e.model.state.setSelectedDateTime("unix",t),i=e.model.state.selected.month!==e.model.state.view.month,e.model.state.setViewDateTime("unix",e.model.state.selected.unixDate),e.model.options.autoClose&&(e.model.view.hide(),e.model.options.onHide(e)),i?e.model.view.render():e.model.view.markSelectedDay(),e.model.options.dayPicker.onSelect(t),e.model.options.onSelect(t)}),this.model.options.monthPicker.enabled&&$(document).on("click","#"+e.model.view.id+" .datepicker-month-view .month-item:not(.month-item-disable)",function(){var t=$(this).data("month"),i=$(this).data("year");e.model.state.switchViewModeTo("day"),e.model.options.onlySelectOnDate||(e.model.state.setSelectedDateTime("year",i),e.model.state.setSelectedDateTime("month",t),e.model.options.autoClose&&(e.model.view.hide(),e.model.options.onHide(e))),e.model.state.setViewDateTime("month",t),e.model.view.render(),e.model.options.monthPicker.onSelect(t),e.model.options.onSelect(e.model.state.selected.unixDate)}),this.model.options.yearPicker.enabled&&$(document).on("click","#"+e.model.view.id+" .datepicker-year-view .year-item:not(.year-item-disable)",function(){var t=$(this).data("year");e.model.state.switchViewModeTo("month"),e.model.options.onlySelectOnDate||(e.model.state.setSelectedDateTime("year",t),e.model.options.autoClose&&(e.model.view.hide(),e.model.options.onHide(e))),e.model.state.setViewDateTime("year",t),e.model.view.render(),e.model.options.yearPicker.onSelect(t),e.model.options.onSelect(e.model.state.selected.unixDate)})}}]),e}();e.exports=s},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=i(4),s=i(1),r=function(){function e(t,i){return n(this,e),this.model=i,this._compatibility($.extend(!0,this,o,t))}return a(e,[{key:"_compatibility",value:function(e){e.inline&&(e.toolbox.submitButton.enabled=!1),e.template||(e.template=s),persianDate.toCalendar(e.calendarType),persianDate.toLocale(e.calendar[e.calendarType].locale),e.onlyTimePicker&&(e.dayPicker.enabled=!1,e.monthPicker.enabled=!1,e.yearPicker.enabled=!1,e.navigator.enabled=!1,e.toolbox.enabled=!1,e.timePicker.enabled=!0),null===e.timePicker.hour.step&&(e.timePicker.hour.step=e.timePicker.step),null===e.timePicker.minute.step&&(e.timePicker.minute.step=e.timePicker.step),null===e.timePicker.second.step&&(e.timePicker.second.step=e.timePicker.step),!1===e.dayPicker.enabled&&(e.onlySelectOnDate=!1),e._viewModeList=[],e.dayPicker.enabled&&e._viewModeList.push("day"),e.monthPicker.enabled&&e._viewModeList.push("month"),e.yearPicker.enabled&&e._viewModeList.push("year")}}]),e}();e.exports=r},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=function(){function e(){n(this,e),this.pattern={iso:/^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\\.[0-9]+)?(Z)?$/g,jalali:/^[1-4]\d{3}(\/|-|\.)((0?[1-6](\/|-|\.)((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))(\/|-|\.)(30|([1-2][0-9])|(0?[1-9]))))$/g}}return a(e,[{key:"parse",value:function(e){var t=this,i=new RegExp(t.pattern.iso),n=new RegExp(t.pattern.jalali);return String.prototype.toEnglishDigits=function(){var e="۰".charCodeAt(0);return this.replace(/[۰-۹]/g,function(t){return t.charCodeAt(0)-e})},e=e.toEnglishDigits(),n.test(e)?e.split(/\/|-|\,|\./).map(Number):i.test(e)?e.split(/\/|-|\,|\:|\T|\Z/g).map(Number):void 0}}]),e}();e.exports=o},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=function(){function e(t){return n(this,e),this.model=t,this.model.options.calendar_=this.model.options.calendarType,this.model.options.locale_=this.model.options.calendar[this.model.options.calendarType].locale,this}return a(e,[{key:"date",value:function(e){window.inspdCount||0===window.inspdCount?window.inspdCount++:window.inspdCount=0;var t=this,i=void 0,n=void 0;return n=persianDate.toCalendar(t.model.options.calendar_),this.model.options.calendar[this.model.options.calendarType].leapYearMode&&n.toLeapYearMode(this.model.options.calendar[this.model.options.calendarType].leapYearMode),i=new n(e),i.toLocale(t.model.options.locale_)}}]),e}();e.exports=o},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=function(){function e(t){return n(this,e),this.model=t,this.filetredDate=this.model.options.minDate||this.model.options.maxDate,this.viewModeList=this.model.options._viewModeList,this.viewMode=this.viewModeList.indexOf(t.options.viewMode)>0?t.options.viewMode:this.viewModeList[0],this.viewModeIndex=this.viewModeList.indexOf(t.options.viewMode)>0?this.viewModeList.indexOf(t.options.viewMode):0,this.filterDate={start:{year:0,month:0,date:0,hour:0,minute:0,second:0,unixDate:0},end:{year:0,month:0,date:0,hour:0,minute:0,second:0,unixDate:0}},this.view={year:0,month:0,date:0,hour:0,minute:0,second:0,unixDate:0,dateObject:null,meridian:"AM"},this.selected={year:0,month:0,date:0,hour:0,hour12:0,minute:0,second:0,unixDate:0,dateObject:null},this.ui={isOpen:!1,isInline:this.model.options.inline},this._setFilterDate(this.model.options.minDate,this.model.options.maxDate),this}return a(e,[{key:"_setFilterDate",value:function(e,t){var i=this;e||(e=-2e15),t||(t=2e15);var n=i.model.PersianDate.date(e);i.filterDate.start.unixDate=e,i.filterDate.start.hour=n.hour(),i.filterDate.start.minute=n.minute(),i.filterDate.start.second=n.second(),i.filterDate.start.month=n.month(),i.filterDate.start.date=n.date(),i.filterDate.start.year=n.year();var a=i.model.PersianDate.date(t);i.filterDate.end.unixDate=t,i.filterDate.end.hour=a.hour(),i.filterDate.end.minute=a.minute(),i.filterDate.end.second=a.second(),i.filterDate.end.month=a.month(),i.filterDate.end.date=a.date(),i.filterDate.end.year=a.year()}},{key:"navigate",value:function(e){if("next"==e){if("year"==this.viewMode&&this.setViewDateTime("year",this.view.year+12),"month"==this.viewMode){var t=this.view.year+1;0===t&&(t=1),this.setViewDateTime("year",t)}if("day"==this.viewMode){var i=this.view.year+1;0===i&&(i=1),this.view.month+1==13?(this.setViewDateTime("year",i),this.setViewDateTime("month",1)):this.setViewDateTime("month",this.view.month+1)}}else{if("year"==this.viewMode&&this.setViewDateTime("year",this.view.year-12),"month"==this.viewMode){var n=this.view.year-1;0===n&&(n=-1),this.setViewDateTime("year",n)}if("day"==this.viewMode)if(this.view.month-1<=0){var a=this.view.year-1;0===a&&(a=-1),this.setViewDateTime("year",a),this.setViewDateTime("month",12)}else this.setViewDateTime("month",this.view.month-1)}}},{key:"switchViewMode",value:function(){return this.viewModeIndex=this.viewModeIndex+1>=this.viewModeList.length?0:this.viewModeIndex+1,this.viewMode=this.viewModeList[this.viewModeIndex]?this.viewModeList[this.viewModeIndex]:this.viewModeList[0],this._setViewDateTimeUnix(),this}},{key:"switchViewModeTo",value:function(e){this.viewModeList.indexOf(e)>=0&&(this.viewMode=e,this.viewModeIndex=this.viewModeList.indexOf(e))}},{key:"setSelectedDateTime",value:function(e,t){var i=this;switch(e){case"unix":i.selected.unixDate=t;var n=this.model.PersianDate.date(t);i.selected.year=n.year(),i.selected.month=n.month(),i.selected.date=n.date(),i.selected.hour=n.hour(),i.selected.hour12=n.format("hh"),i.selected.minute=n.minute(),i.selected.second=n.second();break;case"year":this.selected.year=t;break;case"month":this.selected.month=t;break;case"date":this.selected.date=t;break;case"hour":this.selected.hour=t;break;case"minute":this.selected.minute=t;break;case"second":this.selected.second=t}return i._updateSelectedUnix(),this}},{key:"_updateSelectedUnix",value:function(){return this.selected.dateObject=this.model.PersianDate.date([this.selected.year,this.selected.month,this.selected.date,this.view.hour,this.view.minute,this.view.second]),this.selected.unixDate=this.selected.dateObject.valueOf(),this.model.updateInput(this.selected.unixDate),this}},{key:"_setViewDateTimeUnix",value:function(){var e=(new persianDate).daysInMonth(this.view.year,this.view.month);return this.view.date>e&&(this.view.date=e),this.view.dateObject=this.model.PersianDate.date([this.view.year,this.view.month,this.view.date,this.view.hour,this.view.minute,this.view.second]),this.view.year=this.view.dateObject.year(),this.view.month=this.view.dateObject.month(),this.view.date=this.view.dateObject.date(),this.view.hour=this.view.dateObject.hour(),this.view.hour12=this.view.dateObject.format("hh"),this.view.minute=this.view.dateObject.minute(),this.view.second=this.view.dateObject.second(),this.view.unixDate=this.view.dateObject.valueOf(),this}},{key:"setViewDateTime",value:function(e,t){var i=this;switch(e){case"unix":var n=this.model.PersianDate.date(t);i.view.year=n.year(),i.view.month=n.month(),i.view.date=n.date(),i.view.hour=n.hour(),i.view.minute=n.minute(),i.view.second=n.second();break;case"year":this.view.year=t;break;case"month":this.view.month=t;break;case"date":this.view.date=t;break;case"hour":this.view.hour=t;break;case"minute":this.view.minute=t;break;case"second":this.view.second=t}return this._setViewDateTimeUnix(),this}},{key:"meridianToggle",value:function(){var e=this;"AM"===e.view.meridian?e.view.meridian="PM":"PM"===e.view.meridian&&(e.view.meridian="AM")}}]),e}();e.exports=o},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=function(){function e(t){return n(this,e),this.model=t,this._attachEvents(),this}return a(e,[{key:"_toggleCalendartype",value:function(){var e=this;"persian"==e.model.options.calendar_?(e.model.options.calendar_="gregorian",e.model.options.locale_=this.model.options.calendar.gregorian.locale):(e.model.options.calendar_="persian",e.model.options.locale_=this.model.options.calendar.persian.locale)}},{key:"_attachEvents",value:function(){var e=this;$(document).on("click","#"+e.model.view.id+" .pwt-btn-today",function(){e.model.state.setSelectedDateTime("unix",(new Date).valueOf()),e.model.state.setViewDateTime("unix",(new Date).valueOf()),e.model.view.reRender(),e.model.options.toolbox.onToday(e.model),e.model.options.toolbox.todayButton.onToday(e.model)}),$(document).on("click","#"+e.model.view.id+" .pwt-btn-calendar",function(){e._toggleCalendartype(),e.model.state.setSelectedDateTime("unix",e.model.state.selected.unixDate),e.model.state.setViewDateTime("unix",e.model.state.view.unixDate),e.model.view.render(),e.model.options.toolbox.calendarSwitch.onSwitch(e.model)}),$(document).on("click","#"+e.model.view.id+" .pwt-btn-submit",function(){e.model.view.hide(),e.model.options.toolbox.submitButton.onSubmit(e.model),e.model.options.onHide(this)})}}]),e}();e.exports=o},function(e,t,i){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){var i=[],n=!0,a=!1,o=void 0;try{for(var s,r=e[Symbol.iterator]();!(n=(s=r.next()).done)&&(i.push(s.value),!t||i.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{!n&&r.return&&r.return()}finally{if(a)throw o}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=i(1),l=i(0),d=i(15),c=function(){function e(t){a(this,e),this.yearsViewCount=12,this.model=t,this.rendered=null,this.$container=null,this.id="persianDateInstance-"+parseInt(1e3*Math.random(100));var i=this;return this.model.state.ui.isInline?this.$container=$('<div  id="'+this.id+'" class="datepicker-container-inline"></div>').appendTo(i.model.inputElement):(this.$container=$('<div  id="'+this.id+'" class="datepicker-container"></div>').appendTo("body"),this.hide(),this.setPickerBoxPosition(),this.addCompatibilityClass()),this}return s(e,[{key:"addCompatibilityClass",value:function(){l.isMobile&&this.model.options.responsive&&this.$container.addClass("pwt-mobile-view")}},{key:"destroy",value:function(){this.$container.remove()}},{key:"setPickerBoxPosition",value:function(){var e=this.model.input.getInputPosition(),t=this.model.input.getInputSize();if(l.isMobile&&this.model.options.responsive)return!1;"auto"===this.model.options.position?this.$container.css({left:e.left+"px",top:t.height+e.top+"px"}):this.$container.css({left:this.model.options.position[1]+e.left+"px",top:this.model.options.position[0]+e.top+"px"})}},{key:"show",value:function(){this.$container.removeClass("pwt-hide"),this.setPickerBoxPosition()}},{key:"hide",value:function(){this.$container.addClass("pwt-hide")}},{key:"toggle",value:function(){this.$container.toggleClass("pwt-hide")}},{key:"_getNavSwitchText",value:function(e){var t=void 0;return"day"==this.model.state.viewMode?t=this.model.options.dayPicker.titleFormatter.call(this,e.year,e.month):"month"==this.model.state.viewMode?t=this.model.options.monthPicker.titleFormatter.call(this,e.dateObject.valueOf()):"year"==this.model.state.viewMode&&(t=this.model.options.yearPicker.titleFormatter.call(this,e.year)),t}},{key:"checkYearAccess",value:function(e){if(this.model.state.filetredDate){var t=this.model.state.filterDate.start.year,i=this.model.state.filterDate.end.year;if(t&&e<t)return!1;if(i&&e>i)return!1}return this.model.options.checkYear(e)}},{key:"_getYearViewModel",value:function(e){var t=this,i=this.model.options.yearPicker.enabled;if(!i)return{enabled:!1};var a=[].concat(n(Array(this.yearsViewCount).keys())).map(function(i){return i+parseInt(e.year/t.yearsViewCount)*t.yearsViewCount}),o=[],s=this.model.PersianDate.date(),r=!0,l=!1,d=void 0;try{for(var c,u=a[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){var h=c.value;s.year([h]),o.push({title:s.format("YYYY"),enabled:this.checkYearAccess(h),dataYear:h,selected:this.model.state.selected.year==h})}}catch(e){l=!0,d=e}finally{try{!r&&u.return&&u.return()}finally{if(l)throw d}}return{enabled:i,viewMode:"year"==this.model.state.viewMode,list:o}}},{key:"checkMonthAccess",value:function(e){e+=1;var t=this.model.state.view.year;if(this.model.state.filetredDate){var i=this.model.state.filterDate.start.month,n=this.model.state.filterDate.end.month,a=this.model.state.filterDate.start.year,o=this.model.state.filterDate.end.year;if(i&&n&&(t==o&&e>n||t>o)||t==a&&e<i||t<a)return!1;if(n&&(t==o&&e>n||t>o))return!1;if(i&&(t==a&&e<i||t<a))return!1}return this.model.options.checkMonth(e,t)}},{key:"_getMonthViewModel",value:function(){var e=this.model.options.monthPicker.enabled;if(!e)return{enabled:!1};var t=[],i=this,n=!0,a=!1,s=void 0;try{for(var r,l=i.model.PersianDate.date().rangeName().months.entries()[Symbol.iterator]();!(n=(r=l.next()).done);n=!0){var d=o(r.value,2),c=d[0],u=d[1];t.push({title:u,enabled:this.checkMonthAccess(c),year:this.model.state.view.year,dataMonth:c+1,selected:this.model.state.selected.year==this.model.state.view.year&&this.model.state.selected.month==c+1})}}catch(e){a=!0,s=e}finally{try{!n&&l.return&&l.return()}finally{if(a)throw s}}return{enabled:e,viewMode:"month"==this.model.state.viewMode,list:t}}},{key:"checkDayAccess",value:function(e){var t=this;if(t.minDate=this.model.options.minDate,t.maxDate=this.model.options.maxDate,t.model.state.filetredDate)if(t.minDate&&t.maxDate){if(t.minDate=t.model.PersianDate.date(t.minDate).startOf("day").valueOf(),t.maxDate=t.model.PersianDate.date(t.maxDate).endOf("day").valueOf(),!(e>=t.minDate&&e<=t.maxDate))return!1}else if(t.minDate){if(t.minDate=t.model.PersianDate.date(t.minDate).startOf("day").valueOf(),e<=t.minDate)return!1}else if(t.maxDate&&(t.maxDate=t.model.PersianDate.date(t.maxDate).endOf("day").valueOf(),e>=t.maxDate))return!1;return t.model.options.checkDate(e)}},{key:"_getDayViewModel",value:function(){if("day"!=this.model.state.viewMode)return[];var e=this.model.options.dayPicker.enabled;if(!e)return{enabled:!1};var t=this.model.state.view.month,i=this.model.state.view.year,n=this.model.PersianDate.date(),a=n.daysInMonth(i,t),s=n.getFirstWeekDayOfMonth(i,t)-1,r=[],l=0,d=0,c=[["null","null","null","null","null","null","null"],["null","null","null","null","null","null","null"],["null","null","null","null","null","null","null"],["null","null","null","null","null","null","null"],["null","null","null","null","null","null","null"],["null","null","null","null","null","null","null"]],u=this._getAnotherCalendar(),h=!0,m=!1,v=void 0;try{for(var p,f=c.entries()[Symbol.iterator]();!(h=(p=f.next()).done);h=!0){var w=o(p.value,2),y=w[0],b=w[1];r[y]=[];var k=!0,g=!1,D=void 0;try{for(var x,P=b.entries()[Symbol.iterator]();!(k=(x=P.next()).done);k=!0){var T=o(x.value,1),M=T[0],S=void 0,O=void 0;0===y&&M<s?(S=this.model.state.view.dateObject.startOf("month").hour(12).subtract("days",s-M),O=!0):0===y&&M>=s||y<=5&&l<a?(l+=1,S=new persianDate([this.model.state.view.year,this.model.state.view.month,l]),O=!1):(d+=1,S=this.model.state.view.dateObject.endOf("month").hour(12).add("days",d),O=!0),r[y].push({title:S.format("D"),alterCalTitle:new persianDate(S.valueOf()).toCalendar(u[0]).toLocale(u[1]).format("D"),dataDate:[S.year(),S.month(),S.date()].join(","),dataUnix:S.hour(12).valueOf(),otherMonth:O,enabled:this.checkDayAccess(S.valueOf())})}}catch(e){g=!0,D=e}finally{try{!k&&P.return&&P.return()}finally{if(g)throw D}}}}catch(e){m=!0,v=e}finally{try{!h&&f.return&&f.return()}finally{if(m)throw v}}return{enabled:e,viewMode:"day"==this.model.state.viewMode,list:r}}},{key:"markSelectedDay",value:function(){var e=this.model.state.selected;this.$container.find(".table-days td").each(function(){$(this).data("date")==[e.year,e.month,e.date].join(",")?$(this).addClass("selected"):$(this).removeClass("selected")})}},{key:"markToday",value:function(){var e=new persianDate;this.$container.find(".table-days td").each(function(){$(this).data("date")==[e.year(),e.month(),e.date()].join(",")?$(this).addClass("today"):$(this).removeClass("today")})}},{key:"_getTimeViewModel",value:function(){var e=this.model.options.timePicker.enabled;if(!e)return{enabled:!1};var t=void 0;return t=this.model.options.timePicker.meridian.enabled?this.model.state.view.dateObject.format("hh"):this.model.state.view.dateObject.format("HH"),{enabled:e,hour:{title:t,enabled:this.model.options.timePicker.hour.enabled},minute:{title:this.model.state.view.dateObject.format("mm"),enabled:this.model.options.timePicker.minute.enabled},second:{title:this.model.state.view.dateObject.format("ss"),enabled:this.model.options.timePicker.second.enabled},meridian:{title:this.model.state.view.dateObject.format("a"),enabled:this.model.options.timePicker.meridian.enabled}}}},{key:"_getWeekViewModel",value:function(){return{enabled:!0,list:this.model.PersianDate.date().rangeName().weekdaysMin}}},{key:"getCssClass",value:function(){return[this.model.state.ui.isInline?"datepicker-plot-area-inline-view":"",this.model.options.timePicker.meridian.enabled?"":"datepicker-state-no-meridian",this.model.options.onlyTimePicker?"datepicker-state-only-time":"",this.model.options.timePicker.second.enabled?"":"datepicker-state-no-second","gregorian"==this.model.options.calendar_?"datepicker-gregorian":"datepicker-persian"].join(" ")}},{key:"getViewModel",value:function(e){var t=this._getAnotherCalendar();return{plotId:"",navigator:{enabled:this.model.options.navigator.enabled,switch:{enabled:!0,text:this._getNavSwitchText(e)},text:this.model.options.navigator.text},selected:this.model.state.selected,time:this._getTimeViewModel(e),days:this._getDayViewModel(e),weekdays:this._getWeekViewModel(e),month:this._getMonthViewModel(e),year:this._getYearViewModel(e),toolbox:this.model.options.toolbox,cssClass:this.getCssClass(),onlyTimePicker:this.model.options.onlyTimePicker,altCalendarShowHint:this.model.options.calendar[t[0]].showHint,calendarSwitchText:this.model.state.view.dateObject.toCalendar(t[0]).toLocale(t[1]).format(this.model.options.toolbox.calendarSwitch.format),todayButtonText:this._getButtonText().todayButtontext,submitButtonText:this._getButtonText().submitButtonText}}},{key:"_getButtonText",value:function(){var e={};return"fa"==this.model.options.locale_?(e.todayButtontext=this.model.options.toolbox.todayButton.text.fa,e.submitButtonText=this.model.options.toolbox.submitButton.text.fa):"en"==this.model.options.locale_&&(e.todayButtontext=this.model.options.toolbox.todayButton.text.en,e.submitButtonText=this.model.options.toolbox.submitButton.text.en),e}},{key:"_getAnotherCalendar",value:function(){var e=this,t=void 0,i=void 0;return"persian"==e.model.options.calendar_?(t="gregorian",i=e.model.options.calendar.gregorian.locale):(t="persian",i=e.model.options.calendar.persian.locale),[t,i]}},{key:"renderTimePartial",value:function(){var e=this._getTimeViewModel(this.model.state.view);this.$container.find('[data-time-key="hour"] input').val(e.hour.title),this.$container.find('[data-time-key="minute"] input').val(e.minute.title),this.$container.find('[data-time-key="second"] input').val(e.second.title),this.$container.find('[data-time-key="meridian"] input').val(e.meridian.title)}},{key:"render",value:function(e){e||(e=this.model.state.view),l.debug(this,"render"),d.parse(r),this.rendered=$(d.render(this.model.options.template,this.getViewModel(e))),this.$container.empty().append(this.rendered),this.markSelectedDay(),this.markToday(),this.afterRender()}},{key:"reRender",value:function(){var e=this.model.state.view;this.render(e)}},{key:"afterRender",value:function(){this.model.navigator&&this.model.navigator.liveAttach()}}]),e}();e.exports=c},function(e,t,i){!function(t,i){"use strict";var n=function(e){return new n.Instance(e)};n.SUPPORT="wheel",n.ADD_EVENT="addEventListener",n.REMOVE_EVENT="removeEventListener",n.PREFIX="",n.READY=!1,n.Instance=function(e){return n.READY||(n.normalise.browser(),n.READY=!0),this.element=e,this.handlers=[],this},n.Instance.prototype={wheel:function(e,t){return n.event.add(this,n.SUPPORT,e,t),"DOMMouseScroll"===n.SUPPORT&&n.event.add(this,"MozMousePixelScroll",e,t),this},unwheel:function(e,t){return void 0===e&&(e=this.handlers.slice(-1)[0])&&(e=e.original),n.event.remove(this,n.SUPPORT,e,t),"DOMMouseScroll"===n.SUPPORT&&n.event.remove(this,"MozMousePixelScroll",e,t),this}},n.event={add:function(e,i,a,o){var s=a;a=function(e){e||(e=t.event);var i=n.normalise.event(e),a=n.normalise.delta(e);return s(i,a[0],a[1],a[2])},e.element[n.ADD_EVENT](n.PREFIX+i,a,o||!1),e.handlers.push({original:s,normalised:a})},remove:function(e,t,i,a){for(var o,s=i,r={},l=0,d=e.handlers.length;l<d;++l)r[e.handlers[l].original]=e.handlers[l];o=r[s],i=o.normalised,e.element[n.REMOVE_EVENT](n.PREFIX+t,i,a||!1);for(var c in e.handlers)if(e.handlers[c]==o){e.handlers.splice(c,1);break}}};var a,o;n.normalise={browser:function(){"onwheel"in i||i.documentMode>=9||(n.SUPPORT=void 0!==i.onmousewheel?"mousewheel":"DOMMouseScroll"),t.addEventListener||(n.ADD_EVENT="attachEvent",n.REMOVE_EVENT="detachEvent",n.PREFIX="on")},event:function(e){var t={originalEvent:e,target:e.target||e.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"===e.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){e.stopPropagation?e.stopPropagation():e.cancelBubble=!1}};return e.wheelDelta&&(t.deltaY=-.025*e.wheelDelta),e.wheelDeltaX&&(t.deltaX=-.025*e.wheelDeltaX),e.detail&&(t.deltaY=e.detail),t},delta:function(e){var t,i=0,n=0,s=0,r=0,l=0;return e.deltaY&&(s=-1*e.deltaY,i=s),e.deltaX&&(n=e.deltaX,i=-1*n),e.wheelDelta&&(i=e.wheelDelta),e.wheelDeltaY&&(s=e.wheelDeltaY),e.wheelDeltaX&&(n=-1*e.wheelDeltaX),e.detail&&(i=-1*e.detail),0===i?[0,0,0]:(r=Math.abs(i),(!a||r<a)&&(a=r),l=Math.max(Math.abs(s),Math.abs(n)),(!o||l<o)&&(o=l),t=i>0?"floor":"ceil",i=Math[t](i/a),n=Math[t](n/o),s=Math[t](s/o),[i,n,s])}},"function"==typeof t.define&&t.define.amd?t.define("hamster",[],function(){return n}):e.exports=n}(window,window.document)},function(e,t,i){var n,a,o;/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
!function(i,s){"object"==typeof t&&t&&"string"!=typeof t.nodeName?s(t):(a=[t],n=s,void 0!==(o="function"==typeof n?n.apply(t,a):n)&&(e.exports=o))}(0,function(e){function t(e){return"function"==typeof e}function i(e){return f(e)?"array":typeof e}function n(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function a(e,t){return null!=e&&"object"==typeof e&&t in e}function o(e,t){return null!=e&&"object"!=typeof e&&e.hasOwnProperty&&e.hasOwnProperty(t)}function s(e,t){return w.call(e,t)}function r(e){return!s(y,e)}function l(e){return String(e).replace(/[&<>"'`=\/]/g,function(e){return b[e]})}function d(t,i){function a(e){if("string"==typeof e&&(e=e.split(g,2)),!f(e)||2!==e.length)throw new Error("Invalid tags: "+e);o=new RegExp(n(e[0])+"\\s*"),s=new RegExp("\\s*"+n(e[1])),l=new RegExp("\\s*"+n("}"+e[1]))}if(!t)return[];var o,s,l,d=[],m=[],v=[],p=!1,w=!1;a(i||e.tags);for(var y,b,T,M,S,O,E=new h(t);!E.eos();){if(y=E.pos,T=E.scanUntil(o))for(var $=0,C=T.length;$<C;++$)M=T.charAt($),r(M)?v.push(m.length):w=!0,m.push(["text",M,y,y+1]),y+=1,"\n"===M&&function(){if(p&&!w)for(;v.length;)delete m[v.pop()];else v=[];p=!1,w=!1}();if(!E.scan(o))break;if(p=!0,b=E.scan(P)||"name",E.scan(k),"="===b?(T=E.scanUntil(D),E.scan(D),E.scanUntil(s)):"{"===b?(T=E.scanUntil(l),E.scan(x),E.scanUntil(s),b="&"):T=E.scanUntil(s),!E.scan(s))throw new Error("Unclosed tag at "+E.pos);if(S=[b,T,y,E.pos],m.push(S),"#"===b||"^"===b)d.push(S);else if("/"===b){if(!(O=d.pop()))throw new Error('Unopened section "'+T+'" at '+y);if(O[1]!==T)throw new Error('Unclosed section "'+O[1]+'" at '+y)}else"name"===b||"{"===b||"&"===b?w=!0:"="===b&&a(T)}if(O=d.pop())throw new Error('Unclosed section "'+O[1]+'" at '+E.pos);return u(c(m))}function c(e){for(var t,i,n=[],a=0,o=e.length;a<o;++a)(t=e[a])&&("text"===t[0]&&i&&"text"===i[0]?(i[1]+=t[1],i[3]=t[3]):(n.push(t),i=t));return n}function u(e){for(var t,i,n=[],a=n,o=[],s=0,r=e.length;s<r;++s)switch(t=e[s],t[0]){case"#":case"^":a.push(t),o.push(t),a=t[4]=[];break;case"/":i=o.pop(),i[5]=t[2],a=o.length>0?o[o.length-1][4]:n;break;default:a.push(t)}return n}function h(e){this.string=e,this.tail=e,this.pos=0}function m(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function v(){this.cache={}}var p=Object.prototype.toString,f=Array.isArray||function(e){return"[object Array]"===p.call(e)},w=RegExp.prototype.test,y=/\S/,b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},k=/\s*/,g=/\s+/,D=/\s*=/,x=/\s*\}/,P=/#|\^|\/|>|\{|&|=|!/;h.prototype.eos=function(){return""===this.tail},h.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var i=t[0];return this.tail=this.tail.substring(i.length),this.pos+=i.length,i},h.prototype.scanUntil=function(e){var t,i=this.tail.search(e);switch(i){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,i),this.tail=this.tail.substring(i)}return this.pos+=t.length,t},m.prototype.push=function(e){return new m(e,this)},m.prototype.lookup=function(e){var i,n=this.cache;if(n.hasOwnProperty(e))i=n[e];else{for(var s,r,l,d=this,c=!1;d;){if(e.indexOf(".")>0)for(s=d.view,r=e.split("."),l=0;null!=s&&l<r.length;)l===r.length-1&&(c=a(s,r[l])||o(s,r[l])),s=s[r[l++]];else s=d.view[e],c=a(d.view,e);if(c){i=s;break}d=d.parent}n[e]=i}return t(i)&&(i=i.call(this.view)),i},v.prototype.clearCache=function(){this.cache={}},v.prototype.parse=function(t,i){var n=this.cache,a=t+":"+(i||e.tags).join(":"),o=n[a];return null==o&&(o=n[a]=d(t,i)),o},v.prototype.render=function(e,t,i,n){var a=this.parse(e,n),o=t instanceof m?t:new m(t);return this.renderTokens(a,o,i,e,n)},v.prototype.renderTokens=function(e,t,i,n,a){for(var o,s,r,l="",d=0,c=e.length;d<c;++d)r=void 0,o=e[d],s=o[0],"#"===s?r=this.renderSection(o,t,i,n):"^"===s?r=this.renderInverted(o,t,i,n):">"===s?r=this.renderPartial(o,t,i,a):"&"===s?r=this.unescapedValue(o,t):"name"===s?r=this.escapedValue(o,t):"text"===s&&(r=this.rawValue(o)),void 0!==r&&(l+=r);return l},v.prototype.renderSection=function(e,i,n,a){function o(e){return s.render(e,i,n)}var s=this,r="",l=i.lookup(e[1]);if(l){if(f(l))for(var d=0,c=l.length;d<c;++d)r+=this.renderTokens(e[4],i.push(l[d]),n,a);else if("object"==typeof l||"string"==typeof l||"number"==typeof l)r+=this.renderTokens(e[4],i.push(l),n,a);else if(t(l)){if("string"!=typeof a)throw new Error("Cannot use higher-order sections without the original template");l=l.call(i.view,a.slice(e[3],e[5]),o),null!=l&&(r+=l)}else r+=this.renderTokens(e[4],i,n,a);return r}},v.prototype.renderInverted=function(e,t,i,n){var a=t.lookup(e[1]);if(!a||f(a)&&0===a.length)return this.renderTokens(e[4],t,i,n)},v.prototype.renderPartial=function(e,i,n,a){if(n){var o=t(n)?n(e[1]):n[e[1]];return null!=o?this.renderTokens(this.parse(o,a),i,n,o):void 0}},v.prototype.unescapedValue=function(e,t){var i=t.lookup(e[1]);if(null!=i)return i},v.prototype.escapedValue=function(t,i){var n=i.lookup(t[1]);if(null!=n)return e.escape(n)},v.prototype.rawValue=function(e){return e[1]},e.name="mustache.js",e.version="3.0.1",e.tags=["{{","}}"];var T=new v;return e.clearCache=function(){return T.clearCache()},e.parse=function(e,t){return T.parse(e,t)},e.render=function(e,t,n,a){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+i(e)+'" was given as the first argument for mustache#render(template, view, partials)');return T.render(e,t,n,a)},e.to_html=function(i,n,a,o){var s=e.render(i,n,a);if(!t(o))return s;o(s)},e.escape=l,e.Scanner=h,e.Context=m,e.Writer=v,e})}])});
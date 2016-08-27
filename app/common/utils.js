"use strict";
var Utils = (function () {
    function Utils() {
    }
    Utils.showFirstNChars = function (text, numberOfChar) {
        if (numberOfChar === void 0) { numberOfChar = 20; }
        if (text) {
            return text.length < numberOfChar ? text : text.substr(0, numberOfChar) + " ...";
        }
        else {
            return '';
        }
    };
    Utils.CurrentDate = function () {
        return new Date().toLocaleDateString();
    };
    Utils.CurrentTime = function () {
        return new Date().toLocaleTimeString();
    };
    Utils.CurrentDateTime = function () {
        return new Date().toLocaleString();
    };
    Utils.RandomInt = function (digits) {
        if (digits === void 0) { digits = 10; }
        return Math.floor(Math.random() * Math.pow(10, digits));
    };
    Utils.goBack = function () {
        window.history.back();
    };
    Utils.getResponsiveClass = function (width, size) {
        if (size === void 0) { size = 'xs'; }
        return "col-" + size + "-" + width;
    };
    Utils.bindEnum = function (enumArr) {
        var arr = new Array();
        for (var item in enumArr) {
            if (!(+item > 0)) {
                arr.push(item);
            }
        }
        return arr;
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map
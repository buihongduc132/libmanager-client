"use strict";
var Utils = (function () {
    function Utils() {
    }
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
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map
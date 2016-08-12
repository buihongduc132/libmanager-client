"use strict";
var Observable_1 = require('rxjs/Observable');
var Logs = (function () {
    function Logs() {
    }
    Logs.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    return Logs;
}());
exports.Logs = Logs;
//# sourceMappingURL=logs.js.map
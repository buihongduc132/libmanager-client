"use strict";
var DAO = (function () {
    function DAO() {
    }
    DAO.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    return DAO;
}());
exports.DAO = DAO;
//# sourceMappingURL=DAO.js.map
"use strict";
(function (UserType) {
    UserType[UserType["investor"] = 1] = "investor";
    UserType[UserType["employee"] = 2] = "employee";
    UserType[UserType["customer"] = 3] = "customer";
})(exports.UserType || (exports.UserType = {}));
var UserType = exports.UserType;
// export enum 
(function (Unit) {
    Unit[Unit["g"] = 1] = "g";
    Unit[Unit["kg"] = 2] = "kg";
    Unit[Unit["l"] = 3] = "l";
    Unit[Unit["ml"] = 4] = "ml";
})(exports.Unit || (exports.Unit = {}));
var Unit = exports.Unit;
//# sourceMappingURL=commonEnum.js.map
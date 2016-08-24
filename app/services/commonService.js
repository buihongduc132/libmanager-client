"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/catch');
var config_1 = require('../config');
var logs_1 = require('../common/logs');
var DAO_1 = require('../common/DAO');
var CommonServices = (function () {
    function CommonServices(http) {
        this.http = http;
        this.http = http;
    }
    CommonServices.prototype.getAllPerson = function () {
        return this.http.get(config_1.Config.host + "/" + config_1.Config.route.server.people)
            .map(DAO_1.DAO.extractData)
            .catch(logs_1.Logs.handleError);
    };
    CommonServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CommonServices);
    return CommonServices;
}());
exports.CommonServices = CommonServices;
//# sourceMappingURL=commonService.js.map
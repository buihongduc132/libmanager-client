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
// import 'rxjs/add/operator/toPromise';
require('rxjs/add/operator/catch');
require('../rxjsOperators');
var logs_1 = require('../common/logs');
var DAO_1 = require('../common/DAO');
var config_1 = require('../config');
var BudgetServices = (function () {
    function BudgetServices(http) {
        this.http = http;
    }
    BudgetServices.prototype.getIncomeByMonth = function (month) {
        //TODO
        return;
    };
    BudgetServices.prototype.getIncomeByYear = function (year) {
        //TODO
        return;
    };
    BudgetServices.prototype.getIncomeByDay = function (day) {
        //TODO
        return;
    };
    BudgetServices.prototype.getIncomes = function () {
        return this.http.get(config_1.Config.host + "/" + config_1.Config.route.server.income)
            .map(DAO_1.DAO.extractData)
            .catch(logs_1.Logs.handleError);
    };
    BudgetServices.prototype.editIncome = function (income) {
        return this.http.put(config_1.Config.host + "/" + config_1.Config.route.server.income + "/" + income.id, income)
            .map(DAO_1.DAO.extractData)
            .catch(logs_1.Logs.handleError);
    };
    BudgetServices.prototype.addIncome = function (income) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(config_1.Config.host + "/" + config_1.Config.route.server.income, income, options)
            .map(DAO_1.DAO.extractData)
            .catch(logs_1.Logs.handleError);
    };
    BudgetServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BudgetServices);
    return BudgetServices;
}());
exports.BudgetServices = BudgetServices;
//# sourceMappingURL=budgetService.js.map
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
var budgetService_1 = require('../../../services/budgetService');
var commonService_1 = require('../../../services/commonService');
var income_1 = require('../../../models/income');
var IncomeDailyComponent = (function () {
    function IncomeDailyComponent(budgetServices, commonServices) {
        this.budgetServices = budgetServices;
        this.commonServices = commonServices;
        this.newIncome = new income_1.Income();
        this.incomes = new Array();
        this.showMoreDetails = false;
        this.showDeletedDate = false;
        this.getAllPeople = this._getAllPeople;
        this.getDate = this._getDate;
        this.getIncomes = this._getIncomes;
        this.initNewIncome = this._initNewIncome;
        this.prepareNewIncome = this._prepareNewIncome;
        this.addIncome = this._addIncome;
        this.reInitNewIncome = this._reInitNewIncome;
        this.toggleMoreDetails = this._toggleMoreDetails;
        this.showIncome = this._showIncome;
        this.toggleDeleted = this._toggleDeleted;
        this.deleteIncome = this._deleteIncome;
        this.enableIncome = this._enableIncome;
    }
    IncomeDailyComponent.prototype.ngOnInit = function () {
        this.getIncomes();
        this.getAllPeople();
        this.initNewIncome();
    };
    IncomeDailyComponent.prototype.onSubmit = function () {
        this.addIncome(this.newIncome);
        this.getIncomes();
        this.reInitNewIncome();
    };
    IncomeDailyComponent.prototype._showIncome = function (isDeleted) {
        if (!isDeleted || this.showDeletedDate)
            return true;
        return false;
    };
    IncomeDailyComponent.prototype._toggleMoreDetails = function () {
        this.showMoreDetails = !this.showMoreDetails;
    };
    IncomeDailyComponent.prototype._toggleDeleted = function () {
        this.showDeletedDate = !this.showDeletedDate;
    };
    IncomeDailyComponent.prototype._enableIncome = function (income) {
        var _this = this;
        income.isDeleted = false;
        this.budgetServices.editIncome(income)
            .subscribe(function (income) {
            _this.getIncomes();
        }, function (err) { return _this.err = err; });
    };
    IncomeDailyComponent.prototype._deleteIncome = function (income) {
        var _this = this;
        income.isDeleted = true;
        this.budgetServices.editIncome(income)
            .subscribe(function (income) {
            _this.getIncomes();
        }, function (err) { return _this.err = err; });
    };
    IncomeDailyComponent.prototype._prepareNewIncome = function () {
        this.newIncome.isDeleted = false;
        this.newIncome.time = new Date();
        this.newIncome.yearGen = new Date().getFullYear();
        this.newIncome.monthGen = new Date().getMonth();
        this.newIncome.dayGen = new Date().getDate();
    };
    IncomeDailyComponent.prototype._initNewIncome = function () {
        this.newIncome = new income_1.Income();
        this.newIncome.yearActual = new Date().getFullYear();
        this.newIncome.monthActual = new Date().getMonth();
        this.newIncome.dayActual = new Date().getDate();
    };
    IncomeDailyComponent.prototype._reInitNewIncome = function () {
        this.newIncome.total = null;
    };
    IncomeDailyComponent.prototype._addIncome = function (income) {
        var _this = this;
        this.prepareNewIncome();
        this.budgetServices.addIncome(income)
            .subscribe(function (income) {
            _this.getIncomes();
        }, function (err) { return _this.err = err; });
    };
    IncomeDailyComponent.prototype._getIncomes = function () {
        var _this = this;
        this.budgetServices.getIncomes()
            .subscribe(function (incomes) { return _this.incomes = incomes; }, function (err) { return _this.err = err; });
    };
    IncomeDailyComponent.prototype._getDate = function (year, month, day) {
        return year + "-" + month + "-" + day;
    };
    IncomeDailyComponent.prototype._getAllPeople = function () {
        var _this = this;
        this.commonServices.getAllPerson()
            .subscribe(function (people) { return _this.people = people; }, function (err) { return _this.err = err; });
    };
    IncomeDailyComponent = __decorate([
        core_1.Component({
            selector: 'income-daily',
            templateUrl: 'app/templates/budget/income/incomeDaily.template.html'
        }), 
        __metadata('design:paramtypes', [budgetService_1.BudgetServices, commonService_1.CommonServices])
    ], IncomeDailyComponent);
    return IncomeDailyComponent;
}());
exports.IncomeDailyComponent = IncomeDailyComponent;
//# sourceMappingURL=incomeDaily.component.js.map
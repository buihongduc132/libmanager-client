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
var drinkService_1 = require('../../../services/drinkService');
var income_1 = require('../../../models/income');
var incomeDetail_1 = require('../../../models/incomeDetail');
var person_1 = require('../../../models/person');
var drink_1 = require('../../../models/drink');
var _ = require('lodash');
var IncomeDailyComponent = (function () {
    function IncomeDailyComponent(budgetServices, commonServices, drinkServices) {
        this.budgetServices = budgetServices;
        this.commonServices = commonServices;
        this.drinkServices = drinkServices;
        // newIncome: Income = new Income();
        this.newIncomeDate = {};
        this.incomes = new Array();
        this.getAllPeople = this._getAllPeople;
        this.getDate = this._getDate;
        this.getIncomes = this._getIncomes;
        this.addIncome = this._addIncome;
        this.toggleMoreDetails = this._toggleMoreDetails; // 
        this.showIncome = this._showIncome;
        this.toggleDeleted = this._toggleDeleted; //
        this.deleteIncome = this._deleteIncome; //
        this.enableIncome = this._enableIncome; //
        this.getDrinks = this._getDrinks;
        this.toggleDetail = this._toggleDetail;
        this.onAddIncome = this._onAddIncome;
        this.initNewDate = this._initNewDate; // 
        this.getTotal = this._getTotal; //
        this.addNewDetail = this._addNewDetail; //
        this.getSelectDrink = this._getSelectDrink; //
        this.selectDrink = this._selectDrink; //
        this.selectKeeper = this._selectKeeper; //
        this.getTotalPrice = this._getTotalPrice;
        this.onAddNewDetail = this._onAddNewDetail;
        this.isExistsIncome = this._isExistsIncome;
        this.addOneDay = this._addOneDay;
        this.isValidIncome = this._isValidIncome;
        this.deleteIncomeDetail = this._deleteIncomeDetail;
        this.enableIncomeDetail = this._enableIncomeDetail;
        this.prepareAddNewIncome = this._prepareAddNewIncome;
        this.getSelectedKeeper = this._getSelectedKeeper;
        this.toggleNoting = this._toggleNoting;
        this.updateIncomeDetail = this._updateIncomeDetail;
        this.resetEditingNote = this._resetEditingNote;
        this.showFirstNChars = this._showFirstNChars;
    }
    IncomeDailyComponent.prototype.ngOnInit = function () {
        this.getIncomes();
        this.getAllPeople();
        this.getDrinks();
        this.initNewDate();
        this.newIncomeDetail = this._initNewIncomeDetail();
        this.showMoreDetails = false;
        this.showDeletedDate = false;
        this.toggledDetail = -1;
        this.editingNote = -1;
        this.selectedDrink = new drink_1.Drink();
    };
    IncomeDailyComponent.prototype.onSubmit = function () {
        this.getIncomes();
    };
    IncomeDailyComponent.prototype._showFirstNChars = function (text, numberOfChar) {
        if (numberOfChar === void 0) { numberOfChar = 20; }
        if (text) {
            return text.length < numberOfChar ? text : text.substr(0, numberOfChar) + " ...";
        }
        else {
            return '';
        }
    };
    IncomeDailyComponent.prototype._toggleNoting = function (detailId) {
        if (detailId == this.editingNote) {
            this.editingNote = -1;
        }
        else {
            this.editingNote = detailId;
        }
    };
    IncomeDailyComponent.prototype._enableIncomeDetail = function (detailId) {
        var _this = this;
        var newDetail = new incomeDetail_1.IncomeDetail;
        newDetail.id = detailId;
        newDetail.isDeleted = false;
        this.budgetServices.editIncomeDetail(newDetail)
            .subscribe(function (details) {
            _this.getIncomes();
        }, function (err) { return _this.err = err; });
    };
    IncomeDailyComponent.prototype._updateIncomeDetail = function (detail) {
        var _this = this;
        this.budgetServices.editIncomeDetail(detail)
            .subscribe(function (details) {
            _this.getIncomes();
            _this.resetEditingNote();
        }, function (err) { return _this.err = err; });
    };
    IncomeDailyComponent.prototype._resetEditingNote = function () {
        this.editingNote = -1;
    };
    IncomeDailyComponent.prototype._deleteIncomeDetail = function (detailId) {
        var _this = this;
        var newDetail = new incomeDetail_1.IncomeDetail;
        newDetail.id = detailId;
        newDetail.isDeleted = true;
        this.budgetServices.editIncomeDetail(newDetail)
            .subscribe(function (details) {
            _this.getIncomes();
        }, function (err) { return _this.err = err; });
    };
    IncomeDailyComponent.prototype._getTotalPrice = function () {
        return this.newIncomeDetail.price * ((100 - this.newIncomeDetail.discount) / 100);
    };
    IncomeDailyComponent.prototype._selectKeeper = function (id) {
        this.selectedKeeper = id;
    };
    IncomeDailyComponent.prototype._selectDrink = function (id) {
        this.selectedDrink = this.getSelectDrink(id);
        this.newIncomeDetail.price = this.selectedDrink.price;
        this.newIncomeDetail.discount = 0;
        this.newIncomeDetail.keeper = new person_1.Person();
        this.newIncomeDetail.keeper.id = this.selectedKeeper;
    };
    IncomeDailyComponent.prototype._addNewDetail = function () {
        var _this = this;
        this.budgetServices.addIncomeDetail(this.newIncomeDetail)
            .subscribe(function (incomeDetail) {
            _this.getIncomes();
        }, function (err) { return _this.err = err; });
    };
    IncomeDailyComponent.prototype._onAddNewDetail = function (incomeId) {
        var _this = this;
        var preparedNewIncome = this.prepareAddNewIncome(incomeId);
        console.log(preparedNewIncome);
        this.budgetServices.editIncome(preparedNewIncome)
            .subscribe(function (income) {
            _this.getIncomes();
        }, function (err) { return _this.err = err; });
    };
    IncomeDailyComponent.prototype._isValidIncome = function (income) {
        return true;
    };
    IncomeDailyComponent.prototype._prepareAddNewIncome = function (incomeId) {
        this.newIncomeDetail.Dish = this.selectedDrink;
        this.newIncomeDetail.keeper = this.getSelectedKeeper();
        this.newIncomeDetail.isDeleted = false;
        var currentIncome = _.find(this.incomes, ['id', incomeId]);
        currentIncome.IncomeDetails.push(this.newIncomeDetail);
        return currentIncome;
    };
    IncomeDailyComponent.prototype._getSelectedKeeper = function () {
        for (var i = 0; i < this.people.length; i++) {
            if (this.people[i].id == this.selectedKeeper) {
                return this.people[i];
            }
        }
    };
    IncomeDailyComponent.prototype._getSelectDrink = function (id) {
        for (var i = 0; i < this.drinks.length; i++) {
            if (this.drinks[i].id == id) {
                return this.drinks[i];
            }
        }
        return this.drinks[0];
    };
    IncomeDailyComponent.prototype._getTotal = function (income) {
        var total = 0;
        income.IncomeDetails.forEach(function (detail) {
            if (!detail.isDeleted) {
                total += detail.price * (100 - detail.discount) / 100;
            }
        });
        return total;
    };
    IncomeDailyComponent.prototype._isExistsIncome = function (income) {
        var incomeDate = {
            day: income.dayActual,
            month: income.monthActual,
            year: income.yearActual
        };
        return this.budgetServices.isExistsIncome(incomeDate)
            .map(function (data) { return data; });
    };
    IncomeDailyComponent.prototype._addIncome = function (income) {
        var _this = this;
        this.budgetServices.addIncome(income)
            .subscribe(function (income) {
            _this.getIncomes();
        }, function (err) { return _this.err = err; });
    };
    IncomeDailyComponent.prototype._initNewDate = function () {
        this.newIncomeDate.day = new Date().getDate();
        this.newIncomeDate.month = new Date().getMonth();
        this.newIncomeDate.year = new Date().getFullYear();
    };
    IncomeDailyComponent.prototype._initNewIncome = function () {
        var newIncome = new income_1.Income();
        newIncome.dayGen = new Date().getDate();
        newIncome.monthGen = new Date().getMonth();
        newIncome.yearGen = new Date().getFullYear();
        newIncome.dayActual = this.newIncomeDate.day;
        newIncome.monthActual = this.newIncomeDate.month;
        newIncome.yearActual = this.newIncomeDate.year;
        newIncome.total = 0;
        newIncome.isDeleted = false;
        return newIncome;
    };
    IncomeDailyComponent.prototype._initNewIncomeDetail = function () {
        var newIncomeDetail = new incomeDetail_1.IncomeDetail();
        newIncomeDetail.discount = 0;
        newIncomeDetail.price = 0;
        return newIncomeDetail;
    };
    IncomeDailyComponent.prototype._onAddIncome = function () {
        var _this = this;
        var newIncome = this._initNewIncome();
        this.isExistsIncome(newIncome)
            .subscribe(function (isExisted) {
            if (!isExisted) {
                _this.incomes.push(newIncome);
                _this.addIncome(newIncome);
            }
            else {
                alert("Income already exists");
            }
        });
        this.newIncomeDate = this.addOneDay(this.newIncomeDate);
    };
    IncomeDailyComponent.prototype._addOneDay = function (dateObject) {
        if (dateObject.day < 31) {
            dateObject.day++;
        }
        else if (dateObject.month < 12) {
            dateObject.day = 1;
            dateObject.month++;
        }
        else {
            dateObject.day = 1;
            dateObject.month = 1;
            dateObject.year++;
        }
        return dateObject;
    };
    IncomeDailyComponent.prototype._toggleDetail = function (id) {
        if (id == this.toggledDetail) {
            this.toggledDetail = -1;
        }
        else {
            this.toggledDetail = id;
        }
    };
    IncomeDailyComponent.prototype._getDrinks = function () {
        var _this = this;
        this.drinkServices.getDrinks()
            .subscribe(function (drinks) {
            _this.drinks = drinks;
        }, function (err) { return _this.err = err; });
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
    IncomeDailyComponent.prototype._getIncomes = function () {
        var _this = this;
        this.budgetServices.getIncomesFullDetail()
            .subscribe(function (incomes) { return _this.incomes = incomes; }, function (err) { return _this.err = err; });
    };
    IncomeDailyComponent.prototype._getDate = function (year, month, day) {
        return month + "-" + day + "-" + year;
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
        __metadata('design:paramtypes', [budgetService_1.BudgetServices, commonService_1.CommonServices, drinkService_1.DrinkServices])
    ], IncomeDailyComponent);
    return IncomeDailyComponent;
}());
exports.IncomeDailyComponent = IncomeDailyComponent;
//# sourceMappingURL=incomeDaily.component.js.map
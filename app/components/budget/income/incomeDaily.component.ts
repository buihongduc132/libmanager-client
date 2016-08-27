// TODO : Filtering
// TODO : Sort by Date.


import { Component, OnInit } from '@angular/core'
import { BudgetServices } from '../../../services/budgetService';
import { CommonServices } from '../../../services/commonService';
import { DrinkServices } from '../../../services/drinkService';

import { Income } from '../../../models/income';
import { IncomeDetail } from '../../../models/incomeDetail';
import { Person } from '../../../models/person';
import { Drink } from '../../../models/drink';

import { Utils } from '../../../common/utils';

import * as _ from 'lodash';

@Component({
    selector: 'income-daily'
    , templateUrl: 'app/templates/budget/income/incomeDaily.template.html'
})

export class IncomeDailyComponent {
    // newIncome: Income = new Income();
    newIncomeDate: any = {};
    incomes: Income[] = new Array();
    err: any;
    people: Person[];
    drinks: Drink[];
    showMoreDetails: boolean;
    showDeletedDate: boolean;
    showDeletedDetail: boolean;
    toggledDetail: number;

    newIncomeDetail: IncomeDetail;
    selectedDrink: Drink;
    selectedKeeper: number;

    editingNote: number;

    constructor(private budgetServices: BudgetServices
        , private commonServices: CommonServices
        , private drinkServices: DrinkServices) {

    }

    getAllPeople = this._getAllPeople;
    getDate = this._getDate;
    getIncomes = this._getIncomes;
    addIncome = this._addIncome;
    toggleMoreDetails = this._toggleMoreDetails; // 
    showIncome = this._showIncome;
    toggleDeleted = this._toggleDeleted; //
    deleteIncome = this._deleteIncome; //
    enableIncome = this._enableIncome; //
    getDrinks = this._getDrinks;
    toggleDetail = this._toggleDetail;
    onAddIncome = this._onAddIncome;

    initNewDate = this._initNewDate; // 
    getTotal = this._getTotal; //
    addNewDetail = this._addNewDetail; //
    getSelectDrink = this._getSelectDrink; //
    selectDrink = this._selectDrink; //
    selectKeeper = this._selectKeeper; //
    getFinalDetailPrice = this._getFinalDetailPrice;
    onAddNewDetail = this._onAddNewDetail;

    isExistsIncome = this._isExistsIncome;
    addOneDay = this._addOneDay;
    isValidIncome = this._isValidIncome;
    isValidIncomeDetail = this._isValidIncomeDetail;
    deleteIncomeDetail = this._deleteIncomeDetail;
    enableIncomeDetail = this._enableIncomeDetail;

    prepareAddNewIncomeDetail = this._prepareAddNewIncomeDetail;
    getSelectedKeeper = this._getSelectedKeeper;
    toggleNoting = this._toggleNoting;
    updateIncomeDetail = this._updateIncomeDetail;
    resetEditingNote = this._resetEditingNote;
    showFirstNChars = this._showFirstNChars;
    editIncome = this._editIncome;
    toggleDeletedDetail = this._toggleDeletedDetail;
    isShowDeletedDetail = this._isShowDeletedDetail;

    ngOnInit() {
        this.getIncomes();
        this.getAllPeople();
        this.getDrinks();
        this.initNewDate();
        this.newIncomeDetail = this._initNewIncomeDetail();
        this.showMoreDetails = false;
        this.showDeletedDate = false;
        this.showDeletedDetail = false;
        this.toggledDetail = -1;
        this.editingNote = -1;
        this.selectedDrink = new Drink();
    }

    onSubmit() {
        this.getIncomes();
    }

    _isShowDeletedDetail(detail: IncomeDetail) {
        return !detail.isDeleted || this.showDeletedDetail
    }

    _toggleDeletedDetail() {
        this.showDeletedDetail = !this.showDeletedDetail;
    }

    _showFirstNChars(text: string, numberOfChar: number) {
        return Utils.showFirstNChars(text, numberOfChar);
    }

    _toggleNoting(detailId: number) {
        if (detailId == this.editingNote) {
            this.editingNote = -1;
        }
        else {
            this.editingNote = detailId;
        }
    }


    _enableIncomeDetail(detailId: number) {
        let newDetail = new IncomeDetail;
        newDetail.id = detailId;
        newDetail.isDeleted = false;

        this.budgetServices.editIncomeDetail(newDetail)
            .subscribe(
            details => {
                this.getIncomes();
            }
            , err => this.err = err
            )
    }

    _updateIncomeDetail(detail: IncomeDetail) {
        this.budgetServices.editIncomeDetail(detail)
            .subscribe(
            details => {
                this.getIncomes();
                this.resetEditingNote();
            }
            , err => this.err = err
            )
    }

    _resetEditingNote() {
        this.editingNote = -1;
    }

    _deleteIncomeDetail(detailId: number) {
        let newDetail = new IncomeDetail;
        newDetail.id = detailId;
        newDetail.isDeleted = true;

        this.budgetServices.editIncomeDetail(newDetail)
            .subscribe(
            details => {
                this.getIncomes();
            }
            , err => this.err = err
            )
    }


    _getFinalDetailPrice() {
        return this.newIncomeDetail.price * ((100 - this.newIncomeDetail.discount) / 100);
    }

    _selectKeeper(id: number) {
        this.selectedKeeper = id;
    }

    _selectDrink(id: number) {
        this.selectedDrink = this.getSelectDrink(id);
        this.newIncomeDetail.price = this.selectedDrink.price;
        this.newIncomeDetail.discount = 0;
        this.newIncomeDetail.keeper = new Person();
        this.newIncomeDetail.keeper.id = this.selectedKeeper;
    }

    _addNewDetail() {
        this.budgetServices.addIncomeDetail(this.newIncomeDetail)
            .subscribe(
            incomeDetail => {
                this.getIncomes();
            }
            , err => this.err = err
            );
    }

    _onAddNewDetail(incomeId: number) {
        var preparedNewIncomeDetail = this.prepareAddNewIncomeDetail();
        if (this.isValidIncomeDetail(preparedNewIncomeDetail)) {
            let currentIncome = _.find(this.incomes, ['id', incomeId]);
            currentIncome.IncomeDetails.push(this.newIncomeDetail);
            this.editIncome(currentIncome);
        }
        else {
            alert("Missing income detail");
        }
    }

    _editIncome(income: Income) {
        this.budgetServices.editIncome(income)
            .subscribe(
            income => {
                this.getIncomes();
            }
            , err => this.err = err
            )
    }


    _isValidIncome(income: Income) {
        return income.dayActual &&
            income.monthActual &&
            income.yearActual &&
            income.dayGen &&
            income.monthGen &&
            income.yearGen;
    }

    _isValidIncomeDetail(incomeDetail: IncomeDetail) {
        return incomeDetail.discount != null &&
            incomeDetail.Dish &&
            incomeDetail.keeper &&
            incomeDetail.price != null;
    }

    _prepareAddNewIncomeDetail() {
        this.newIncomeDetail.Dish = this.selectedDrink;
        this.newIncomeDetail.keeper = this.getSelectedKeeper();
        this.newIncomeDetail.isDeleted = false;

        return this.newIncomeDetail;
    }

    _getSelectedKeeper() {
        for (let i = 0; i < this.people.length; i++) {
            if (this.people[i].id == this.selectedKeeper) {
                return this.people[i];
            }
        }
    }

    _getSelectDrink(id: number) {
        for (let i = 0; i < this.drinks.length; i++) {
            if (this.drinks[i].id == id) {
                return this.drinks[i];
            }
        }

        return this.drinks[0];
    }

    _getTotal(income: Income) {
        var total = 0;

        if (income.IncomeDetails) {

            income.IncomeDetails.forEach(detail => {
                if (!detail.isDeleted) {
                    total += detail.price * (100 - detail.discount) / 100;
                }
            });
        }

        return total;
    }

    _isExistsIncome(income: Income) {
        let incomeDate = {
            day: income.dayActual
            , month: income.monthActual
            , year: income.yearActual
        }

        return this.budgetServices.isExistsIncome(incomeDate)
            .map(data => data);
    }

    _addIncome(income: Income) {
        income.total = this.getTotal(income);
        this.budgetServices.addIncome(income)
            .subscribe(
            income => {
                this.getIncomes();
                console.log(this.incomes);
            }
            , err => this.err = err)
    }

    _initNewDate() {
        this.newIncomeDate.day = new Date().getDate();
        this.newIncomeDate.month = new Date().getMonth();
        this.newIncomeDate.year = new Date().getFullYear();
    }

    _initNewIncome() {
        let newIncome = new Income();
        newIncome.dayGen = new Date().getDate();
        newIncome.monthGen = new Date().getMonth();
        newIncome.yearGen = new Date().getFullYear();

        newIncome.dayActual = this.newIncomeDate.day;
        newIncome.monthActual = this.newIncomeDate.month;
        newIncome.yearActual = this.newIncomeDate.year;
        newIncome.total = 0;
        newIncome.isDeleted = false;

        return newIncome;
    }

    _initNewIncomeDetail() {
        let newIncomeDetail = new IncomeDetail();
        newIncomeDetail.discount = 0;
        newIncomeDetail.price = 0;

        return newIncomeDetail;
    }

    _onAddIncome() {
        let newIncome = this._initNewIncome();

        this.isExistsIncome(newIncome)
            .subscribe(isExisted => {
                if (!isExisted) {
                    if (this.isValidIncome(newIncome)) {
                        this.incomes.push(newIncome);
                        this.addIncome(newIncome);
                    }
                    else {
                        alert('Missing Income Info, please check again');
                    }
                }
                else {
                    alert("Income already exists");
                }
            })

        this.newIncomeDate = this.addOneDay(this.newIncomeDate);
    }

    _addOneDay(dateObject: any) {
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
    }

    _toggleDetail(id: number) {
        if (id == this.toggledDetail) {
            this.toggledDetail = -1;
        }
        else {
            this.toggledDetail = id;
        }
    }

    _getDrinks() {
        this.drinkServices.getDrinks()
            .subscribe(
            drinks => {
                this.drinks = drinks
            }
            , err => this.err = err
            )
    }

    _showIncome(isDeleted: boolean) {
        if (!isDeleted || this.showDeletedDate)
            return true;

        return false;
    }

    _toggleMoreDetails() {
        this.showMoreDetails = !this.showMoreDetails;
    }

    _toggleDeleted() {
        this.showDeletedDate = !this.showDeletedDate;
    }

    _enableIncome(income: Income) {
        income.isDeleted = false;
        this.budgetServices.editIncome(income)
            .subscribe(
            income => {
                this.getIncomes();
            }
            , err => this.err = err
            )
    }

    _deleteIncome(income: Income) {
        income.isDeleted = true;
        this.budgetServices.editIncome(income)
            .subscribe(
            income => {
                this.getIncomes();
            }
            , err => this.err = err
            )
    }

    _getIncomes() {
        this.budgetServices.getIncomesFullDetail()
            .subscribe(
            incomes => this.incomes = incomes
            , err => this.err = err
            )
    }

    _getDate(year: number,
        month: number,
        day: number) {
        return `${month}-${day}-${year}`;
    }

    _getAllPeople() {
        this.commonServices.getAllPerson()
            .subscribe(
            people => this.people = people
            , err => this.err = err
            )
    }
}
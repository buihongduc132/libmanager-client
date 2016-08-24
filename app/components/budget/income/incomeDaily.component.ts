import { Component, OnInit } from '@angular/core'

import { BudgetServices } from '../../../services/budgetService';
import { CommonServices } from '../../../services/commonService';

import { Income } from '../../../models/income';
import { Person } from '../../../models/person';

@Component({
    selector: 'income-daily'
    , templateUrl: 'app/templates/budget/income/incomeDaily.template.html'
})

export class IncomeDailyComponent {
    newIncome: Income = new Income();
    incomes: Income[] = new Array();
    err: any;
    people: Person[];
    showMoreDetails: boolean = false;
    showDeletedDate: boolean = false;

    constructor(private budgetServices: BudgetServices
        , private commonServices: CommonServices) {

    }

    getAllPeople = this._getAllPeople;
    getDate = this._getDate;
    getIncomes = this._getIncomes;
    initNewIncome = this._initNewIncome;
    prepareNewIncome = this._prepareNewIncome; 
    addIncome = this._addIncome;
    reInitNewIncome = this._reInitNewIncome;
    toggleMoreDetails = this._toggleMoreDetails;
    showIncome = this._showIncome;
    toggleDeleted = this._toggleDeleted;
    deleteIncome = this._deleteIncome;
    enableIncome = this._enableIncome;


    ngOnInit() {
        this.getIncomes();
        this.getAllPeople();
        this.initNewIncome();
    }

    onSubmit() {
        this.addIncome(this.newIncome);
        this.getIncomes();
        this.reInitNewIncome();
    }
    
    _showIncome(isDeleted: boolean) {
        if(!isDeleted || this.showDeletedDate)
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
            ,err => this.err = err
        )
    }

    _deleteIncome(income: Income) {
        income.isDeleted = true;
        this.budgetServices.editIncome(income)
        .subscribe(
            income => {
                this.getIncomes();
            }
            ,err => this.err = err
        )
    }

    _prepareNewIncome() {
        this.newIncome.isDeleted = false;
        this.newIncome.time = new Date();
        this.newIncome.yearGen = new Date().getFullYear();
        this.newIncome.monthGen = new Date().getMonth();
        this.newIncome.dayGen = new Date().getDate();
    }

    _initNewIncome() {
        this.newIncome = new Income();

        this.newIncome.yearActual = new Date().getFullYear();
        this.newIncome.monthActual = new Date().getMonth();
        this.newIncome.dayActual = new Date().getDate();
    }

    _reInitNewIncome() {
        this.newIncome.total = null;
    }

    _addIncome(income: Income) {
        this.prepareNewIncome();
        this.budgetServices.addIncome(income)
        .subscribe(
            income => {
                this.getIncomes()
            }
            , err => this.err = err
        )
    }

    _getIncomes() {
        this.budgetServices.getIncomes()
            .subscribe(
            incomes => this.incomes = incomes
            , err => this.err = err
            )
    }

    _getDate(year: number,
        month: number,
        day: number) {
        return `${year}-${month}-${day}`;
    }

    _getAllPeople() {
        this.commonServices.getAllPerson()
            .subscribe(
            people => this.people = people
            , err => this.err = err
            )
    }
}
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable }     from 'rxjs/Observable';
import '../rxjsOperators';

import { Logs } from '../common/logs';
import { DAO } from '../common/DAO';

import { Config } from '../config';

import { Income } from '../models/income';
import { IncomeDetail } from '../models/incomeDetail';

@Injectable()
export class BudgetServices {
    constructor(private http: Http) {

    }

    getIncomeByMonth(month: number): Observable<Income[]> {
        //TODO
        return;
    }

    getIncomeByYear(year: number): Observable<Income[]> {
        //TODO
        return;
    }

    getIncomeByDay(day: number): Observable<Income[]> {
        //TODO
        return;
    }

    editIncomeDetail(incomeDetail: IncomeDetail): Observable<IncomeDetail> {
        return this.http.put(`${Config.host}/${Config.route.server.incomeDetail}/${incomeDetail.id}`, incomeDetail)
        .map(DAO.extractData)
        .catch(Logs.handleError);
    }

    getIncomesFullDetail(): Observable<Income[]> {
        return this.http.get(`${Config.host}/${Config.route.server.incomeFullDetail}`)
            .map(DAO.extractData)
            .catch(Logs.handleError);
    }

    getIncomes(): Observable<Income[]> {
        return this.http.get(`${Config.host}/${Config.route.server.income}`)
            .map(DAO.extractData)
            .catch(Logs.handleError);
    }

    editIncome(income: Income): Observable<Income> {
        return this.http.put(`${Config.host}/${Config.route.server.income}/${income.id}`, income)
            .map(DAO.extractData)
            .catch(Logs.handleError);
    }

    addIncome(income: Income): Observable<Income> {
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(`${Config.host}/${Config.route.server.income}`, income, options)
            .map(DAO.extractData)
            .catch(Logs.handleError);
    }

    isExistsIncome(incomeDate): Observable<boolean>{
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(`${Config.host}/${Config.route.server.isExistsIncome}`, incomeDate, options)
            .map(res => {
                return res.json();
            })
            .catch(Logs.handleError);
    }

    addIncomeDetail(incomeDetail: IncomeDetail): Observable<IncomeDetail> {
        alert(incomeDetail);
        let headers = new Headers({ 'Content-type':'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(`${Config.host}/${Config.route.server.incomeDetail}`, incomeDetail, options)
        .map(DAO.extractData)
        .catch(Logs.handleError);
    }
}
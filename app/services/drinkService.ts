import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable }     from 'rxjs/Observable';
import '../rxjsOperators';

import { Logs } from '../common/logs';
import { DAO } from '../common/DAO';
import { Drink } from '../models/drink'

import { Config } from '../config';

@Injectable()
export class DrinkServices {
  constructor(private http: Http) {

  }

  getDrinks(): Observable<Drink[]> {
    return this.http.get(`${Config.host}/${Config.route.server.drink}`)
      .map(DAO.extractData)
      .catch(Logs.handleError);
  }

  getDrink(id: number): Observable<Drink> {
    return this.http.get(`${Config.host}/${Config.route.server.drink}/${id}`)
      .map(DAO.extractData)
      .catch(Logs.handleError);
  }

  addDrink(drink: Drink): Observable<Drink> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${Config.host}/${Config.route.server.drink}`, drink, options)
    .map(DAO.extractData)
    .catch(Logs.handleError);
  }

  deleteDrink(id: number): Observable<Drink> {
    return this.http
    .delete(`${Config.host}/${Config.route.server.drink}/${id}`)
    .map(DAO.extractData)
    .catch(Logs.handleError);
  }
}
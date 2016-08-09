import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable }     from 'rxjs/Observable';

import { Drink } from '../models/drink'

import { Config } from '../config';

@Injectable()


export class DrinkServices {
  constructor(private http: Http) {
    this.http = http;
  }

  private host = Config.host;

  private drinkUrl = Config.route.drink.list;

  private fullDrinkUrl = `${this.host}/${this.drinkUrl}`;

  getDrink(id: number): Observable<Drink> {
    let body = {
      id: id
    }
    return this.http.get(`${this.fullDrinkUrl}/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDrinks(): Observable<Drink[]> {
    return this.http.get(this.fullDrinkUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }


  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
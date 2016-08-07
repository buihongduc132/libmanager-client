import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
// import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Drink } from '../models/drink'

import { Config } from '../config';

@Injectable()


export class DrinkServices {
  constructor (private http: Http) {
    this.http = http;
  }

  private host = Config.host;

  private drinkUrl = Config.route.drink.list;

  private fullDrinkUrl = `${this.host}/${this.drinkUrl}`;

  getDrinks(): Promise<Drink[]> {
      return this.http.get(this.fullDrinkUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
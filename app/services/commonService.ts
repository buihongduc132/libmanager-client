import { Injectable }
from '@angular/core';

import {
    Headers
    , Http
    , Response
    , RequestOptions
} from '@angular/http';

import 'rxjs/add/operator/catch'
import { Observable }
from 'rxjs/Observable';

import { Drink } from '../models/drink';
import { Config } from '../config';
import { Logs } from '../common/logs';
import { DAO } from '../common/DAO';

import { Person } from '../models/person';

@Injectable()
export class CommonServices {
    constructor(private http: Http) {
        this.http = http;

    }

    getAllPerson(): Observable<Person[]> {
        return this.http.get(`${Config.host}/${Config.route.server.people}`)
        .map(DAO.extractData)
        .catch(Logs.handleError);
    }
}

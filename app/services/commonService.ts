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

@Injectable()
export class CommonServices {
    constructor(private http: Http) {
        this.http = http;

    }

}

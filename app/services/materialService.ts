import { Injectable } from '@angular/core';

import { Headers
    , Http
    , RequestOptions
} from '@angular/http';


// import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable }     from 'rxjs/Observable';
import '../rxjsOperators';

import { Logs } from '../common/logs';
import { DAO } from '../common/DAO';
import { Material } from '../models/material'

import { Config } from '../config';

@Injectable()
export class MaterialServices {
    constructor(
        private http: Http
    ) {

    }

    getMaterials(): Observable<Material[]> {
        return this.http
            .get(`${Config.host}/${Config.route.server.material}`)
            .map(DAO.extractData)
            .catch(Logs.handleError);
    }

    getMaterial(id: number): Observable<Material> {
        return this.http
            .get(`${Config.host}/${Config.route.server.material}/${id}`)
            .map(DAO.extractData)
            .catch(Logs.handleError);
    }

    addMaterial(material: Material): Observable<Material> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(`${Config.host}/${Config.route.server.material}`, material, options)
            .map(DAO.extractData)
            .catch(Logs.handleError);
    }

    deleteMaterial(id: number): Observable<Material> {
        return this.http
            .delete(`${Config.host}/${Config.route.server.material}/${id}`)
            .map(DAO.extractData)
            .catch(Logs.handleError);
    }

    editMaterial(material: Material): Observable<Material> {
        return this.http.put(`${Config.host}/${Config.route.server.material}/${material.id}`, material)
            .map(DAO.extractData)
            .catch(Logs.handleError);
    }
}
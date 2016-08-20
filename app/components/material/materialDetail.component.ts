import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Material } from '../../models/material';

import { DisplayCommonDetailInfo } from '../common/displayCommonDetailInfo.component';

import { MaterialServices } from '../../services/materialService';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
    selector: 'material-detail'
    , templateUrl: 'app/templates/material/materialDetail.template.html'

})

export class MaterialDetailComponent implements OnInit, OnDestroy {   
    material: Material = new Material;
    errorMessage: any;
    sub: any;
    id: number;
    params: any;
    // private sub: Subc
    
    getMaterialDetail = this._getMaterialDetail;
    getParams = this._getParams;
    onEditEvent = this._onEditEvent;
    onDeleteEvent = this._onDeleteEvent;

    constructor (
        private materialServices: MaterialServices
        , private route: ActivatedRoute
        , private router: Router
    ) {

    }

    ngOnInit() {
        this.getParams();
        this.id = this.params['id'];
        this.getMaterialDetail(this.id);
    }

    ngOnDestroy() {

    }

    _getParams() {
        this.sub = this.route
        .params.subscribe(
            params => this.params = params
        );
    }

    _getMaterialDetail(id: number) {
        this.materialServices
        .getMaterial(id)
        .subscribe(
            material => this.material = material,
            error => this.errorMessage = error
        );
    }

    _onEditEvent(id: number) {
        this.router.navigate(["/materials", "edit", id]);
    }

    _onDeleteEvent(id: number) {
        this.materialServices.deleteDrink(id)
        .subscribe(
            material => {
                alert(`${material.name} is deleted`);
                this.router.navigate(['/']);
            }
            , error => this.errorMessage = error
        )
    }
}
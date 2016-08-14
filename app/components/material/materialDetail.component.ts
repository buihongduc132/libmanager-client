import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    constructor (
        private materialServices: MaterialServices
        , private route: ActivatedRoute
    ) {

    }

    private material: Material = new Material;
    private errorMessage: any;
    private sub: any;
    private id: number;
    // private sub: Subc

    ngOnInit() {
        this.sub = this.route
        .params.subscribe(
            params => {
                let id = +params['id'];
                this.id = id;
                this.getMaterialDetail(this.id);
            }
        );
    }

    getMaterialDetail(id: number) {
        this.materialServices
        .getMaterial(id)
        .subscribe(
            material => this.material = material,
            error => this.errorMessage = error
        );
    }

    ngOnDestroy() {

    }
}
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Material } from '../../models/material';

import { ShowListComponent } from '../common/showList.component';

import { MaterialServices } from '../../services/materialService';

import { Config } from '../../config';


@Component({
    selector: 'material-list'
    , templateUrl: 'app/templates/material/materialList.template.html'
})

export class MaterialListComponent implements OnInit, OnDestroy {
    constructor(
        private materialServices: MaterialServices
    ) {

    }

    materials: Material[] = new Array();
    errorMessage: any;
    type: string = Config.route.client.material;
    showProperties: string[] = [];
    title: string = "LIB Materials";

    ngOnInit() {
        this.materialServices.getMaterials()
            .subscribe(
            materials => this.materials = materials,
            error => this.errorMessage = error
            )
    }

    ngOnDestroy() {

    }
}
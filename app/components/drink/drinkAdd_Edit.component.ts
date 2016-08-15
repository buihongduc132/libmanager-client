import { Component, OnInit } from '@angular/core';

import { Drink } from '../../models/drink';
import { Material } from '../../models/material';

import { Utils } from '../../common/utils';

import { DrinkServices } from '../../services/drinkService';
import { MaterialServices } from '../../services/materialService';

import * as _ from 'lodash';

@Component({
    selector: 'drink-add-edit'
    , templateUrl: 'app/templates/drink/form/drinkAdd_Edit.template.html'
})

export class DrinkAddEditComponent implements OnInit {
    constructor(
        private drinkServices: DrinkServices
        , private materialServices: MaterialServices
    ) {

    }

    materials: Material[];
    chosenMaterials: Material[] = new Array(;
    errorMessage: string;

    ngOnInit() {
        this.materialServices.getMaterials()
            .subscribe(
            materials => this.materials = materials
            , error => this.errorMessage = error
            )
    }

    chooseMaterial(id: number) {
        var matIndex = _.findIndex(this.materials, function (e) {
            return e.id == id;
        });

        if (this.materials[matIndex]) {
            this.chosenMaterials.push(this.materials[matIndex]);
            this.materials.splice(matIndex,1);
        }
    }

    removeMaterial(id: number) {
        var matIndex = _.findIndex(this.chosenMaterials, function (e) {
            return e.id == id;
        });

        if (this.chosenMaterials[matIndex]) {
            this.materials.push(this.chosenMaterials[matIndex]);
            this.chosenMaterials.splice(matIndex,1);
        }
    }

    goBack() {
        Utils.goBack();
    }
}
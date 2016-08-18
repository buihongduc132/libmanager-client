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
    drink: Drink = new Drink();
    
    parentDrinks: Drink[] = new Array();
    materials: Material[];
    chosenMaterials: Material[] = new Array();
    errorMessage: string;

    ngOnInit() {
        this.getMaterials();
        this.getDrinks();
    }

    getMaterials() {
        this.materialServices.getMaterials()
            .subscribe(
            materials => this.materials = materials
            , error => this.errorMessage = error
            )

    }

    getDrinks() {
        this.drinkServices.getDrinks()
            .subscribe(
            drinks => this.parentDrinks = drinks
            , error => this.errorMessage = error
            )
    }

    onItemAdded(id: number) {
        this.chooseMaterial(id);
    }

    chooseMaterial(id: number) {
        var matIndex = _.findIndex(this.materials, function (e) {
            return e.id == id;
        });

        if (this.materials[matIndex]) {
            this.chosenMaterials.push(this.materials[matIndex]);
            this.materials.splice(matIndex, 1);
        }
    }

    removeMaterialFromChosen(id: number) {
        var matIndex = _.findIndex(this.chosenMaterials, function (e) {
            return e.id == id;
        });

        if (this.chosenMaterials[matIndex]) {
            this.materials.push(this.chosenMaterials[matIndex]);
            this.chosenMaterials.splice(matIndex, 1);
        }
    }

    goBack() {
        Utils.goBack();
    }
}
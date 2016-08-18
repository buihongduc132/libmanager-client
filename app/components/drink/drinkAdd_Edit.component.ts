import { Component, OnInit } from '@angular/core';

import { Drink } from '../../models/drink';
import { Material } from '../../models/material';

import { Router } from '@angular/router';

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
        , private router: Router
    ) {

    }
    drink: Drink = new Drink();

    parentDrinks: Drink[] = new Array();
    materials: Material[];
    errorMessage: string;

    ngOnInit() {
        this.getMaterials();
        this.getDrinks();
        this.drink.materials = new Array<Material>();
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
        var matIndex = this.findIndex(this.materials, id);

        if (this.materials[matIndex]) {
            this.drink.materials.push(this.materials[matIndex]);
            this.materials.splice(matIndex, 1);
        }
    }

    removeMaterialFromDrink(id: number) {
        var matIndex = this.findIndex(this.drink.materials, id);

        if (this.drink.materials[matIndex]) {
            this.materials.push(this.drink.materials[matIndex]);
            this.drink.materials.splice(matIndex, 1);
        }
    }

    findIndex(items: any[], id: number) {
        return _.findIndex(items, function (e) {
            return e.id == id;
        });
    }

    onSubmit() {
        this.drinkServices.addDrink(this.drink)
        .subscribe(
            drink => {
                this.router.navigate(['/drinks']);
            }
            , error => this.errorMessage = error
        )
    }

    goBack() {
        Utils.goBack();
    }
}
import { Component, OnInit } from '@angular/core';

import { Drink } from '../../models/drink';
import { Material } from '../../models/material';

import { Router, ActivatedRoute } from '@angular/router';

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
        , private route: ActivatedRoute
    ) {

    }
    drink: Drink = new Drink();
    sub: any;

    id: number;
    parentDrinks: Drink[] = new Array();
    materials: Material[];
    errorMessage: string;

    ngOnInit() {
        this.getMaterials();
        this.getDrinks();
        this.drink.materials = new Array<Material>();

        this.sub = this.route
            .params.subscribe(
            params => {
                let id = +params['id'];
                if (id) {

                    this.id = id;
                    this.getDrinkDetail(id);
                }
            }
            )
    }

    getDrinkDetail(id: number) {
        this.drinkServices.getDrink(id)
            .subscribe(
            drink => this.drink = drink
            , error => this.errorMessage = error
            )
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
        if(this.id) {
            this.editDrink(this.drink);
        }
        else {
            this.addDrink(this.drink);
        }
    }

    editDrink(drink: Drink) {
        this.drinkServices.editDrink(this.drink)
        .subscribe(
            drink => {
                this.router.navigate(['/drinks', drink.id]);
            }
            , error => this.errorMessage = error
        )
    }

    addDrink(drink: Drink) {

        this.drinkServices.addDrink(this.drink)
            .subscribe(
            drink => {
                this.router.navigate(['/drinks']);
            }
            , error => this.errorMessage = error
            )
    }

    goBack() {
        Utils.goBack(this.router);
    }
}
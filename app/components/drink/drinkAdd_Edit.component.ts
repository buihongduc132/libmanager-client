import { Component, OnInit } from '@angular/core';

import { Drink } from '../../models/drink';
import { Material } from '../../models/material';

import { Router, ActivatedRoute } from '@angular/router';

import { Utils } from '../../common/utils';

import { FormContainerComponent } from '../common/formContainer.component.ts';
import { DrinkServices } from '../../services/drinkService';
import { MaterialServices } from '../../services/materialService';

import * as _ from 'lodash';

@Component({
    selector: 'drink-add-edit'
    , templateUrl: 'app/templates/drink/form/drinkAdd_Edit.template.html'
})

export class DrinkAddEditComponent implements OnInit {
    drink: Drink = new Drink();
    sub: any;
    id: number;
    parentDrinks: Drink[] = new Array();
    materials: Material[];
    errorMessage: string;
    params: any;

    getDrinkDetail = this._getDrinkDetail;
    getMaterials = this._getMaterials;
    getDrinks = this._getDrinks;
    onItemAdded = this._onItemAdded;
    chooseMaterial = this._chooseMaterial;
    removeMaterialFromDrink = this._removeMaterialFromDrink;
    findIndex = this._findIndex;
    editDrink = this._editDrink;
    addDrink = this._addDrink;
    goBack = this._goBack;
    getParams = this._getParams;

    constructor(
        private drinkServices: DrinkServices
        , private materialServices: MaterialServices
        , private router: Router
        , private route: ActivatedRoute
    ) {

    }
    ngOnInit() {
        this.getMaterials();
        this.getDrinks();
        this.drink.materials = new Array<Material>();
        this.getParams();
        
        if (this.id) {
            this.getDrinkDetail(this.id);
        }
    }

    onSubmit() {
        if (this.id) {
            this._editDrink(this.drink);
        }
        else {
            this._addDrink(this.drink);
        }
    }

    _getParams() {
        this.sub = this.route
            .params.subscribe(
            params => {
                this.id = params['id']
            });
    }

    _getDrinkDetail(id: number) {
        this.drinkServices.getDrink(id)
            .subscribe(
            drink => this.drink = drink
            , error => this.errorMessage = error
            )
    }

    _getMaterials() {
        this.materialServices.getMaterials()
            .subscribe(
            materials => this.materials = materials
            , error => this.errorMessage = error
            )

    }

    _getDrinks() {
        this.drinkServices.getDrinks()
            .subscribe(
            drinks => this.parentDrinks = drinks
            , error => this.errorMessage = error
            )
    }

    _onItemAdded(id: number) {
        this._chooseMaterial(id);
    }

    _chooseMaterial(id: number) {
        var matIndex = this._findIndex(this.materials, id);

        if (this.materials[matIndex]) {
            this.drink.materials.push(this.materials[matIndex]);
            this.materials.splice(matIndex, 1);
        }
    }

    _removeMaterialFromDrink(id: number) {
        var matIndex = this.findIndex(this.drink.materials, id);

        if (this.drink.materials[matIndex]) {
            this.materials.push(this.drink.materials[matIndex]);
            this.drink.materials.splice(matIndex, 1);
        }
    }

    _findIndex(items: any[], id: number) {
        return _.findIndex(items, function (e) {
            return e.id == id;
        });
    }

    _editDrink(drink: Drink) {
        this.drinkServices.editDrink(this.drink)
            .subscribe(
            drink => {
                this.router.navigate(['/drinks', drink.id]);
            }
            , error => this.errorMessage = error);
    }

    _addDrink(drink: Drink) {

        this.drinkServices.addDrink(this.drink)
            .subscribe(
            drink => {
                this.router.navigate(['/drinks']);
            }
            , error => this.errorMessage = error
            )
    }

    _goBack() {
        Utils.goBack();
    }
}
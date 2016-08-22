import { Component, OnInit } from '@angular/core';

import { Drink } from '../../models/drink';
import { Material } from '../../models/material';
import { DrinkMaterial } from '../../models/drinkMaterial';

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
    chosenMaterials: Material[] = new Array<Material>();
    errorMessage: string;
    params: any;
    amount: number = 0;

    getDrinkDetail = this._getDrinkDetail;
    getMaterials = this._getMaterials;
    getDrinks = this._getDrinks;
    onItemAdded = this._onItemAdded;
    chooseMaterial = this._chooseMaterial;
    onRemoveMaterial = this._onRemoveMaterial;
    editDrink = this._editDrink;
    addDrink = this._addDrink;
    goBack = this._goBack;
    getParams = this._getParams;
    resetAmount = this._resetAmount;
    getMaterialByRelationshipId = this._getMaterialByRelationshipId;
    moveToChosen = this._moveToChosen;
    removeFromChosen = this._removeFromChosen;
    addMaterialToDrink = this._addMaterialToDrink;
    removeMaterial = this._removeMaterial;
    getIndex = this._getIndex;
    removeMaterialAlreadyInDrink = this._removeMaterialAlreadyInDrink;

    constructor(
        private drinkServices: DrinkServices
        , private materialServices: MaterialServices
        , private router: Router
        , private route: ActivatedRoute
    ) {

    }
    ngOnInit() {
        this.drink.dishMaterials = new Array<DrinkMaterial>();
        this.getParams();

        if (this.id) {
            this.getDrinkDetail(this.id);
        }
        this.getMaterials();

        console.log(this.amount);
    }

    onSubmit() {
        // console.log(this.drink);
        if (this.id) {
            this._editDrink(this.drink);
        }
        else {
            this._addDrink(this.drink);
        }
    }

    _removeMaterialAlreadyInDrink() {
        let allMatInDrink = _.map(this.drink.dishMaterials, 'material');
        let matIndexes = _.map(this.materials, 'id');

        let allIds = _.map(allMatInDrink, 'id');

        let remainingMat = _.filter(this.materials, mat => {
            return allIds.indexOf(mat.id) < 0;
        });

        let removedMat = _.filter(this.materials, mat => {
            return allIds.indexOf(mat.id) >= 0;
        });

        this.materials = remainingMat;
        this.chosenMaterials = removedMat;
    }

    _getParams() {
        this.sub = this.route
            .params.subscribe(
            params => {
                this.id = params['id']
            });
    }

    _getDrinkDetail(id: number) {
        this.drinkServices.getDrinkWithMaterials(id)
            .subscribe(
            drink => { 
                this.drink = drink;
                this.removeMaterialAlreadyInDrink();
            }
            , error => this.errorMessage = error
            );
    }

    _getMaterials() {
        return this.materialServices.getMaterials()
            .subscribe(
            materials => {
                this.materials = materials
            }
            , error => this.errorMessage = error
            );
    }

    _getDrinks() {
        return this.drinkServices.getDrinks()
            .subscribe(
            drinks => this.parentDrinks = drinks
            , error => this.errorMessage = error
            );
    }

    _onItemAdded(id: number) {
        this._chooseMaterial(id);
    }

    _getMaterialByRelationshipId(id: number): Material {
        return _.find(this.materials, function (mat) {
            return mat.id == id;
        });
    }

    _chooseMaterial(id: number) {
        if (id == -1) {
            return;
        }

        this.addMaterialToDrink(id);
        this.moveToChosen(id);
        this.resetAmount();
    }

    _addMaterialToDrink(id: number) {
        let drinkMaterial = new DrinkMaterial;
        drinkMaterial.amount = this.amount;
        drinkMaterial.material = this.getMaterialByRelationshipId(id);
        this.drink.dishMaterials.push(drinkMaterial);
    }

    _moveToChosen(id: number) {
        var matIndex = this.getIndex(this.materials, id);

        if (this.materials[matIndex]) {
            this.chosenMaterials.push(this.materials[matIndex]);
            this.materials.splice(matIndex, 1);
        }
    }

    _removeFromChosen(id: number) {
        var matIndex = this.getIndex(this.chosenMaterials, id);
        if (this.chosenMaterials[matIndex]) {
            
            this.materials.push(this.chosenMaterials[matIndex]);
            this.chosenMaterials.splice(matIndex, 1);
        }
    }

    _getIndex(items: Array<any>, id: number) {
        return items.findIndex(item => {
            return item.id == id;
        });
    }
    
    _resetAmount() {
        this.amount = 0;
    }

    _onRemoveMaterial(id: number) {
        this.removeMaterial(id);
        this.removeFromChosen(id);
    }

    _removeMaterial(id: number) {
        let matIndex = this.getIndex(this.drink.dishMaterials, id);

        this.drink.dishMaterials.splice(matIndex, 1);
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
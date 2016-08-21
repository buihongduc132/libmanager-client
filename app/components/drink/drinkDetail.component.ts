import { Component, OnInit, OnDestroy } from '@angular/core';

import { DrinkServices } from '../../services/drinkService';

import { DisplayCommonDetailInfo } from '../common/displayCommonDetailInfo.component';

import { Drink } from '../../models/drink';
import { Material } from '../../models/material';
import { DrinkMaterial } from '../../models/drinkMaterial';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'drink-detail'
    , templateUrl: 'app/templates/drink/drinkDetail.template.html'

})

export class DrinkDetailComponent implements OnInit, OnDestroy {
    drink: Drink = new Drink;
    errorMessage: any;
    id: number;
    sub: any;
    params: any;
    totalPrice: number;

    getDrinkDetail = this._getDrinkDetail;
    onEditEvent = this._onEditEvent;
    onDeleteEvent = this._onDeleteEvent;
    getParams = this._getParams;
    getUnitPrice = this._getUnitPrice;
    getMaterialPrice = this._getMaterialPrice;
    getTotalMaterialPrice = this._getTotalMaterialPrice;

    constructor(
        private drinkServices: DrinkServices
        , private router: Router
        , private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.getParams();
        this.id = this.params['id'];
        this.getDrinkDetail(this.id);
    }

    ngOnDestroy() {

    }

    _getTotalMaterialPrice() {
        var totalPrice = 0;

        this.drink.dishMaterials.forEach(material => {
                totalPrice += this.getMaterialPrice(material);
        })

        return Math.ceil(totalPrice);
    }

    _getMaterialPrice(drinkMat: DrinkMaterial) {
        return this.getUnitPrice(drinkMat.material) * drinkMat.amount;
    }

    _getUnitPrice(material: Material) {
        return material.price / material.containerAmount;
    }

    _getParams() {
        this.sub = this.route
            .params.subscribe(
            params => this.params = params
            );
    }

    _getDrinkDetail(id: number) {
        return this.drinkServices.getDrinkWithMaterials(id)
            .subscribe(
            drink => {
                this.drink = drink;
                this.totalPrice = this.getTotalMaterialPrice();
            },
            error => this.errorMessage = error
            );
    }

    _onEditEvent(id: number) {
        return this.router.navigate(["/drinks", "edit", id]);
    }

    _onDeleteEvent(id: number) {
        return this.drinkServices.deleteDrink(id)
            .subscribe(
            drink => {
                alert(`${drink.name} is deleted`);
                this.router.navigate(['/']);
            }
            , error => this.errorMessage = error
            )
    }

}



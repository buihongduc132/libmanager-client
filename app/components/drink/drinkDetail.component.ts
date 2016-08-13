import { Component, OnInit, OnDestroy } from '@angular/core';

import { DrinkServices } from '../../services/drinkService';

import { DisplayCommonDetailInfo } from '../common/displayCommonDetailInfo.component';

import { Drink } from '../../models/drink';

@Component({
    selector: 'drink-detail'
    , templateUrl: 'app/templates/drink/drinkDetail.template.html'

})

export class DrinkDetailComponent implements OnInit, OnDestroy {
    constructor( private drinkServices: DrinkServices) {

    }

    drink: Drink = new Drink;
    errorMessage: any;

    ngOnInit() {
        this.getDrinkDetail(1);
    }

    getDrinkDetail(id: number) {
        this.drinkServices.getDrink(id)
        .subscribe(
            drink => this.drink = drink,
            error => this.errorMessage = error
        )
    }

    ngOnDestroy() {

    }
}



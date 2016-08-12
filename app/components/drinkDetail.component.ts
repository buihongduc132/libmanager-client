import { Component, OnInit, OnDestroy } from '@angular/core';

import { DrinkServices } from '../services/drinkService';
import { Drink } from '../models/drink';
import { ShowListComponent } from './common/showList.component';

@Component({
    selector: 'drink-detail'
    , templateUrl: 'app/templates/drinkDetail.template.html'
    , providers: [
        DrinkServices
    ]
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



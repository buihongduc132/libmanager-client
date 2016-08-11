import { Component, OnInit } from '@angular/core';

import { Drink } from '../models/drink';
import { DrinkServices } from '../services/drinkService';
import { ShowListComponent } from './common/showList';

@Component({
    selector: 'drink-list',
    templateUrl: 'app/templates/drinkList.html',
    directives: [ShowListComponent]
})

export class DrinkListComponent implements OnInit {
    constructor(
        private drinkServices: DrinkServices
    ) {

    }

    drinks: Drink[];
    drink: Drink;
    showProperties: string[] = [];
    errorMessage: any;

    ngOnInit() {
        // this.drinkServices.getDrink(1)
        //     .subscribe(
        //     drink => {
        //         this.drink = drink
        //         console.log(drink);
        //     },
        //     error => this.errorMessage = error);

        this.drinkServices.getDrink(1)
            .subscribe(
            drink => this.drink = drink,
            error => this.errorMessage = error);

    }
}
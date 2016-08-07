import { Component, OnInit } from '@angular/core';

import { Drink } from '../models/drink';
import { DrinkServices } from '../services/drinkService';
import { ShowListComponent } from './common/showList'; 

@Component({
    selector: 'drink-list',
    templateUrl: 'app/templates/drinkList.html',
    directives: [ ShowListComponent ]
})

export class DrinkListComponent implements OnInit {
    constructor(
        private drinkServices: DrinkServices
    ) {

    }

    drinks: Drink[];
    showProperties: string[] = [];

    ngOnInit() {
        this.drinkServices.getDrinks()
        .then(data => {
            this.drinks = data;
        })
        .catch(error => this.drinks = error);
    }
}
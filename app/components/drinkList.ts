import { Component, OnInit, OnDestroy } from '@angular/core';

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

    drinks: Drink[] = new Array();
    showProperties: string[] = [];
    errorMessage: any;

    ngOnDestroy() {

    }
    
    ngOnInit() {
        this.getDrinks();
    }

    getDrinks() {
        this.drinkServices.getDrinks()
            .subscribe(
            drinks => this.drinks = drinks,
            error => this.errorMessage = error);
    }
}
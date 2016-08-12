import { Component, OnInit, OnDestroy } from '@angular/core';

import { Drink } from '../../models/drink';
import { DrinkServices } from '../../services/drinkService';
import { ShowListComponent } from '../common/showList.component';

import { Config } from '../../config';

@Component({
    selector: 'drink-list'
    , templateUrl: 'app/templates/drink/drinkList.template.html'
    , directives: [
        ShowListComponent
    ]
    , providers: [
        DrinkServices
    ]
})

export class DrinkListComponent implements OnInit {
    constructor(
        private drinkServices: DrinkServices
    ) {
    }

    drinks: Drink[] = new Array();
    showProperties: string[] = [];
    errorMessage: any;
    type: string = Config.route.client.drink.list;

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
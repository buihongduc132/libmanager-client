import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { DrinkServices } from '../services/drinkService';
import { Drink } from '../models/drink';
import { ShowListComponent } from './common/showList';

@Component({
    selector: 'drink-detail',
    templateUrl: 'app/templates/drinkDetail.html',
    directives: [ShowListComponent]
})

export class DrinkDetailComponent implements OnInit, OnDestroy {
    drink: Drink = new Drink;
    sub: any;
    errorMessage: any;

    constructor(
        private drinkServices: DrinkServices,
        private route: ActivatedRoute) {
    }

    ngOnDestroy() {
        this.sub.unsubcribe();
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.getDrink(id);
        })
    }

    getDrink(id: number) {
        this.drinkServices.getDrink(id)
            .subscribe(
            drink => { 
                this.drink = drink;
            },
            error => this.errorMessage = error);

    }
}
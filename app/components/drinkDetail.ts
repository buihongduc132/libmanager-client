import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { DrinkServices } from '../services/drinkService';
import { Drink } from '../models/drink';

@Component({
    selector: 'drink-detail',
    templateUrl: 'app/templates/drinkDetail.html'
})

export class DrinkDetailComponent implements OnInit, OnDestroy {
    drink: Drink;
    sub: any;

    constructor(private drinkService: DrinkServices,
        private route: ActivatedRoute) {

    }

    ngOnDestroy() {
        this.sub.unsubcribe();
    }

    ngOnInit() {
                    this.drinkService.getDrink(1)
            .subscribe(
                drink => {
                    console.log(drink);
                    this.drink = drink;
                    console.log(this.drink);
                },
                error => this.errorMessage = error
            )
        // this.sub = this.route.params.subscribe(params => {
        //     let id = +params['id'];
        //     this.drinkService.getDrink(id)
        //     .subscribe(
        //         drink => this.drink = drink,
        //         error => this.errorMessage = error
        //     )
        // })
    }

    getDrink(id: number) {

    }
}
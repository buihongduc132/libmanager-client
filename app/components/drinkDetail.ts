import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { DrinkServices } from '../services/drinkService';
import { Drink } from '../models/drink';
import { ShowListComponent } from './common/showList';

@Component({
    selector: 'drink-detail',
    templateUrl: 'app/templates/drinkDetail.html',
    directives: [ShowListComponent]
})

export class DrinkDetailComponent implements OnInit {
    drink: Drink;
    sub: any;
    errorMessage: any;

    constructor(
        private drinkServices: DrinkServices,
        private route: ActivatedRoute) {
    }

    // ngOnDestroy() {
    //     this.sub.unsubcribe();
    // }

    ngOnInit() {
        // this.drinkService.getDrink(1)
        //     .subscribe(
        //     drink => {   
        //         this.drink = drink;
        //         console.log(this.drink);
        //     },
        //     error => this.errorMessage = error
        //     )


        this.drinkServices.getDrinks()
            .subscribe(
            drinks => { 
                this.drink = drinks[0];
            },
            error => this.errorMessage = error);
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
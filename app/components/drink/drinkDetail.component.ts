import { Component, OnInit, OnDestroy } from '@angular/core';

import { DrinkServices } from '../../services/drinkService';

import { DisplayCommonDetailInfo } from '../common/displayCommonDetailInfo.component';

import { Drink } from '../../models/drink';

import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'drink-detail'
    , templateUrl: 'app/templates/drink/drinkDetail.template.html'

})

export class DrinkDetailComponent implements OnInit, OnDestroy {
    constructor(
        private drinkServices: DrinkServices
        , private route: ActivatedRoute) {

    }

    drink: Drink = new Drink;
    errorMessage: any;
    id: any;
    sub: any;

    ngOnInit() {
        this.sub = this.route
        .params.subscribe(
            params => {
                let id = +params['id'];
                this.id = id;
                this.getDrinkDetail(this.id);
            }
        );
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


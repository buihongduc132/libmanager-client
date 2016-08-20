import { Component, OnInit, OnDestroy } from '@angular/core';

import { DrinkServices } from '../../services/drinkService';

import { DisplayCommonDetailInfo } from '../common/displayCommonDetailInfo.component';

import { Drink } from '../../models/drink';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'drink-detail'
    , templateUrl: 'app/templates/drink/drinkDetail.template.html'

})

export class DrinkDetailComponent implements OnInit, OnDestroy {
    drink: Drink = new Drink;
    errorMessage: any;
    id: number;
    sub: any;
    params: any; 

    getDrinkDetail = this._getDrinkDetail;
    onEditEvent = this._onEditEvent;
    onDeleteEvent = this._onDeleteEvent;
    getParams = this._getParams;

    constructor(
        private drinkServices: DrinkServices
        , private router: Router
        , private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.getParams();
        this.id = this.params['id'];
        this.getDrinkDetail(this.id);
    }

    ngOnDestroy() {

    }

    _getParams() {
        this.sub = this.route
        .params.subscribe(
            params => this.params = params
        );
    }

    _getDrinkDetail(id: number) {
        this.drinkServices.getDrink(id)
        .subscribe(
            drink => this.drink = drink,
            error => this.errorMessage = error
        )
    }

    _onEditEvent(id: number) {
        this.router.navigate(["/drinks", "edit", id]);
    }

    _onDeleteEvent(id: number) {
        this.drinkServices.deleteDrink(id)
        .subscribe(
            drink => {
                alert(`${drink.name} is deleted`);
                this.router.navigate(['/']);
            }
            , error => this.errorMessage = error
        )
    }

}



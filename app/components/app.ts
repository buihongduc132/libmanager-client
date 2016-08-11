import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { DrinkListComponent } from './drinkList';
import { DrinkDetailComponent } from './drinkDetail';
import { ShowListComponent } from './common/showList';

import { DrinkServices } from '../services/drinkService';

@Component( {
    selector: 'lib-app',
    templateUrl: 'app/templates/app.html',
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        DrinkServices
    ]
})

export class AppComponent {

}
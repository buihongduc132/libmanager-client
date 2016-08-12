import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { DrinkListComponent } from './drinkList.component';
// import { DrinkDetailComponent } from './drinkDetail.component';
import { ShowListComponent } from './common/showList.component';

import { DrinkServices } from '../services/drinkService';

@Component( {
    selector: 'lib-app',
    templateUrl: 'app/templates/app.template.html',
    directives: [
        // ROUTER_DIRECTIVES
    ],
    providers: [
        // DrinkServices
    ]
})

export class AppComponent {

}
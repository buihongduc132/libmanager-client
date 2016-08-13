import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { DrinkListComponent } from './drink/drinkList.component';
// import { DrinkDetailComponent } from './drinkDetail.component';
import { ShowListComponent } from './common/showList.component';

import { DrinkServices } from '../services/drinkService';

import { Config } from '../config';

@Component( {
    selector: 'lib-app',
    templateUrl: 'app/templates/app.template.html'
})

export class AppComponent {
}
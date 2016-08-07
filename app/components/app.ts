import { Component }
from '@angular/core';

import { RouteConfig, 
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS } 
from '@angular/router-deprecated';

import { DrinkListComponent } from './drinkList';
// import { ShowListComponent } from './common/showList';

import { DrinkServices } from '../services/drinkService';

@Component( {
    selector: 'lib-app',
    templateUrl: 'app/templates/app.html',
    directives: [
        ROUTER_DIRECTIVES,
        DrinkListComponent
    ],
    providers: [
        ROUTER_PROVIDERS,
        DrinkServices
    ]
})

@RouteConfig([
    {
        path: '/drinks',
        name: 'Drinks',
        component: DrinkListComponent,
        useAsDefault: true
    }
])

export class AppComponent {

}
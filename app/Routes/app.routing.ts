import { Routes, RouterModule } 
from '@angular/router';

import { DrinkListComponent } 
from '../components/drink/drinklist.component';

import { MaterialListComponent } 
from '../components/material/materialList.component';

import { Config } from '../config';

const appRoutes: Routes = [
    // {
    //     path: Config.route.client.drink.list
    //     , component: DrinkListComponent
    // }
    // , {
    //     path: Config.route.client.material.list
    //     , component: MaterialListComponent
    // }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
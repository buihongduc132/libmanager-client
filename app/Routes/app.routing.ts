import { Routes, RouterModule } 
from '@angular/router';

import { DrinkListComponent } 
from '../components/drink/drinklist.component';

import { MaterialListComponent } 
from '../components/material/materialList.component';

import { Config } from '../config';

const appRoutes: Routes = [
    {
        path: ''
        // , component: DrinkListComponent
        , redirectTo: '/drinks'
        , pathMatch: 'full'
    }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
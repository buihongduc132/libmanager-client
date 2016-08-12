import { Routes, RouterModule } 
from '@angular/router';

import { DrinkListComponent } 
from '../components/drinklist.component';

import { DrinkDetailComponent }
from '../components/drinkDetail.component';

const appRoutes: Routes = [
    {
        path: 'drinks'
        , component: DrinkListComponent
    }
    , {
        path: 'drinks/:id'
        , component: DrinkDetailComponent
    }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
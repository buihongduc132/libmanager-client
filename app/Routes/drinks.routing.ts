import { Routes, RouterModule } 
from '@angular/router';

import { DrinkListComponent } 
from '../components/drink/drinklist.component';

import { DrinkDetailComponent } 
from '../components/drink/drinkDetail.component';

import { Config } from '../config';

const drinksRoutes: Routes = [
    {
        path: Config.route.client.drink.list
        , component: DrinkListComponent
    }
    , {
        path: `${Config.route.client.drink.list}/:id`
        , component: DrinkDetailComponent
    }
]

export const drinksRouting = 
RouterModule.forChild(drinksRoutes);
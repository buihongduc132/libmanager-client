import { Routes, RouterModule } 
from '@angular/router';

import { DrinkRootComponent } 
from '../components/drink/drinkRoot.component';

import { DrinkListComponent } 
from '../components/drink/drinklist.component';

import { DrinkDetailComponent } 
from '../components/drink/drinkDetail.component';

import { Config } from '../config';

const drinksRoutes: Routes = [
    {
        path: Config.route.client.drink.list
        , component: DrinkRootComponent
        , children: [
            {
                path: ''
                , component: DrinkListComponent
            }
            , {
                path: ':id'
                , component: DrinkDetailComponent
            }
        ]
    }
]

export const drinksRouting = 
RouterModule.forChild(drinksRoutes);
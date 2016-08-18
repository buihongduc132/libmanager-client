import {
    Routes
    , RouterModule
} from '@angular/router';

import { DrinkRootComponent }
from '../components/drink/drinkRoot.component';

import { DrinkListComponent }
from '../components/drink/drinklist.component';

import { DrinkDetailComponent }
from '../components/drink/drinkDetail.component';

import { DrinkAddEditComponent }
from '../components/drink/drinkAdd_Edit.component';

import { Config } from '../config';

const drinksRoutes: Routes = [
    {
        path: Config.route.client.drink
        , component: DrinkRootComponent
        , children: [
            {
                path: Config.route.client.commonAction.add
                , component: DrinkAddEditComponent
            }
            , {
                path: `${Config.route.client.commonAction.edit}/:id`
                , component: DrinkAddEditComponent
            } 
            , {
                path: ':id'
                , component: DrinkDetailComponent
            }
            , {
                path: ''
                , component: DrinkListComponent
            }
        ]
    }
]

export const drinksRouting =
    RouterModule.forChild(drinksRoutes);
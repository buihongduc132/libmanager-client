import { Routes, RouterModule } 
from '@angular/router';

import { DrinkListComponent } 
from '../components/drinklist.component';

import { DrinkDetailComponent } 
from '../components/drinkDetail.component';

const drinksRoutes: Routes = [
    {
        path: 'drinks'
        , component: DrinkListComponent
    }
    , {
        path: 'drinks/:id'
        , compoennt: DrinkDetailComponent
    }
]

export const drinksRouting = RouterModule.forChild(drinksRoutes);
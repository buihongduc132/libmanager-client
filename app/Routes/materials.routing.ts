import {
    Routes
    , RouterModule
} from '@angular/router';

import { MaterialListComponent }
from '../components/material/materialList.component';

import { MaterialDetailComponent }
from '../components/material/materialDetail.component';

import { Config } from '../config';

const materialsRoutes: Routes = [
    {
        path: Config.route.client.material.list
        , component: MaterialListComponent
    }
    , {
        path: `${Config.route.client.material.list}/:id`
        , component: MaterialDetailComponent
    }
]

export const materialsRouting = 
RouterModule.forChild(materialsRoutes);
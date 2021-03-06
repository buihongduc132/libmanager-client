import {
    Routes
    , RouterModule
} from '@angular/router';

import { MaterialListComponent }
from '../components/material/materialList.component';

import { MaterialDetailComponent }
from '../components/material/materialDetail.component';

import { MaterialRootComponent }
from '../components/material/materialRoot.component';

import { MaterialAddEditComponent } 
from '../components/material/materialAdd_Edit.component';

import { Config } from '../config';

const materialsRoutes: Routes = [
    {
        path: Config.route.client.material
        , component: MaterialRootComponent
        , children: [
            {
                path: Config.route.client.commonAction.add
                , component: MaterialAddEditComponent
            }
            , {
                path: `${Config.route.client.commonAction.edit}/:id`
                , component: MaterialAddEditComponent
            }
            , {
                path: ':id'
                , component: MaterialDetailComponent
            }
            , {
                path: ''
                , component: MaterialListComponent
            }
        ]
    }
]

export const materialsRouting =
    RouterModule.forChild(materialsRoutes);
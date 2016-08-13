import { NgModule }
from '@angular/core';

import { MaterialListComponent }
from '../components/material/materialList.component';

import { MaterialDetailComponent }
from '../components/material/materialDetail.component';

import { MaterialRootComponent }
from '../components/material/materialRoot.component';

import { MaterialServices }
from '../services/materialService';

import { CommonModule }
from './common.module';

@NgModule({
    imports: [
        CommonModule
    ]
    , declarations: [
        MaterialListComponent
        , MaterialDetailComponent
        , MaterialRootComponent
    ]
    , providers: [
        MaterialServices
    ]
})


export class MaterialModule {

}
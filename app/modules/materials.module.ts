import { NgModule }
from '@angular/core';

import { CommonModule }
from '@angular/common';

import { MaterialListComponent }
from '../components/material/materialList.component';

import { MaterialDetailComponent }
from '../components/material/materialDetail.component';

import { MaterialServices }
from '../services/materialService';

import { ShowListComponent }
from '../components/common/showList.component';

@NgModule({
    imports: [

    ]
    , declarations: [
        MaterialListComponent
        , MaterialDetailComponent
        , ShowListComponent
    ]
    , providers: [
        MaterialServices
    ]
})


export class MaterialModule {

}
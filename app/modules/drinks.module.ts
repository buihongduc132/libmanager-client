import { NgModule } 
from '@angular/core';

import { CommonModule } 
from '@angular/common';

import { DrinkListComponent }
from '../components/drink/drinkList.component';

import { DrinkDetailComponent }
from '../components/drink/drinkDetail.component';

import { DrinkServices }
from '../services/drinkService';

import { ShowListComponent } 
from '../components/common/showList.component';

@NgModule({
    imports: [

    ]
    , declarations: [
        DrinkListComponent
        , DrinkDetailComponent
        , ShowListComponent
    ]
    , providers: [
        DrinkServices
    ]
})


export class DrinkModule {
    
}
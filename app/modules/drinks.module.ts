import { NgModule } 
from '@angular/core';

import { CommonModule } 
from '@angular/common';

import { DrinkListComponent }
from '../components/drinkList.component';

// import { DrinkDetailComponent }
// from '../components/drinkDetail.component';

import { DrinkServices }
from '../services/drinkService';

@NgModule({
    imports: [
        CommonModule
    ]
    , declarations: [
        DrinkListComponent
        // , Drin
    ]
    , providers: [
        DrinkServices
    ]
});

export class DrinkModule {
    
}
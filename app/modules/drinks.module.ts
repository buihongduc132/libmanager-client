import { NgModule } 
from '@angular/core';

import { DrinkServices }
from '../services/drinkService';

import { MaterialServices }
from '../services/materialService';

@NgModule({
    imports: [
    ]
    , declarations: [

    ]
    , providers: [
        DrinkServices
        , MaterialServices
    ]
})


export class DrinkModule {
    
}
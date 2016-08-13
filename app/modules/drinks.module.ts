import { NgModule } 
from '@angular/core';

// import { DrinkRootComponent }
// from '../components/drink/drinkRoot.component';

// import { DrinkListComponent }
// from '../components/drink/drinkList.component';

// import { DrinkDetailComponent }
// from '../components/drink/drinkDetail.component';

import { DrinkServices }
from '../services/drinkService';

// import { CommonModule }
// from './common.module';


@NgModule({
    imports: [
        // CommonModule
    ]
    , declarations: [
        // DrinkListComponent
        // , DrinkDetailComponent
        // , DrinkRootComponent
    ]
    , providers: [
        DrinkServices
    ]
})


export class DrinkModule {
    
}
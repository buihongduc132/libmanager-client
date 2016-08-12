import { NgModule }
from '@angular/core';

import { BrowserModule }
from '@angular/platform-browser';

import { AppComponent }
from '../components/app.component';

import { DrinkListComponent } 
from '../components/drink/drinkList.component';

import { DrinkDetailComponent } 
from '../components/drink/drinkDetail.component';

import { MaterialListComponent }
from '../components/material/materialList.component';

import { ShowListComponent } 
from '../components/common/showList.component';

import { routing
    , appRoutingProviders
 } from '../Routes/app.routing';

 import { drinksRouting }
 from '../Routes/drinks.routing';

import { materialsRouting }
from '../Routes/materials.routing';

import { HttpModule
    , JsonpModule
} from '@angular/http';


@NgModule({
    imports: [
        BrowserModule
        , HttpModule
        , JsonpModule
        , routing
        , drinksRouting
        , materialsRouting
    ]
    , providers: [  
        appRoutingProviders
    ]
    , declarations: [
        AppComponent
        , DrinkListComponent
        , DrinkDetailComponent
        , ShowListComponent
        , MaterialListComponent
    ]
    , bootstrap: [
        AppComponent

    ]
})

export class AppModule {

}
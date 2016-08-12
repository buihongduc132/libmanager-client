import { NgModule }
from '@angular/core';

import { BrowserModule }
from '@angular/platform-browser';

import { AppComponent }
from '../components/app.component';

import { DrinkListComponent } 
from '../components/drinkList.component';

import { DrinkDetailComponent } 
from '../components/drinkDetail.component';

import { ShowListComponent } 
from '../components/common/showList.component';

import { routing
    , appRoutingProviders
 } from '../Routes/app.routes';

import { HttpModule
    , JsonpModule
} from '@angular/http';


@NgModule({
    imports: [
        BrowserModule
        , HttpModule
        , JsonpModule
        , routing
    ]
    , providers: [  
        appRoutingProviders
    ]
    , declarations: [
        AppComponent
        , DrinkListComponent
        , DrinkDetailComponent
        , ShowListComponent
    ]
    , bootstrap: [
        AppComponent

    ]
})

export class AppModule {

}
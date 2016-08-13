import { NgModule }
from '@angular/core';

import { BrowserModule }
from '@angular/platform-browser';

import { AppComponent }
from '../components/app.component';

import { routing
    , appRoutingProviders
} from '../Routes/app.routing';

import { drinksRouting }
from '../Routes/drinks.routing';

import { materialsRouting }
from '../Routes/materials.routing';

import { DrinkModule } from './drinks.module';
import { MaterialModule } from './materials.module';

import { HttpModule
    , JsonpModule
} from '@angular/http';

@NgModule({
    imports: [
        BrowserModule
        , HttpModule
        , JsonpModule
        , routing
        , MaterialModule
        , DrinkModule
    ]
    , providers: [
        appRoutingProviders
    ]
    , declarations: [
        AppComponent
    ]
    , bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}
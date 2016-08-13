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

import { CommonModule } from './common.module';
import { DrinkModule } from './drinks.module';
import { MaterialModule } from './materials.module';

import { ShowListComponent }
from '../components/common/showList.component';

import { DisplayCommonDetailInfo }
from '../components/common/displayCommonDetailInfo.component';

import { HttpModule
    , JsonpModule
} from '@angular/http';

@NgModule({
    imports: [
        BrowserModule
        , HttpModule
        , JsonpModule
        , routing
        , materialsRouting
        , drinksRouting
        , CommonModule
        , MaterialModule
        , DrinkModule
    ]
    , providers: [
        appRoutingProviders
    ]
    , declarations: [
        AppComponent
        // , ShowListComponent
        // , DisplayCommonDetailInfo
    ]
    , bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}
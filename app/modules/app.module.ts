import { NgModule }
from '@angular/core';

import { BrowserModule }
from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';

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

import { ShowListComponent }
from '../components/common/showList.component';

import { DisplayCommonDetailInfo }
from '../components/common/displayCommonDetailInfo.component';

import { ListSkeletonComponent }
from '../components/common/listSkeleton.component';

import { FormInputComponent }
from '../components/common/formInput.component';

import { HttpModule
    , JsonpModule
} from '@angular/http';

@NgModule({
    imports: [
        BrowserModule
        , HttpModule
        , JsonpModule
        , FormsModule

        , routing
        , materialsRouting
        , drinksRouting
        
        , MaterialModule
        , DrinkModule
    ]
    , providers: [
        appRoutingProviders
    ]
    , declarations: [
        AppComponent
        , ShowListComponent
        , DisplayCommonDetailInfo
        , ListSkeletonComponent
        , FormInputComponent
    ]
    , bootstrap: [
        AppComponent
    ]
})

export class AppModule {

}
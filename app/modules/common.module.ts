import { NgModule }
from '@angular/core';

import { ShowListComponent }
from '../components/common/showList.component';

import { DisplayCommonDetailInfo }
from '../components/common/displayCommonDetailInfo.component';


// import { DrinkModule } from './drinks.module';
// import { MaterialModule } from './materials.module';

@NgModule({
    imports: [
    ]
    , declarations: [
        ShowListComponent
        , DisplayCommonDetailInfo
    ]
})

export class CommonModule {

}
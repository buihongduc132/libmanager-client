import { NgModule }
from '@angular/core';

import { ShowListComponent }
from '../components/common/showList.component';

import { DisplayCommonDetailInfo }
from '../components/common/displayCommonDetailInfo.component';

import { ListSkeletonComponent }
from '../components/common/listSkeleton.component';

import { FormInputComponent }
from '../components/common/formInput.component';

import { FormInputCustomComponent }
from '../components/common/formInputCustom.component';

import { FormContainerComponent }
from '../components/common/formContainer.component';

@NgModule({
    declarations: [
        ShowListComponent
        , DisplayCommonDetailInfo
        , ListSkeletonComponent
        , FormInputComponent
        , FormContainerComponent
        , FormInputCustomComponent
    ]
})

export class CommonModule {
    
}
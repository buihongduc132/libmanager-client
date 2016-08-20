import { Component } from '@angular/core';

import { Utils } from '../../common/utils';

@Component({
    selector: 'form-container'
    , templateUrl: 'app/templates/common/formContainer.template.html'
})

export class FormContainerComponent {

    goBack() {
        Utils.goBack();
    }
}
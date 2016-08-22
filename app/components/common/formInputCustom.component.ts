import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Utils } from '../../common/utils';

import * as _ from 'lodash';

@Component({
    selector: 'form-input-custom'
    , templateUrl: 'app/templates/common/formInputCustom.template.html'
})

export class FormInputCustomComponent {
    @Input() labelName: string;
    @Input() labelWidth: string = Utils.getResponsiveClass(3);
}
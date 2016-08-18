import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Utils } from '../../common/utils';

import * as _ from 'lodash';

@Component({
    selector: 'form-input'
    , templateUrl: 'app/templates/common/formInput.template.html'
})

export class FormInputComponent {
    @Input() labelName: string;
    @Input() labelWidth: string = Utils.getResponsiveClass(3);
    @Input() controlWidth: string = Utils.getResponsiveClass(9);
}
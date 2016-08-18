import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Utils } from '../../common/utils';

import * as _ from 'lodash';

@Component({
    selector: 'form-input'
    , templateUrl: 'app/templates/common/formInput.template.html'
})

export class FormInputComponent {
    @Input() controlName: string;
    @Input() controlId: string;

    @Input() type: string = 'text';
    @Input() required: boolean = false;
    @Input() labelWidth: string = Utils.getResponsiveClass(3);
    @Input() controlWidth: string = Utils.getResponsiveClass(9);
    @Input() items: any[] = new Array();

    @Output() onItemAdded = new EventEmitter<number>();

    isShowInput(type: string) {
        return type === this.type;
    }

    chooseItem(id: number) {
        this.emmitAddEvent(id);
    }

    emmitAddEvent(id: number) {
        this.onItemAdded.emit(id);
    }

    // findItemIndex(id: number) {
    //     return _.findIndex(this.items, function (e) {
    //         return e.id === id;
    //     });
    // }

    // isExists(index: number) {
    //     return this.items[index] || false;  
    // }

    // removeItem(id: number) {
    //     var itemIndex = this.findItemIndex(id);

    //     if(this.isExists(itemIndex)) {
    //         this.items.splice(itemIndex, 1);
    //     }
    // }
}
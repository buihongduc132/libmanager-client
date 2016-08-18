import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Utils } from '../../common/utils';

// import { Router } from '@angular/router';

@Component({
    selector: 'display-common-detail-info'
    , templateUrl: 'app/templates/common/displayCommonDetailInfo.template.html'
})

export class DisplayCommonDetailInfo {
    @Input() item: any;
    @Output() onEditEvent = new EventEmitter<number>();
    @Output() onDeleteEvent = new EventEmitter<number>();

    constructor(
        // private router: R
    ) {

    }

    goBack() {
        Utils.goBack();
    }

    showPrice() {
        return this.item.price !== undefined;
    }

    onEdit(id: number) {
        this.onEditEvent.emit(id);
    }

    onDelete(id: number) {
        this.onDeleteEvent.emit(id);
    }
}
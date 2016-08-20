import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Utils } from '../../common/utils';

import { Router } from '@angular/router';

@Component({
    selector: 'display-common-detail-info'
    , templateUrl: 'app/templates/common/displayCommonDetailInfo.template.html'
})

export class DisplayCommonDetailInfo {
    @Input() item: any;
    @Input() type: string;
    @Input() backToList: boolean = false;
    @Output() onEditEvent = new EventEmitter<number>();
    @Output() onDeleteEvent = new EventEmitter<number>();

    toList = this._toList;
    isShowPrice = this._isShowPrice;
    onEdit = this._onEdit;
    onDelete = this._onDelete;
    onBack = this._onBack;
    goBack = this._goBack;

    constructor(
        private router: Router
    ) {

    }

    _toList() {
        this.router.navigate(['/'+this.type]);
    }

    _isShowPrice() {
        return this.item.price !== undefined;
    }

    _onEdit(id: number) {
        this.onEditEvent.emit(id);
    }

    _onDelete(id: number) {
        this.onDeleteEvent.emit(id);
    }

    _onBack() {
        if(this.backToList) {
            this.toList();
        }
        else {
            this.goBack();
        }
    }

    _goBack() {
        Utils.goBack();
    }
}
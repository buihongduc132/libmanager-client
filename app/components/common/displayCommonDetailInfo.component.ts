import { Component, Input } from '@angular/core';

@Component({
    selector: 'display-common-detail-info'
    , templateUrl: 'app/templates/common/displayCommonDetailInfo.template.html'
})

export class DisplayCommonDetailInfo {
    @Input() item: any;

    constructor() {

    }

    showPrice() {
        return this.item.price !== undefined;
    }
}
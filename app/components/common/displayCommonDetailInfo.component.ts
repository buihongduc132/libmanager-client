import { Component, Input } from '@angular/core';

import { Utils } from '../../common/utils';



@Component({
    selector: 'display-common-detail-info'
    , templateUrl: 'app/templates/common/displayCommonDetailInfo.template.html'
})

export class DisplayCommonDetailInfo {
    @Input() item: any;

    constructor() {

    }

    goBack() {
        Utils.goBack();
    }

    showPrice() {
        return this.item.price !== undefined;
    }
}
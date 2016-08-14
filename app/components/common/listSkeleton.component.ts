import { Component, Input } from '@angular/core';

@Component({
    selector: 'list-skeleton'
    , templateUrl: 'app/templates/common/listSkeleton.component'
})

export class ListSkeletonComponent {
    @Input() items: any[];
    @Input() showProperties: string[];
    @Input() showPrice: boolean;
    @Input() type: string;
    @Input() title: string;
}
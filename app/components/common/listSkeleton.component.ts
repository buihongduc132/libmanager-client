import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';

import { Config } from '../../config';

@Component({
    selector: 'list-skeleton'
    , templateUrl: 'app/templates/common/listSkeleton.template.html'
})

export class ListSkeletonComponent {
    @Input() items: any[];
    @Input() showProperties: string[];
    @Input() showPrice: boolean;
    @Input() type: string;
    @Input() title: string;

    constructor(
        private router: Router
    ) {

    }

    goToAdd() {
        // this.router.navigate(['/add']);
    }
}
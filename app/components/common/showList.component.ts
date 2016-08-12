import { Component, OnInit, Input } from '@angular/core';

import { CommonServices }
from '../../services/commonService'

import { Drink } 
from '../../models/drink';

import { Router }
from '@angular/router';

@Component({
    selector: 'show-list',
    templateUrl: 'app/templates/common/showList.template.html',
    providers: [
        CommonServices
    ]
})

export class ShowListComponent implements OnInit {
    @Input() items: any[];
    @Input() showProperties: string[];
    @Input() showPrice: boolean;
    @Input() type: string;

    constructor(
        private router: Router
        , private commonServices: CommonServices
        )
    {

    }

    drink: Drink = new Drink;
    errorMessage: any;

    ngOnInit() {
        
    }

    goToDetail(id: number, type: string) {
        this.router.navigate(['/'+type, id]);
    }
}
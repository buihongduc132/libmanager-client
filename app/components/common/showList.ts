import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'show-list',
    templateUrl: 'app/templates/common/showList.html'
})

export class ShowListComponent implements OnInit {
    @Input() items: any[];
    @Input() showProperties: string[];
    @Input() showPrice: boolean;
    title: string;

    ngOnInit() {
        this.title = "testing";
    }

    goToDetail(id :number) {
        alert(id);
    }
}
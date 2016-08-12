"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var commonService_1 = require('../../services/commonService');
var drink_1 = require('../../models/drink');
var router_1 = require('@angular/router');
var ShowListComponent = (function () {
    function ShowListComponent(router, commonServices) {
        this.router = router;
        this.commonServices = commonServices;
        this.drink = new drink_1.Drink;
    }
    ShowListComponent.prototype.ngOnInit = function () {
    };
    ShowListComponent.prototype.goToDetail = function (id, type) {
        this.router.navigate(['/' + type, id]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ShowListComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ShowListComponent.prototype, "showProperties", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ShowListComponent.prototype, "showPrice", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ShowListComponent.prototype, "type", void 0);
    ShowListComponent = __decorate([
        core_1.Component({
            selector: 'show-list',
            templateUrl: 'app/templates/common/showList.template.html',
            providers: [
                commonService_1.CommonServices
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, commonService_1.CommonServices])
    ], ShowListComponent);
    return ShowListComponent;
}());
exports.ShowListComponent = ShowListComponent;
//# sourceMappingURL=showList.component.js.map
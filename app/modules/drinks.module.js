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
var drinkList_component_1 = require('../components/drink/drinkList.component');
var drinkDetail_component_1 = require('../components/drink/drinkDetail.component');
var drinkService_1 = require('../services/drinkService');
var showList_component_1 = require('../components/common/showList.component');
var DrinkModule = (function () {
    function DrinkModule() {
    }
    DrinkModule = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [
                drinkList_component_1.DrinkListComponent,
                drinkDetail_component_1.DrinkDetailComponent,
                showList_component_1.ShowListComponent
            ],
            providers: [
                drinkService_1.DrinkServices
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DrinkModule);
    return DrinkModule;
}());
exports.DrinkModule = DrinkModule;
//# sourceMappingURL=drinks.module.js.map
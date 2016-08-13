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
// import { DrinkRootComponent }
// from '../components/drink/drinkRoot.component';
// import { DrinkListComponent }
// from '../components/drink/drinkList.component';
// import { DrinkDetailComponent }
// from '../components/drink/drinkDetail.component';
var drinkService_1 = require('../services/drinkService');
// import { CommonModule }
// from './common.module';
var DrinkModule = (function () {
    function DrinkModule() {
    }
    DrinkModule = __decorate([
        core_1.NgModule({
            imports: [],
            declarations: [],
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
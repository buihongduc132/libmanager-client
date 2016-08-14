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
var drinkService_1 = require('../../services/drinkService');
var config_1 = require('../../config');
// import { CommonModule } from '../../modules/common.module';
var DrinkListComponent = (function () {
    function DrinkListComponent(drinkServices) {
        this.drinkServices = drinkServices;
        this.drinks = new Array();
        this.showProperties = [];
        this.type = config_1.Config.route.client.drink.list;
        this.title = "LIB Drinks";
    }
    DrinkListComponent.prototype.ngOnDestroy = function () {
    };
    DrinkListComponent.prototype.ngOnInit = function () {
        this.getDrinks();
    };
    DrinkListComponent.prototype.getDrinks = function () {
        var _this = this;
        this.drinkServices.getDrinks()
            .subscribe(function (drinks) { return _this.drinks = drinks; }, function (error) { return _this.errorMessage = error; });
    };
    DrinkListComponent = __decorate([
        core_1.Component({
            selector: 'drink-list',
            templateUrl: 'app/templates/drink/drinkList.template.html'
        }), 
        __metadata('design:paramtypes', [drinkService_1.DrinkServices])
    ], DrinkListComponent);
    return DrinkListComponent;
}());
exports.DrinkListComponent = DrinkListComponent;
//# sourceMappingURL=drinkList.component.js.map
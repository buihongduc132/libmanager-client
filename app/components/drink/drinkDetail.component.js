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
var drink_1 = require('../../models/drink');
var DrinkDetailComponent = (function () {
    function DrinkDetailComponent(drinkServices) {
        this.drinkServices = drinkServices;
        this.drink = new drink_1.Drink;
    }
    DrinkDetailComponent.prototype.ngOnInit = function () {
        this.getDrinkDetail(1);
    };
    DrinkDetailComponent.prototype.getDrinkDetail = function (id) {
        var _this = this;
        this.drinkServices.getDrink(id)
            .subscribe(function (drink) { return _this.drink = drink; }, function (error) { return _this.errorMessage = error; });
    };
    DrinkDetailComponent.prototype.ngOnDestroy = function () {
    };
    DrinkDetailComponent = __decorate([
        core_1.Component({
            selector: 'drink-detail',
            templateUrl: 'app/templates/drink/drinkDetail.template.html'
        }), 
        __metadata('design:paramtypes', [drinkService_1.DrinkServices])
    ], DrinkDetailComponent);
    return DrinkDetailComponent;
}());
exports.DrinkDetailComponent = DrinkDetailComponent;
//# sourceMappingURL=drinkDetail.component.js.map
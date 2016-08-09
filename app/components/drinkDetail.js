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
var router_1 = require('@angular/router');
var drinkService_1 = require('../services/drinkService');
var DrinkDetailComponent = (function () {
    function DrinkDetailComponent(drinkService, route) {
        this.drinkService = drinkService;
        this.route = route;
    }
    DrinkDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubcribe();
    };
    DrinkDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.drinkService.getDrink(1)
            .subscribe(function (drink) {
            console.log(drink);
            _this.drink = drink;
            console.log(_this.drink);
        }, function (error) { return _this.errorMessage = error; });
        // this.sub = this.route.params.subscribe(params => {
        //     let id = +params['id'];
        //     this.drinkService.getDrink(id)
        //     .subscribe(
        //         drink => this.drink = drink,
        //         error => this.errorMessage = error
        //     )
        // })
    };
    DrinkDetailComponent.prototype.getDrink = function (id) {
    };
    DrinkDetailComponent = __decorate([
        core_1.Component({
            selector: 'drink-detail',
            templateUrl: 'app/templates/drinkDetail.html'
        }), 
        __metadata('design:paramtypes', [drinkService_1.DrinkServices, router_1.ActivatedRoute])
    ], DrinkDetailComponent);
    return DrinkDetailComponent;
}());
exports.DrinkDetailComponent = DrinkDetailComponent;
//# sourceMappingURL=drinkDetail.js.map
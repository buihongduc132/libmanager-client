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
var drink_1 = require('../../models/drink');
var router_1 = require('@angular/router');
var utils_1 = require('../../common/utils');
var drinkService_1 = require('../../services/drinkService');
var materialService_1 = require('../../services/materialService');
var _ = require('lodash');
var DrinkAddEditComponent = (function () {
    function DrinkAddEditComponent(drinkServices, materialServices, router, route) {
        this.drinkServices = drinkServices;
        this.materialServices = materialServices;
        this.router = router;
        this.route = route;
        this.drink = new drink_1.Drink();
        this.parentDrinks = new Array();
    }
    DrinkAddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMaterials();
        this.getDrinks();
        this.drink.materials = new Array();
        this.sub = this.route
            .params.subscribe(function (params) {
            var id = +params['id'];
            if (id) {
                _this.id = id;
                _this.getDrinkDetail(id);
            }
        });
    };
    DrinkAddEditComponent.prototype.getDrinkDetail = function (id) {
        var _this = this;
        this.drinkServices.getDrink(id)
            .subscribe(function (drink) { return _this.drink = drink; }, function (error) { return _this.errorMessage = error; });
    };
    DrinkAddEditComponent.prototype.getMaterials = function () {
        var _this = this;
        this.materialServices.getMaterials()
            .subscribe(function (materials) { return _this.materials = materials; }, function (error) { return _this.errorMessage = error; });
    };
    DrinkAddEditComponent.prototype.getDrinks = function () {
        var _this = this;
        this.drinkServices.getDrinks()
            .subscribe(function (drinks) { return _this.parentDrinks = drinks; }, function (error) { return _this.errorMessage = error; });
    };
    DrinkAddEditComponent.prototype.onItemAdded = function (id) {
        this.chooseMaterial(id);
    };
    DrinkAddEditComponent.prototype.chooseMaterial = function (id) {
        var matIndex = this.findIndex(this.materials, id);
        if (this.materials[matIndex]) {
            this.drink.materials.push(this.materials[matIndex]);
            this.materials.splice(matIndex, 1);
        }
    };
    DrinkAddEditComponent.prototype.removeMaterialFromDrink = function (id) {
        var matIndex = this.findIndex(this.drink.materials, id);
        if (this.drink.materials[matIndex]) {
            this.materials.push(this.drink.materials[matIndex]);
            this.drink.materials.splice(matIndex, 1);
        }
    };
    DrinkAddEditComponent.prototype.findIndex = function (items, id) {
        return _.findIndex(items, function (e) {
            return e.id == id;
        });
    };
    DrinkAddEditComponent.prototype.onSubmit = function () {
        if (this.id) {
            this.editDrink(this.drink);
        }
        else {
            this.addDrink(this.drink);
        }
    };
    DrinkAddEditComponent.prototype.editDrink = function (drink) {
        var _this = this;
        this.drinkServices.editDrink(this.drink)
            .subscribe(function (drink) {
            _this.router.navigate(['/drinks', drink.id]);
        }, function (error) { return _this.errorMessage = error; });
    };
    DrinkAddEditComponent.prototype.addDrink = function (drink) {
        var _this = this;
        this.drinkServices.addDrink(this.drink)
            .subscribe(function (drink) {
            _this.router.navigate(['/drinks']);
        }, function (error) { return _this.errorMessage = error; });
    };
    DrinkAddEditComponent.prototype.goBack = function () {
        utils_1.Utils.goBack(this.router);
    };
    DrinkAddEditComponent = __decorate([
        core_1.Component({
            selector: 'drink-add-edit',
            templateUrl: 'app/templates/drink/form/drinkAdd_Edit.template.html'
        }), 
        __metadata('design:paramtypes', [drinkService_1.DrinkServices, materialService_1.MaterialServices, router_1.Router, router_1.ActivatedRoute])
    ], DrinkAddEditComponent);
    return DrinkAddEditComponent;
}());
exports.DrinkAddEditComponent = DrinkAddEditComponent;
//# sourceMappingURL=drinkAdd_Edit.component.js.map
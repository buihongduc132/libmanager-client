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
        this.getDrinkDetail = this._getDrinkDetail;
        this.getMaterials = this._getMaterials;
        this.getDrinks = this._getDrinks;
        this.onItemAdded = this._onItemAdded;
        this.chooseMaterial = this._chooseMaterial;
        this.removeMaterialFromDrink = this._removeMaterialFromDrink;
        this.findIndex = this._findIndex;
        this.editDrink = this._editDrink;
        this.addDrink = this._addDrink;
        this.goBack = this._goBack;
        this.getParams = this._getParams;
    }
    DrinkAddEditComponent.prototype.ngOnInit = function () {
        this.getMaterials();
        this.getDrinks();
        this.drink.materials = new Array();
        this.getParams();
        if (this.id) {
            this.getDrinkDetail(this.id);
        }
    };
    DrinkAddEditComponent.prototype.onSubmit = function () {
        if (this.id) {
            this._editDrink(this.drink);
        }
        else {
            this._addDrink(this.drink);
        }
    };
    DrinkAddEditComponent.prototype._getParams = function () {
        var _this = this;
        this.sub = this.route
            .params.subscribe(function (params) {
            _this.id = params['id'];
        });
    };
    DrinkAddEditComponent.prototype._getDrinkDetail = function (id) {
        var _this = this;
        this.drinkServices.getDrink(id)
            .subscribe(function (drink) { return _this.drink = drink; }, function (error) { return _this.errorMessage = error; });
    };
    DrinkAddEditComponent.prototype._getMaterials = function () {
        var _this = this;
        this.materialServices.getMaterials()
            .subscribe(function (materials) { return _this.materials = materials; }, function (error) { return _this.errorMessage = error; });
    };
    DrinkAddEditComponent.prototype._getDrinks = function () {
        var _this = this;
        this.drinkServices.getDrinks()
            .subscribe(function (drinks) { return _this.parentDrinks = drinks; }, function (error) { return _this.errorMessage = error; });
    };
    DrinkAddEditComponent.prototype._onItemAdded = function (id) {
        this._chooseMaterial(id);
    };
    DrinkAddEditComponent.prototype._chooseMaterial = function (id) {
        var matIndex = this._findIndex(this.materials, id);
        if (this.materials[matIndex]) {
            this.drink.materials.push(this.materials[matIndex]);
            this.materials.splice(matIndex, 1);
        }
    };
    DrinkAddEditComponent.prototype._removeMaterialFromDrink = function (id) {
        var matIndex = this.findIndex(this.drink.materials, id);
        if (this.drink.materials[matIndex]) {
            this.materials.push(this.drink.materials[matIndex]);
            this.drink.materials.splice(matIndex, 1);
        }
    };
    DrinkAddEditComponent.prototype._findIndex = function (items, id) {
        return _.findIndex(items, function (e) {
            return e.id == id;
        });
    };
    DrinkAddEditComponent.prototype._editDrink = function (drink) {
        var _this = this;
        this.drinkServices.editDrink(this.drink)
            .subscribe(function (drink) {
            _this.router.navigate(['/drinks', drink.id]);
        }, function (error) { return _this.errorMessage = error; });
    };
    DrinkAddEditComponent.prototype._addDrink = function (drink) {
        var _this = this;
        this.drinkServices.addDrink(this.drink)
            .subscribe(function (drink) {
            _this.router.navigate(['/drinks']);
        }, function (error) { return _this.errorMessage = error; });
    };
    DrinkAddEditComponent.prototype._goBack = function () {
        utils_1.Utils.goBack();
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
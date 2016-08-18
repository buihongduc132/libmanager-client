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
var utils_1 = require('../../common/utils');
var drinkService_1 = require('../../services/drinkService');
var materialService_1 = require('../../services/materialService');
var _ = require('lodash');
var DrinkAddEditComponent = (function () {
    function DrinkAddEditComponent(drinkServices, materialServices) {
        this.drinkServices = drinkServices;
        this.materialServices = materialServices;
        this.drink = new drink_1.Drink();
        this.parentDrinks = new Array();
        this.chosenMaterials = new Array();
    }
    DrinkAddEditComponent.prototype.ngOnInit = function () {
        this.getMaterials();
        this.getDrinks();
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
        var matIndex = _.findIndex(this.materials, function (e) {
            return e.id == id;
        });
        if (this.materials[matIndex]) {
            this.chosenMaterials.push(this.materials[matIndex]);
            this.materials.splice(matIndex, 1);
        }
    };
    DrinkAddEditComponent.prototype.removeMaterialFromChosen = function (id) {
        var matIndex = _.findIndex(this.chosenMaterials, function (e) {
            return e.id == id;
        });
        if (this.chosenMaterials[matIndex]) {
            this.materials.push(this.chosenMaterials[matIndex]);
            this.chosenMaterials.splice(matIndex, 1);
        }
    };
    DrinkAddEditComponent.prototype.goBack = function () {
        utils_1.Utils.goBack();
    };
    DrinkAddEditComponent = __decorate([
        core_1.Component({
            selector: 'drink-add-edit',
            templateUrl: 'app/templates/drink/form/drinkAdd_Edit.template.html'
        }), 
        __metadata('design:paramtypes', [drinkService_1.DrinkServices, materialService_1.MaterialServices])
    ], DrinkAddEditComponent);
    return DrinkAddEditComponent;
}());
exports.DrinkAddEditComponent = DrinkAddEditComponent;
//# sourceMappingURL=drinkAdd_Edit.component.js.map
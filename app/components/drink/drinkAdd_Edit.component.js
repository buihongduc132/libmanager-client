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
var drinkMaterial_1 = require('../../models/drinkMaterial');
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
        this.chosenMaterials = new Array();
        this.amount = 0;
        this.getDrinkDetail = this._getDrinkDetail;
        this.getMaterials = this._getMaterials;
        this.getDrinks = this._getDrinks;
        this.onItemAdded = this._onItemAdded;
        this.chooseMaterial = this._chooseMaterial;
        this.onRemoveMaterial = this._onRemoveMaterial;
        this.editDrink = this._editDrink;
        this.addDrink = this._addDrink;
        this.goBack = this._goBack;
        this.getParams = this._getParams;
        this.resetAmount = this._resetAmount;
        this.getMaterialByRelationshipId = this._getMaterialByRelationshipId;
        this.moveToChosen = this._moveToChosen;
        this.removeFromChosen = this._removeFromChosen;
        this.addMaterialToDrink = this._addMaterialToDrink;
        this.removeMaterial = this._removeMaterial;
        this.getIndex = this._getIndex;
        this.removeMaterialAlreadyInDrink = this._removeMaterialAlreadyInDrink;
    }
    DrinkAddEditComponent.prototype.ngOnInit = function () {
        this.drink.dishMaterials = new Array();
        this.getParams();
        if (this.id) {
            this.getDrinkDetail(this.id);
        }
        this.getMaterials();
        this.getDrinks().add();
    };
    DrinkAddEditComponent.prototype.onSubmit = function () {
        // console.log(this.drink);
        if (this.id) {
            this._editDrink(this.drink);
        }
        else {
            this._addDrink(this.drink);
        }
    };
    DrinkAddEditComponent.prototype._removeMaterialAlreadyInDrink = function () {
        var allMatInDrink = _.map(this.drink.dishMaterials, 'material');
        var matIndexes = _.map(this.materials, 'id');
        var allIds = _.map(allMatInDrink, 'id');
        var remainingMat = _.filter(this.materials, function (mat) {
            return allIds.indexOf(mat.id) < 0;
        });
        var removedMat = _.filter(this.materials, function (mat) {
            return allIds.indexOf(mat.id) >= 0;
        });
        this.materials = remainingMat;
        this.chosenMaterials = removedMat;
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
        this.drinkServices.getDrinkWithMaterials(id)
            .subscribe(function (drink) {
            _this.drink = drink;
            _this.removeMaterialAlreadyInDrink();
        }, function (error) { return _this.errorMessage = error; });
    };
    DrinkAddEditComponent.prototype._getMaterials = function () {
        var _this = this;
        return this.materialServices.getMaterials()
            .subscribe(function (materials) {
            _this.materials = materials;
        }, function (error) { return _this.errorMessage = error; });
    };
    DrinkAddEditComponent.prototype._getDrinks = function () {
        var _this = this;
        return this.drinkServices.getDrinks()
            .subscribe(function (drinks) { return _this.parentDrinks = drinks; }, function (error) { return _this.errorMessage = error; });
    };
    DrinkAddEditComponent.prototype._onItemAdded = function (id) {
        this._chooseMaterial(id);
    };
    DrinkAddEditComponent.prototype._getMaterialByRelationshipId = function (id) {
        return _.find(this.materials, function (mat) {
            return mat.id == id;
        });
    };
    DrinkAddEditComponent.prototype._chooseMaterial = function (id) {
        if (id == -1) {
            return;
        }
        this.addMaterialToDrink(id);
        this.moveToChosen(id);
        this.resetAmount();
    };
    DrinkAddEditComponent.prototype._addMaterialToDrink = function (id) {
        var drinkMaterial = new drinkMaterial_1.DrinkMaterial;
        drinkMaterial.amount = this.amount;
        drinkMaterial.material = this.getMaterialByRelationshipId(id);
        this.drink.dishMaterials.push(drinkMaterial);
    };
    DrinkAddEditComponent.prototype._moveToChosen = function (id) {
        var matIndex = this.getIndex(this.materials, id);
        if (this.materials[matIndex]) {
            this.chosenMaterials.push(this.materials[matIndex]);
            this.materials.splice(matIndex, 1);
        }
    };
    DrinkAddEditComponent.prototype._removeFromChosen = function (id) {
        var matIndex = this.getIndex(this.chosenMaterials, id);
        if (this.chosenMaterials[matIndex]) {
            this.materials.push(this.chosenMaterials[matIndex]);
            this.chosenMaterials.splice(matIndex, 1);
        }
    };
    DrinkAddEditComponent.prototype._getIndex = function (items, id) {
        return items.findIndex(function (item) {
            return item.id == id;
        });
    };
    DrinkAddEditComponent.prototype._resetAmount = function () {
        this.amount = 0;
    };
    DrinkAddEditComponent.prototype._onRemoveMaterial = function (id) {
        this.removeMaterial(id);
        this.removeFromChosen(id);
    };
    DrinkAddEditComponent.prototype._removeMaterial = function (id) {
        var matIndex = this.getIndex(this.drink.dishMaterials, id);
        this.drink.dishMaterials.splice(matIndex, 1);
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
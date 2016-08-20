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
var material_1 = require('../../models/material');
var router_1 = require('@angular/router');
var utils_1 = require('../../common/utils');
var drinkService_1 = require('../../services/drinkService');
var materialService_1 = require('../../services/materialService');
var commonEnum_1 = require('../../common/commonEnum');
var MaterialAddEditComponent = (function () {
    function MaterialAddEditComponent(drinkServices, materialServices, router, route) {
        this.drinkServices = drinkServices;
        this.materialServices = materialServices;
        this.router = router;
        this.route = route;
        this.material = new material_1.Material();
        this.unitType = utils_1.Utils.bindEnum(commonEnum_1.Unit);
        this.getMaterial = this._getMaterial;
        this.addMaterial = this._addMaterial;
        this.editMaterial = this._editMaterial;
        this.deleteMaterial = this._deleteMaterial;
        this.goBack = this._goBack;
        this.getParams = this._getParams;
    }
    MaterialAddEditComponent.prototype.ngOnInit = function () {
        this.getParams();
        if (this.id) {
            this.getMaterial(this.id);
        }
    };
    MaterialAddEditComponent.prototype.onSubmit = function () {
        if (this.id) {
            this._editMaterial(this.material);
        }
        else {
            this._addMaterial(this.material);
        }
    };
    MaterialAddEditComponent.prototype._getParams = function () {
        var _this = this;
        this.sub = this.route
            .params.subscribe(function (params) {
            _this.id = params['id'];
        });
    };
    MaterialAddEditComponent.prototype._getMaterial = function (id) {
        var _this = this;
        this.materialServices.getMaterial(id)
            .subscribe(function (material) { return _this.material = material; }, function (error) { return _this.errorMessage = error; });
    };
    MaterialAddEditComponent.prototype._addMaterial = function (material) {
        var _this = this;
        this.materialServices.addMaterial(material)
            .subscribe(function (material) {
            _this.router.navigate(['/materials']);
        }, function (error) { return _this.errorMessage = error; });
    };
    MaterialAddEditComponent.prototype._editMaterial = function (material) {
        var _this = this;
        this.materialServices.editMaterial(material)
            .subscribe(function (material) {
            _this.router.navigate(['/materials', material.id]);
        }, function (error) { return _this.errorMessage = error; });
    };
    MaterialAddEditComponent.prototype._deleteMaterial = function (id) {
        var _this = this;
        this.materialServices.editMaterial(id)
            .subscribe(function (material) {
            _this.router.navigate(['/materials']);
        }, function (error) { return _this.errorMessage = error; });
    };
    MaterialAddEditComponent.prototype._goBack = function () {
        utils_1.Utils.goBack();
    };
    MaterialAddEditComponent = __decorate([
        core_1.Component({
            selector: 'material-add-edit',
            templateUrl: 'app/templates/material/form/materialAdd_Edit.template.html'
        }), 
        __metadata('design:paramtypes', [drinkService_1.DrinkServices, materialService_1.MaterialServices, router_1.Router, router_1.ActivatedRoute])
    ], MaterialAddEditComponent);
    return MaterialAddEditComponent;
}());
exports.MaterialAddEditComponent = MaterialAddEditComponent;
//# sourceMappingURL=materialAdd_Edit.component.js.map
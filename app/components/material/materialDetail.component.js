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
var material_1 = require('../../models/material');
var materialService_1 = require('../../services/materialService');
require('rxjs/add/operator/map');
var MaterialDetailComponent = (function () {
    function MaterialDetailComponent(materialServices, route) {
        this.materialServices = materialServices;
        this.route = route;
        this.material = new material_1.Material;
    }
    // private sub: Subc
    MaterialDetailComponent.prototype.ngOnInit = function () {
        this.getMaterialDetail(1);
    };
    MaterialDetailComponent.prototype.getMaterialDetail = function (id) {
        var _this = this;
        this.materialServices
            .getMaterial(id)
            .subscribe(function (material) { return _this.material = material; }, function (error) { return _this.errorMessage = error; });
    };
    MaterialDetailComponent.prototype.ngOnDestroy = function () {
    };
    MaterialDetailComponent = __decorate([
        core_1.Component({
            selector: 'material-detail',
            templateUrl: 'app/templates/material/materialDetail.template.html'
        }), 
        __metadata('design:paramtypes', [materialService_1.MaterialServices, router_1.ActivatedRoute])
    ], MaterialDetailComponent);
    return MaterialDetailComponent;
}());
exports.MaterialDetailComponent = MaterialDetailComponent;
//# sourceMappingURL=materialDetail.component.js.map
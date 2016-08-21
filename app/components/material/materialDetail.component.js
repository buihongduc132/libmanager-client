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
    function MaterialDetailComponent(materialServices, route, router) {
        this.materialServices = materialServices;
        this.route = route;
        this.router = router;
        this.material = new material_1.Material;
        // private sub: Subc
        this.getMaterialDetail = this._getMaterialDetail;
        this.getParams = this._getParams;
        this.onEditEvent = this._onEditEvent;
        this.onDeleteEvent = this._onDeleteEvent;
    }
    MaterialDetailComponent.prototype.ngOnInit = function () {
        this.getParams();
        this.id = this.params['id'];
        this.getMaterialDetail(this.id);
    };
    MaterialDetailComponent.prototype.ngOnDestroy = function () {
    };
    MaterialDetailComponent.prototype._getParams = function () {
        var _this = this;
        this.sub = this.route
            .params.subscribe(function (params) { return _this.params = params; });
    };
    MaterialDetailComponent.prototype._getMaterialDetail = function (id) {
        var _this = this;
        this.materialServices
            .getMaterial(id)
            .subscribe(function (material) { return _this.material = material; }, function (error) { return _this.errorMessage = error; });
    };
    MaterialDetailComponent.prototype._onEditEvent = function (id) {
        this.router.navigate(["/materials", "edit", id]);
    };
    MaterialDetailComponent.prototype._onDeleteEvent = function (id) {
        var _this = this;
        this.materialServices.deleteMaterial(id)
            .subscribe(function (material) {
            alert(material.name + " is deleted");
            _this.router.navigate(['/']);
        }, function (error) { return _this.errorMessage = error; });
    };
    MaterialDetailComponent = __decorate([
        core_1.Component({
            selector: 'material-detail',
            templateUrl: 'app/templates/material/materialDetail.template.html'
        }), 
        __metadata('design:paramtypes', [materialService_1.MaterialServices, router_1.ActivatedRoute, router_1.Router])
    ], MaterialDetailComponent);
    return MaterialDetailComponent;
}());
exports.MaterialDetailComponent = MaterialDetailComponent;
//# sourceMappingURL=materialDetail.component.js.map
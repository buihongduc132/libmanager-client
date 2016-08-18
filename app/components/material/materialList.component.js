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
var materialService_1 = require('../../services/materialService');
var config_1 = require('../../config');
var MaterialListComponent = (function () {
    function MaterialListComponent(materialServices) {
        this.materialServices = materialServices;
        this.materials = new Array();
        this.type = config_1.Config.route.client.material;
        this.showProperties = [];
        this.title = "LIB Materials";
    }
    MaterialListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.materialServices.getMaterials()
            .subscribe(function (materials) { return _this.materials = materials; }, function (error) { return _this.errorMessage = error; });
    };
    MaterialListComponent.prototype.ngOnDestroy = function () {
    };
    MaterialListComponent = __decorate([
        core_1.Component({
            selector: 'material-list',
            templateUrl: 'app/templates/material/materialList.template.html'
        }), 
        __metadata('design:paramtypes', [materialService_1.MaterialServices])
    ], MaterialListComponent);
    return MaterialListComponent;
}());
exports.MaterialListComponent = MaterialListComponent;
//# sourceMappingURL=materialList.component.js.map
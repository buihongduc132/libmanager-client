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
var materialList_component_1 = require('../components/material/materialList.component');
var materialDetail_component_1 = require('../components/material/materialDetail.component');
var materialRoot_component_1 = require('../components/material/materialRoot.component');
var materialService_1 = require('../services/materialService');
var common_module_1 = require('./common.module');
var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                common_module_1.CommonModule
            ],
            declarations: [
                materialList_component_1.MaterialListComponent,
                materialDetail_component_1.MaterialDetailComponent,
                materialRoot_component_1.MaterialRootComponent
            ],
            providers: [
                materialService_1.MaterialServices
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
//# sourceMappingURL=materials.module.js.map
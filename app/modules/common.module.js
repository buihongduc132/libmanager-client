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
var showList_component_1 = require('../components/common/showList.component');
var displayCommonDetailInfo_component_1 = require('../components/common/displayCommonDetailInfo.component');
var listSkeleton_component_1 = require('../components/common/listSkeleton.component');
var formInput_component_1 = require('../components/common/formInput.component');
var formInputCustom_component_1 = require('../components/common/formInputCustom.component');
var formContainer_component_1 = require('../components/common/formContainer.component');
var CommonModule = (function () {
    function CommonModule() {
    }
    CommonModule = __decorate([
        core_1.NgModule({
            declarations: [
                showList_component_1.ShowListComponent,
                displayCommonDetailInfo_component_1.DisplayCommonDetailInfo,
                listSkeleton_component_1.ListSkeletonComponent,
                formInput_component_1.FormInputComponent,
                formContainer_component_1.FormContainerComponent,
                formInputCustom_component_1.FormInputCustomComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CommonModule);
    return CommonModule;
}());
exports.CommonModule = CommonModule;
//# sourceMappingURL=common.module.js.map
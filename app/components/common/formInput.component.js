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
var utils_1 = require('../../common/utils');
var FormInputComponent = (function () {
    function FormInputComponent() {
        this.labelWidth = utils_1.Utils.getResponsiveClass(3);
        this.controlWidth = utils_1.Utils.getResponsiveClass(9);
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FormInputComponent.prototype, "labelName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FormInputComponent.prototype, "labelWidth", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FormInputComponent.prototype, "controlWidth", void 0);
    FormInputComponent = __decorate([
        core_1.Component({
            selector: 'form-input',
            templateUrl: 'app/templates/common/formInput.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FormInputComponent);
    return FormInputComponent;
}());
exports.FormInputComponent = FormInputComponent;
//# sourceMappingURL=formInput.component.js.map
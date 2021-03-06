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
var router_1 = require('@angular/router');
var DisplayCommonDetailInfo = (function () {
    function DisplayCommonDetailInfo(router) {
        this.router = router;
        this.backToList = false;
        this.onEditEvent = new core_1.EventEmitter();
        this.onDeleteEvent = new core_1.EventEmitter();
        this.toList = this._toList;
        this.isShowPrice = this._isShowPrice;
        this.onEdit = this._onEdit;
        this.onDelete = this._onDelete;
        this.onBack = this._onBack;
        this.goBack = this._goBack;
    }
    DisplayCommonDetailInfo.prototype._toList = function () {
        this.router.navigate(['/' + this.type]);
    };
    DisplayCommonDetailInfo.prototype._isShowPrice = function () {
        return this.item.price !== undefined;
    };
    DisplayCommonDetailInfo.prototype._onEdit = function (id) {
        this.onEditEvent.emit(id);
    };
    DisplayCommonDetailInfo.prototype._onDelete = function (id) {
        this.onDeleteEvent.emit(id);
    };
    DisplayCommonDetailInfo.prototype._onBack = function () {
        if (this.backToList) {
            this.toList();
        }
        else {
            this.goBack();
        }
    };
    DisplayCommonDetailInfo.prototype._goBack = function () {
        utils_1.Utils.goBack();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DisplayCommonDetailInfo.prototype, "item", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DisplayCommonDetailInfo.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DisplayCommonDetailInfo.prototype, "backToList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DisplayCommonDetailInfo.prototype, "onEditEvent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DisplayCommonDetailInfo.prototype, "onDeleteEvent", void 0);
    DisplayCommonDetailInfo = __decorate([
        core_1.Component({
            selector: 'display-common-detail-info',
            templateUrl: 'app/templates/common/displayCommonDetailInfo.template.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], DisplayCommonDetailInfo);
    return DisplayCommonDetailInfo;
}());
exports.DisplayCommonDetailInfo = DisplayCommonDetailInfo;
//# sourceMappingURL=displayCommonDetailInfo.component.js.map
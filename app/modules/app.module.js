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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('../components/app.component');
var app_routing_1 = require('../Routes/app.routing');
var drinks_routing_1 = require('../Routes/drinks.routing');
var materials_routing_1 = require('../Routes/materials.routing');
var common_module_1 = require('./common.module');
var drinks_module_1 = require('./drinks.module');
var materials_module_1 = require('./materials.module');
var http_1 = require('@angular/http');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routing_1.routing,
                materials_routing_1.materialsRouting,
                drinks_routing_1.drinksRouting,
                common_module_1.CommonModule,
                materials_module_1.MaterialModule,
                drinks_module_1.DrinkModule
            ],
            providers: [
                app_routing_1.appRoutingProviders
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
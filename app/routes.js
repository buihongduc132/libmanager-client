"use strict";
var router_1 = require('@angular/router');
var drinklist_1 = require('./components/drinklist');
var drinkdetail_1 = require('./components/drinkdetail');
var routes = [
    {
        path: 'drinks',
        component: drinklist_1.DrinkListComponent
    },
    {
        path: 'drinks/:id',
        component: drinkdetail_1.DrinkDetailComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=routes.js.map
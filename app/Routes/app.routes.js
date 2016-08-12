"use strict";
var router_1 = require('@angular/router');
var drinklist_component_1 = require('../components/drinklist.component');
var drinkDetail_component_1 = require('../components/drinkDetail.component');
var appRoutes = [
    {
        path: 'drinks',
        component: drinklist_component_1.DrinkListComponent
    },
    {
        path: 'drinks/:id',
        component: drinkDetail_component_1.DrinkDetailComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map
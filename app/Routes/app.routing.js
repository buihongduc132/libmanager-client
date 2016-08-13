"use strict";
var router_1 = require('@angular/router');
var drinklist_component_1 = require('../components/drink/drinklist.component');
var config_1 = require('../config');
var appRoutes = [
    {
        path: config_1.Config.route.client.drink.list,
        component: drinklist_component_1.DrinkListComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
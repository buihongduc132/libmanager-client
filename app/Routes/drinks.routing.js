"use strict";
var router_1 = require('@angular/router');
var drinklist_component_1 = require('../components/drink/drinklist.component');
var drinkDetail_component_1 = require('../components/drink/drinkDetail.component');
var config_1 = require('../config');
var drinksRoutes = [
    {
        path: config_1.Config.route.client.drink.list,
        component: drinklist_component_1.DrinkListComponent
    },
    {
        path: config_1.Config.route.client.drink.list + "/:id",
        component: drinkDetail_component_1.DrinkDetailComponent
    }
];
exports.drinksRouting = router_1.RouterModule.forChild(drinksRoutes);
//# sourceMappingURL=drinks.routing.js.map
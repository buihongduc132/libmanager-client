"use strict";
var router_1 = require('@angular/router');
var drinkRoot_component_1 = require('../components/drink/drinkRoot.component');
var drinklist_component_1 = require('../components/drink/drinklist.component');
var drinkDetail_component_1 = require('../components/drink/drinkDetail.component');
var config_1 = require('../config');
var drinksRoutes = [
    {
        path: config_1.Config.route.client.drink.list,
        component: drinkRoot_component_1.DrinkRootComponent,
        children: [
            {
                path: '',
                component: drinklist_component_1.DrinkListComponent
            },
            {
                path: ':id',
                component: drinkDetail_component_1.DrinkDetailComponent
            }
        ]
    }
];
exports.drinksRouting = router_1.RouterModule.forChild(drinksRoutes);
//# sourceMappingURL=drinks.routing.js.map
"use strict";
var router_1 = require('@angular/router');
var drinklist_component_1 = require('../components/drinklist.component');
var drinkDetail_component_1 = require('../components/drinkDetail.component');
var drinksRoutes = [
    {
        path: 'drinks',
        component: drinklist_component_1.DrinkListComponent
    },
    {
        path: 'drinks/:id',
        compoennt: drinkDetail_component_1.DrinkDetailComponent
    }
];
exports.drinksRouting = router_1.RouterModule.forChild(drinksRoutes);
//# sourceMappingURL=drinks.routes.js.map
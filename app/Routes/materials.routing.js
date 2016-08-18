"use strict";
var router_1 = require('@angular/router');
var materialList_component_1 = require('../components/material/materialList.component');
var materialDetail_component_1 = require('../components/material/materialDetail.component');
var materialRoot_component_1 = require('../components/material/materialRoot.component');
var config_1 = require('../config');
var materialsRoutes = [
    {
        path: config_1.Config.route.client.material,
        component: materialRoot_component_1.MaterialRootComponent,
        children: [
            {
                path: ':id',
                component: materialDetail_component_1.MaterialDetailComponent
            },
            {
                path: '',
                component: materialList_component_1.MaterialListComponent
            }
        ]
    }
];
exports.materialsRouting = router_1.RouterModule.forChild(materialsRoutes);
//# sourceMappingURL=materials.routing.js.map
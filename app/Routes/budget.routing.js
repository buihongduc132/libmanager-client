"use strict";
var router_1 = require('@angular/router');
var incomeRoot_component_1 = require('../components/budget/income/incomeRoot.component');
var incomeDaily_component_1 = require('../components/budget/income/incomeDaily.component');
var incomeMonthly_component_1 = require('../components/budget/income/incomeMonthly.component');
var incomeYearly_component_1 = require('../components/budget/income/incomeYearly.component');
var config_1 = require('../config');
var budgetRoutes = [
    {
        path: config_1.Config.route.client.budget.income.url,
        component: incomeRoot_component_1.IncomeRootComponent,
        children: [
            {
                path: '',
                redirectTo: config_1.Config.route.client.budget.income.daily
            },
            {
                path: config_1.Config.route.client.budget.income.daily,
                component: incomeDaily_component_1.IncomeDailyComponent
            },
            {
                path: config_1.Config.route.client.budget.income.monthly,
                component: incomeMonthly_component_1.IncomeMonthlyComponent
            },
            {
                path: config_1.Config.route.client.budget.income.yearly,
                component: incomeYearly_component_1.IncomeYearlyComponent
            }
        ]
    }
];
exports.budgetRouting = router_1.RouterModule.forChild(budgetRoutes);
//# sourceMappingURL=budget.routing.js.map
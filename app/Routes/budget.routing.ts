import {
    Routes
    , RouterModule
} from '@angular/router';

import { IncomeRootComponent } from
'../components/budget/income/incomeRoot.component';

import { IncomeDailyComponent } from
'../components/budget/income/incomeDaily.component';

import { IncomeMonthlyComponent } from
'../components/budget/income/incomeMonthly.component';

import { IncomeYearlyComponent } from
'../components/budget/income/incomeYearly.component';

import { Config } 
from '../config';

const budgetRoutes: Routes = [
    {
        path: Config.route.client.budget.income.url
        , component: IncomeRootComponent
        , children: [
            {
                path: ''
                , redirectTo: Config.route.client.budget.income.daily
                 
            }
            , {
                path: Config.route.client.budget.income.daily
                , component: IncomeDailyComponent
            }
            , {
                path: Config.route.client.budget.income.monthly
                , component: IncomeMonthlyComponent
            }
            , {
                path: Config.route.client.budget.income.yearly
                , component: IncomeYearlyComponent
            } 
        ]
    }
]

export const budgetRouting =
RouterModule.forChild(budgetRoutes);

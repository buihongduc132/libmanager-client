// class Config { 
//   public Host: 'http://localhost:1337'
// }
"use strict";
var config = {
    host: 'http://localhost:1337',
    route: {
        server: {
            drink: 'dish',
            drinkFullDetail: 'dishFullDetail',
            material: 'material',
            income: 'income',
            incomeFullDetail: 'incomeFullDetail',
            incomeLite: 'incomeLite',
            people: 'person',
            isExistsIncome: 'isExistedIncome',
            incomeDetail: 'incomeDetail'
        },
        client: {
            drink: 'drinks',
            material: 'materials',
            budget: {
                income: {
                    daily: 'daily',
                    monthly: 'monthly',
                    yearly: 'yearly',
                    url: 'income'
                },
                expense: {
                    daily: 'daily',
                    monthly: 'monthly',
                    yearly: 'yearly',
                    url: 'expense'
                }
            },
            commonAction: {
                add: 'add',
                edit: 'edit'
            }
        }
    }
};
exports.Config = config;
//# sourceMappingURL=config.js.map
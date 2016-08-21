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
            material: 'material'
        },
        client: {
            drink: 'drinks',
            material: 'materials',
            commonAction: {
                add: 'add',
                edit: 'edit'
            }
        }
    }
};
exports.Config = config;
//# sourceMappingURL=config.js.map
// class Config { 
//   public Host: 'http://localhost:1337'
// }
"use strict";
var config = {
    host: 'http://localhost:1337',
    route: {
        server: {
            drink: {
                list: 'dish'
            },
            material: {
                list: 'material'
            }
        },
        client: {
            drink: {
                list: 'drinks'
            },
            material: {
                list: 'materials'
            }
        }
    }
};
exports.Config = config;
//# sourceMappingURL=config.js.map
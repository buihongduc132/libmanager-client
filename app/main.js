"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_1 = require('./components/app');
var http_1 = require('@angular/http');
var routes_1 = require('./routes');
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [http_1.HTTP_PROVIDERS, routes_1.appRouterProviders
]);
//# sourceMappingURL=main.js.map
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_1 = require('./components/app');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var forms_1 = require('@angular/forms');
platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [http_1.HTTP_PROVIDERS, http_2.HTTP_BINDINGS,
    forms_1.disableDeprecatedForms(), forms_1.provideForms()
]);
//# sourceMappingURL=main.js.map
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var appComponent_1 = require('./appComponent');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(appComponent_1.AppComponent, [http_1.HTTP_PROVIDERS, app_routes_1.appRouterProviders]);
//# sourceMappingURL=main.js.map
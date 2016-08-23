"use strict";
var router_1 = require('@angular/router');
var loginComponent_1 = require('./loginComponent');
var landingPageComponent_1 = require('./landingPageComponent');
var signUpComponent_1 = require('./signUpComponent');
var manageProfile_1 = require('./manageProfile');
var route = [
    { path: 'landingPage', component: landingPageComponent_1.LandingPageComponent },
    { path: '', component: landingPageComponent_1.LandingPageComponent },
    { path: 'signUpPage', component: signUpComponent_1.SignUpComponent },
    { path: 'loginPage', component: loginComponent_1.LoginComponent },
    { path: 'manageProfile', component: manageProfile_1.ManageProfile }
];
exports.appRouterProviders = [
    router_1.provideRouter(route)
];
//# sourceMappingURL=app.routes.js.map
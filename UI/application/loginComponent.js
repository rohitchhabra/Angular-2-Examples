"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var loginModel_1 = require('./models/loginModel');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var properties_1 = require('./models/properties');
var common_1 = require('@angular/common');
var LoginComponent = (function () {
    function LoginComponent(http, fBuilder) {
        this.http = http;
        this.loginModel = new loginModel_1.LoginModel;
        this.prop = new properties_1.Properties;
        this.login = function () {
            var _this = this;
            this.postReqData(this.loginModel.email, this.loginModel.password).subscribe(function (data) {
                _this.loginRes = data,
                    console.log(data),
                    _this.manipulateResponse(data);
                if (data.resultCode == 1001)
                    alert("1101 " + data.resultDescription);
            }, function (error) { return console.log("error"); }, function () { return console.log("finished"); });
        };
        this.manipulateResponse = function (objt) {
            console.log(objt.resultCode);
            console.log(objt.resultDescription);
        };
        this.heroesUrl = 'http://date.jsontest.com';
        this.postReqData = function (email, password) {
            var json = JSON.stringify({
                "loginInfo": {
                    "password": email,
                    "userName": password
                }
            });
            var headers = new http_1.Headers();
            console.log(json);
            headers.append('Content-Type', 'application/json');
            return this.http.post(this.prop.baseUrl + 'login/validateUser', json, { headers: headers }).map(function (res) { return res.json(); });
            /**return this.http.get(this.heroesUrl).map((res:any) =>res.json());*/
        };
        console.log(this.prop.baseUrl);
        this.loginForm = fBuilder.group({
            email: ['', common_1.Validators.compose([common_1.Validators.required])],
            password: ['', common_1.Validators.compose([common_1.Validators.required])]
        });
    }
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-content',
            templateUrl: 'views/login.html',
            providers: [loginModel_1.LoginModel, properties_1.Properties],
            directives: [common_1.FORM_DIRECTIVES],
            styles: ["\n        .ng-valid {\n          border: 1px solid #42A948;\n        }\n        .ng-invalid {\n            border: 1px solid #a94442;\n        }\n    "]
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, common_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=loginComponent.js.map
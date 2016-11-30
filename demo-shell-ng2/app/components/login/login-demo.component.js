/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
System.register(['@angular/core', '@angular/router', '@angular/forms'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, forms_1;
    var LoginDemoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            LoginDemoComponent = (function () {
                function LoginDemoComponent(router) {
                    this.router = router;
                    this.providers = 'ECM';
                    this.disableCsrf = false;
                    this.isECM = true;
                    this.isBPM = false;
                    this.customValidation = {
                        username: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
                        password: ['', forms_1.Validators.required]
                    };
                }
                LoginDemoComponent.prototype.ngOnInit = function () {
                    this.alfrescologin.addCustomValidationError('username', 'required', 'LOGIN.MESSAGES.USERNAME-REQUIRED');
                    this.alfrescologin.addCustomValidationError('username', 'minlength', 'LOGIN.MESSAGES.USERNAME-MIN');
                    this.alfrescologin.addCustomValidationError('password', 'required', 'LOGIN.MESSAGES.PASSWORD-REQUIRED');
                    if (localStorage.getItem('providers')) {
                        this.providers = localStorage.getItem('providers');
                    }
                    this.setProviders();
                };
                LoginDemoComponent.prototype.setProviders = function () {
                    if (this.providers === 'BPM') {
                        this.isECM = false;
                        this.isBPM = true;
                    }
                    else if (this.providers === 'ECM') {
                        this.isECM = true;
                        this.isBPM = false;
                    }
                    else if (this.providers === 'ALL') {
                        this.isECM = true;
                        this.isBPM = true;
                    }
                };
                LoginDemoComponent.prototype.onLogin = function ($event) {
                    this.router.navigate(['/home']);
                };
                LoginDemoComponent.prototype.onError = function ($event) {
                    console.log($event);
                };
                LoginDemoComponent.prototype.toggleECM = function (checked) {
                    if (checked && this.providers === 'BPM') {
                        this.providers = 'ALL';
                    }
                    else if (checked) {
                        this.providers = 'ECM';
                    }
                    else if (!checked && this.providers === 'ALL') {
                        this.providers = 'BPM';
                    }
                    else if (!checked && this.providers === 'ECM') {
                        this.providers = '';
                    }
                    localStorage.setItem('providers', this.providers);
                };
                LoginDemoComponent.prototype.toggleBPM = function (checked) {
                    if (checked && this.providers === 'ECM') {
                        this.providers = 'ALL';
                    }
                    else if (checked) {
                        this.providers = 'BPM';
                    }
                    else if (!checked && this.providers === 'ALL') {
                        this.providers = 'ECM';
                    }
                    else if (!checked && this.providers === 'BPM') {
                        this.providers = '';
                    }
                    localStorage.setItem('providers', this.providers);
                };
                LoginDemoComponent.prototype.toggleCSRF = function () {
                    this.disableCsrf = !this.disableCsrf;
                };
                LoginDemoComponent.prototype.validateForm = function (event) {
                    var values = event.values;
                    if (values.controls['username'].value === this.blackListUsername) {
                        this.alfrescologin.addCustomFormError('username', 'This particular username has been blocked');
                        event.preventDefault();
                    }
                };
                __decorate([
                    core_1.ViewChild('alfrescologin'), 
                    __metadata('design:type', Object)
                ], LoginDemoComponent.prototype, "alfrescologin", void 0);
                LoginDemoComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'login-demo',
                        templateUrl: './login-demo.component.html',
                        styleUrls: ['./login-demo.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], LoginDemoComponent);
                return LoginDemoComponent;
            }());
            exports_1("LoginDemoComponent", LoginDemoComponent);
        }
    }
});
//# sourceMappingURL=login-demo.component.js.map
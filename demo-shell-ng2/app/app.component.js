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
System.register(['@angular/core', '@angular/router', 'ng2-alfresco-core'], function(exports_1, context_1) {
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
    var core_1, router_1, ng2_alfresco_core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_alfresco_core_1_1) {
                ng2_alfresco_core_1 = ng2_alfresco_core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(auth, router, alfrescoSettingsService, translate) {
                    this.auth = auth;
                    this.router = router;
                    this.alfrescoSettingsService = alfrescoSettingsService;
                    this.translate = translate;
                    this.searchTerm = '';
                    this.ecmHost = 'http://' + window.location.hostname + ':8080';
                    this.bpmHost = 'http://' + window.location.hostname + ':9999';
                    this.setEcmHost();
                    this.setBpmHost();
                    this.setProvider();
                    if (translate) {
                        translate.addTranslationFolder('custom', 'custom-translation/');
                        translate.addTranslationFolder('ng2-alfresco-login', 'custom-translation/alfresco-login');
                    }
                }
                AppComponent.prototype.isLoggedIn = function () {
                    this.redirectToLoginPageIfNotLoggedIn();
                    return this.auth.isLoggedIn();
                };
                AppComponent.prototype.redirectToLoginPageIfNotLoggedIn = function () {
                    if (!this.isLoginPage() && !this.auth.isLoggedIn()) {
                        this.router.navigate(['/login']);
                    }
                };
                AppComponent.prototype.isLoginPage = function () {
                    return location.pathname === '/login' || location.pathname === '/' || location.pathname === '/settings';
                };
                AppComponent.prototype.onLogout = function (event) {
                    var _this = this;
                    event.preventDefault();
                    this.auth.logout()
                        .subscribe(function () {
                        _this.router.navigate(['/login']);
                    }, function ($event) {
                        if ($event && $event.response && $event.response.status === 401) {
                            _this.router.navigate(['/login']);
                        }
                        else {
                            console.error('An unknown error occurred while logging out', $event);
                        }
                    });
                };
                AppComponent.prototype.onToggleSearch = function (event) {
                    var expandedHeaderClass = 'header-search-expanded', header = document.querySelector('header');
                    if (event.expanded) {
                        header.classList.add(expandedHeaderClass);
                    }
                    else {
                        header.classList.remove(expandedHeaderClass);
                    }
                };
                AppComponent.prototype.changeLanguage = function (lang) {
                    this.translate.use(lang);
                };
                AppComponent.prototype.hideDrawer = function () {
                    // todo: workaround for drawer closing
                    document.querySelector('.mdl-layout').MaterialLayout.toggleDrawer();
                };
                AppComponent.prototype.setEcmHost = function () {
                    if (localStorage.getItem("ecmHost")) {
                        this.alfrescoSettingsService.ecmHost = localStorage.getItem("ecmHost");
                        this.ecmHost = localStorage.getItem("ecmHost");
                    }
                    else {
                        this.alfrescoSettingsService.ecmHost = this.ecmHost;
                    }
                };
                AppComponent.prototype.setBpmHost = function () {
                    if (localStorage.getItem("bpmHost")) {
                        this.alfrescoSettingsService.bpmHost = localStorage.getItem("bpmHost");
                        this.bpmHost = localStorage.getItem("bpmHost");
                    }
                    else {
                        this.alfrescoSettingsService.bpmHost = this.bpmHost;
                    }
                };
                AppComponent.prototype.setProvider = function () {
                    if (localStorage.getItem("providers")) {
                        this.alfrescoSettingsService.setProviders(localStorage.getItem("providers"));
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'alfresco-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css']
                    }), 
                    __metadata('design:paramtypes', [ng2_alfresco_core_1.AlfrescoAuthenticationService, router_1.Router, ng2_alfresco_core_1.AlfrescoSettingsService, ng2_alfresco_core_1.AlfrescoTranslationService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
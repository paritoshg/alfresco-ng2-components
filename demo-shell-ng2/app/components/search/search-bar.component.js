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
    var SearchBarComponent;
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
            SearchBarComponent = (function () {
                function SearchBarComponent(router, auth) {
                    this.router = router;
                    this.auth = auth;
                    this.fileShowed = false;
                    this.searchTerm = '';
                    this.expand = new core_1.EventEmitter();
                }
                SearchBarComponent.prototype.isLoggedIn = function () {
                    return this.auth.isLoggedIn();
                };
                /**
                 * Called when the user submits the search, e.g. hits enter or clicks submit
                 *
                 * @param event Parameters relating to the search
                 */
                SearchBarComponent.prototype.onSearchSubmit = function (event) {
                    this.router.navigate(['/search', {
                            q: event.value
                        }]);
                };
                SearchBarComponent.prototype.onFileClicked = function (event) {
                    if (event.value.entry.isFile) {
                        this.fileNodeId = event.value.entry.id;
                        this.fileShowed = true;
                    }
                };
                SearchBarComponent.prototype.onSearchTermChange = function (event) {
                    this.searchTerm = event.value;
                };
                SearchBarComponent.prototype.onExpandToggle = function (event) {
                    this.expand.emit(event);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SearchBarComponent.prototype, "expand", void 0);
                SearchBarComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'search-bar',
                        templateUrl: './search-bar.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, ng2_alfresco_core_1.AlfrescoAuthenticationService])
                ], SearchBarComponent);
                return SearchBarComponent;
            }());
            exports_1("SearchBarComponent", SearchBarComponent);
        }
    }
});
//# sourceMappingURL=search-bar.component.js.map
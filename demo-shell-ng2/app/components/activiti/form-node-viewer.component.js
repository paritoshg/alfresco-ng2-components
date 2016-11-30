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
System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var FormNodeViewer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            FormNodeViewer = (function () {
                function FormNodeViewer(route) {
                    this.route = route;
                }
                FormNodeViewer.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.route.params.subscribe(function (params) {
                        _this.nodeId = params['id'];
                    });
                };
                FormNodeViewer.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                FormNodeViewer.prototype.ngAfterViewChecked = function () {
                    // workaround for MDL issues with dynamic components
                    if (componentHandler) {
                        componentHandler.upgradeAllRegistered();
                    }
                };
                FormNodeViewer = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'form-node-viewer',
                        templateUrl: './form-node-viewer.component.html',
                        styleUrls: ['./form-node-viewer.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute])
                ], FormNodeViewer);
                return FormNodeViewer;
            }());
            exports_1("FormNodeViewer", FormNodeViewer);
        }
    }
});
//# sourceMappingURL=form-node-viewer.component.js.map
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
System.register(['@angular/core', 'ng2-alfresco-core'], function(exports_1, context_1) {
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
    var core_1, ng2_alfresco_core_1;
    var SettingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_alfresco_core_1_1) {
                ng2_alfresco_core_1 = ng2_alfresco_core_1_1;
            }],
        execute: function() {
            SettingComponent = (function () {
                function SettingComponent(alfrescoSettingsService) {
                    this.alfrescoSettingsService = alfrescoSettingsService;
                    this.ecmHost = this.alfrescoSettingsService.ecmHost;
                    this.bpmHost = this.alfrescoSettingsService.bpmHost;
                }
                SettingComponent.prototype.onChangeECMHost = function (event) {
                    console.log(event.target.value);
                    this.ecmHost = event.target.value;
                    this.alfrescoSettingsService.ecmHost = this.ecmHost;
                    localStorage.setItem("ecmHost", this.ecmHost);
                };
                SettingComponent.prototype.onChangeBPMHost = function (event) {
                    console.log(event.target.value);
                    this.bpmHost = event.target.value;
                    this.alfrescoSettingsService.bpmHost = this.bpmHost;
                    localStorage.setItem("bpmHost", this.bpmHost);
                };
                SettingComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'alfresco-setting-demo',
                        templateUrl: './setting.component.html',
                        styleUrls: ['./setting.component.css']
                    }), 
                    __metadata('design:paramtypes', [ng2_alfresco_core_1.AlfrescoSettingsService])
                ], SettingComponent);
                return SettingComponent;
            }());
            exports_1("SettingComponent", SettingComponent);
        }
    }
});
//# sourceMappingURL=setting.component.js.map
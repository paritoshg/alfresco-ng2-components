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
System.register(['@angular/core', '@angular/platform-browser', 'ng2-alfresco-core', 'ng2-alfresco-search', 'ng2-alfresco-login', 'ng2-alfresco-datatable', 'ng2-alfresco-documentlist', 'ng2-alfresco-upload', 'ng2-alfresco-tag', 'ng2-alfresco-webscript', 'ng2-alfresco-viewer', 'ng2-activiti-form', 'ng2-activiti-tasklist', 'ng2-activiti-processlist', 'ng2-alfresco-userinfo', 'ng2-activiti-analytics', './app.component', './app.routes', './components/activiti/custom-editor/custom-editor.component', './components/index'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, ng2_alfresco_core_1, ng2_alfresco_search_1, ng2_alfresco_login_1, ng2_alfresco_datatable_1, ng2_alfresco_documentlist_1, ng2_alfresco_upload_1, ng2_alfresco_tag_1, ng2_alfresco_webscript_1, ng2_alfresco_viewer_1, ng2_activiti_form_1, ng2_activiti_tasklist_1, ng2_activiti_processlist_1, ng2_alfresco_userinfo_1, ng2_activiti_analytics_1, app_component_1, app_routes_1, custom_editor_component_1, index_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (ng2_alfresco_core_1_1) {
                ng2_alfresco_core_1 = ng2_alfresco_core_1_1;
            },
            function (ng2_alfresco_search_1_1) {
                ng2_alfresco_search_1 = ng2_alfresco_search_1_1;
            },
            function (ng2_alfresco_login_1_1) {
                ng2_alfresco_login_1 = ng2_alfresco_login_1_1;
            },
            function (ng2_alfresco_datatable_1_1) {
                ng2_alfresco_datatable_1 = ng2_alfresco_datatable_1_1;
            },
            function (ng2_alfresco_documentlist_1_1) {
                ng2_alfresco_documentlist_1 = ng2_alfresco_documentlist_1_1;
            },
            function (ng2_alfresco_upload_1_1) {
                ng2_alfresco_upload_1 = ng2_alfresco_upload_1_1;
            },
            function (ng2_alfresco_tag_1_1) {
                ng2_alfresco_tag_1 = ng2_alfresco_tag_1_1;
            },
            function (ng2_alfresco_webscript_1_1) {
                ng2_alfresco_webscript_1 = ng2_alfresco_webscript_1_1;
            },
            function (ng2_alfresco_viewer_1_1) {
                ng2_alfresco_viewer_1 = ng2_alfresco_viewer_1_1;
            },
            function (ng2_activiti_form_1_1) {
                ng2_activiti_form_1 = ng2_activiti_form_1_1;
            },
            function (ng2_activiti_tasklist_1_1) {
                ng2_activiti_tasklist_1 = ng2_activiti_tasklist_1_1;
            },
            function (ng2_activiti_processlist_1_1) {
                ng2_activiti_processlist_1 = ng2_activiti_processlist_1_1;
            },
            function (ng2_alfresco_userinfo_1_1) {
                ng2_alfresco_userinfo_1 = ng2_alfresco_userinfo_1_1;
            },
            function (ng2_activiti_analytics_1_1) {
                ng2_activiti_analytics_1 = ng2_activiti_analytics_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (custom_editor_component_1_1) {
                custom_editor_component_1 = custom_editor_component_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            app_routes_1.routing,
                            ng2_alfresco_core_1.CoreModule.forRoot(),
                            ng2_alfresco_login_1.LoginModule,
                            ng2_alfresco_search_1.SearchModule.forRoot(),
                            ng2_alfresco_datatable_1.DataTableModule,
                            ng2_alfresco_documentlist_1.DocumentListModule.forRoot(),
                            ng2_alfresco_upload_1.UploadModule.forRoot(),
                            ng2_alfresco_tag_1.TagModule.forRoot(),
                            ng2_alfresco_webscript_1.WebScriptModule,
                            ng2_alfresco_viewer_1.ViewerModule.forRoot(),
                            ng2_activiti_form_1.ActivitiFormModule.forRoot(),
                            ng2_activiti_tasklist_1.ActivitiTaskListModule.forRoot(),
                            ng2_activiti_processlist_1.ActivitiProcessListModule.forRoot(),
                            ng2_alfresco_userinfo_1.UserInfoComponentModule.forRoot(),
                            ng2_activiti_analytics_1.AnalyticsModule.forRoot(),
                            custom_editor_component_1.CustomEditorsModule
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            index_1.SearchBarComponent,
                            index_1.DataTableDemoComponent,
                            index_1.SearchComponent,
                            index_1.SearchBarComponent,
                            index_1.LoginDemoComponent,
                            index_1.ActivitiDemoComponent,
                            index_1.FormViewer,
                            index_1.WebscriptComponent,
                            index_1.TagComponent,
                            index_1.AboutComponent,
                            index_1.FilesComponent,
                            index_1.FormNodeViewer,
                            index_1.SettingComponent
                        ],
                        providers: [],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map
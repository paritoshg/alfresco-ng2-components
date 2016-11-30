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
System.register(['@angular/core', 'ng2-activiti-tasklist', 'ng2-activiti-processlist', '@angular/router', 'ng2-alfresco-datatable', 'ng2-activiti-form', './custom-editor/custom-editor.component'], function(exports_1, context_1) {
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
    var core_1, ng2_activiti_tasklist_1, ng2_activiti_processlist_1, router_1, ng2_alfresco_datatable_1, ng2_activiti_form_1, custom_editor_component_1;
    var currentProcessIdNew, ActivitiDemoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_activiti_tasklist_1_1) {
                ng2_activiti_tasklist_1 = ng2_activiti_tasklist_1_1;
            },
            function (ng2_activiti_processlist_1_1) {
                ng2_activiti_processlist_1 = ng2_activiti_processlist_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_alfresco_datatable_1_1) {
                ng2_alfresco_datatable_1 = ng2_alfresco_datatable_1_1;
            },
            function (ng2_activiti_form_1_1) {
                ng2_activiti_form_1 = ng2_activiti_form_1_1;
            },
            function (custom_editor_component_1_1) {
                custom_editor_component_1 = custom_editor_component_1_1;
            }],
        execute: function() {
            currentProcessIdNew = '__NEW__';
            ActivitiDemoComponent = (function () {
                function ActivitiDemoComponent(route, formRenderingService) {
                    this.route = route;
                    this.formRenderingService = formRenderingService;
                    this.taskSchemaColumns = [];
                    this.processSchemaColumns = [];
                    this.dataTasks = new ng2_alfresco_datatable_1.ObjectDataTableAdapter([], [
                        { type: 'text', key: 'name', title: 'Name', cssClass: 'full-width name-column', sortable: true },
                        { type: 'text', key: 'created', title: 'Created', cssClass: 'hidden', sortable: true }
                    ]);
                    this.dataTasks.setSorting(new ng2_alfresco_datatable_1.DataSorting('created', 'desc'));
                    this.dataProcesses = new ng2_alfresco_datatable_1.ObjectDataTableAdapter([], [
                        { type: 'text', key: 'name', title: 'Name', cssClass: 'full-width name-column' },
                        { type: 'text', key: 'started', title: 'Started', cssClass: 'hidden' }
                    ]);
                    // Uncomment this line to replace all 'text' field editors with custom component
                    // formRenderingService.setComponentTypeResolver('text', () => CustomEditorComponent, true);
                    // Uncomment this line to map 'custom_stencil_01' to local editor component
                    formRenderingService.setComponentTypeResolver('custom_stencil_01', function () { return custom_editor_component_1.CustomStencil01; }, true);
                }
                ActivitiDemoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub = this.route.params.subscribe(function (params) {
                        _this.appId = params['appId'];
                    });
                    this.layoutType = ng2_activiti_tasklist_1.ActivitiApps.LAYOUT_GRID;
                };
                ActivitiDemoComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                ActivitiDemoComponent.prototype.onAppClick = function (app) {
                    this.appId = app.id;
                    this.taskFilter = null;
                    this.currentTaskId = null;
                    this.processFilter = null;
                    this.currentProcessInstanceId = null;
                    this.changeTab('apps', 'tasks');
                };
                ActivitiDemoComponent.prototype.changeTab = function (origin, destination) {
                    this.tabMain.nativeElement.children[origin].classList.remove('is-active');
                    this.tabMain.nativeElement.children[destination].classList.add('is-active');
                    this.tabHeader.nativeElement.children[(origin + "-header")].classList.remove('is-active');
                    this.tabHeader.nativeElement.children[(destination + "-header")].classList.add('is-active');
                };
                ActivitiDemoComponent.prototype.onTaskFilterClick = function (event) {
                    this.taskFilter = event;
                };
                ActivitiDemoComponent.prototype.onReportClick = function (event) {
                    this.report = event;
                };
                ActivitiDemoComponent.prototype.onSuccessTaskFilterList = function (event) {
                    this.taskFilter = this.activitifilter.getCurrentFilter();
                };
                ActivitiDemoComponent.prototype.onStartTaskSuccess = function (event) {
                    this.activititasklist.reload();
                };
                ActivitiDemoComponent.prototype.onSuccessTaskList = function (event) {
                    this.currentTaskId = this.activititasklist.getCurrentId();
                };
                ActivitiDemoComponent.prototype.onProcessFilterClick = function (event) {
                    this.processFilter = event;
                };
                ActivitiDemoComponent.prototype.onSuccessProcessFilterList = function (event) {
                    this.processFilter = this.activitiprocessfilter.getCurrentFilter();
                };
                ActivitiDemoComponent.prototype.onSuccessProcessList = function (event) {
                    this.currentProcessInstanceId = this.activitiprocesslist.getCurrentId();
                };
                ActivitiDemoComponent.prototype.onTaskRowClick = function (taskId) {
                    this.currentTaskId = taskId;
                };
                ActivitiDemoComponent.prototype.onProcessRowClick = function (processInstanceId) {
                    this.currentProcessInstanceId = processInstanceId;
                };
                ActivitiDemoComponent.prototype.navigateStartProcess = function () {
                    this.currentProcessInstanceId = currentProcessIdNew;
                };
                ActivitiDemoComponent.prototype.onStartProcessInstance = function (instance) {
                    this.currentProcessInstanceId = instance.id;
                    this.activitiStartProcess.reset();
                };
                ActivitiDemoComponent.prototype.isStartProcessMode = function () {
                    return this.currentProcessInstanceId === currentProcessIdNew;
                };
                ActivitiDemoComponent.prototype.processCancelled = function (data) {
                    this.currentProcessInstanceId = null;
                    this.activitiprocesslist.reload();
                };
                ActivitiDemoComponent.prototype.onSuccessNewProcess = function (data) {
                    this.activitiprocesslist.reload();
                };
                ActivitiDemoComponent.prototype.taskFormCompleted = function (data) {
                    this.activitiprocesslist.reload();
                };
                ActivitiDemoComponent.prototype.onFormCompleted = function (form) {
                    this.activititasklist.reload();
                    this.currentTaskId = null;
                };
                ActivitiDemoComponent.prototype.ngAfterViewChecked = function () {
                    // workaround for MDL issues with dynamic components
                    if (componentHandler) {
                        componentHandler.upgradeAllRegistered();
                    }
                };
                __decorate([
                    core_1.ViewChild('activitiapps'), 
                    __metadata('design:type', ng2_activiti_tasklist_1.ActivitiApps)
                ], ActivitiDemoComponent.prototype, "activitiapps", void 0);
                __decorate([
                    core_1.ViewChild('activitifilter'), 
                    __metadata('design:type', Object)
                ], ActivitiDemoComponent.prototype, "activitifilter", void 0);
                __decorate([
                    core_1.ViewChild('activitidetails'), 
                    __metadata('design:type', Object)
                ], ActivitiDemoComponent.prototype, "activitidetails", void 0);
                __decorate([
                    core_1.ViewChild(ng2_activiti_tasklist_1.ActivitiTaskList), 
                    __metadata('design:type', ng2_activiti_tasklist_1.ActivitiTaskList)
                ], ActivitiDemoComponent.prototype, "activititasklist", void 0);
                __decorate([
                    core_1.ViewChild('activitiprocessfilter'), 
                    __metadata('design:type', Object)
                ], ActivitiDemoComponent.prototype, "activitiprocessfilter", void 0);
                __decorate([
                    core_1.ViewChild(ng2_activiti_processlist_1.ActivitiProcessInstanceListComponent), 
                    __metadata('design:type', ng2_activiti_processlist_1.ActivitiProcessInstanceListComponent)
                ], ActivitiDemoComponent.prototype, "activitiprocesslist", void 0);
                __decorate([
                    core_1.ViewChild('activitiprocessdetails'), 
                    __metadata('design:type', Object)
                ], ActivitiDemoComponent.prototype, "activitiprocessdetails", void 0);
                __decorate([
                    core_1.ViewChild(ng2_activiti_processlist_1.ActivitiStartProcessInstance), 
                    __metadata('design:type', ng2_activiti_processlist_1.ActivitiStartProcessInstance)
                ], ActivitiDemoComponent.prototype, "activitiStartProcess", void 0);
                __decorate([
                    core_1.ViewChild('tabmain'), 
                    __metadata('design:type', Object)
                ], ActivitiDemoComponent.prototype, "tabMain", void 0);
                __decorate([
                    core_1.ViewChild('tabheader'), 
                    __metadata('design:type', Object)
                ], ActivitiDemoComponent.prototype, "tabHeader", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], ActivitiDemoComponent.prototype, "appId", void 0);
                ActivitiDemoComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'activiti-demo',
                        templateUrl: './activiti-demo.component.html',
                        styleUrls: ['./activiti-demo.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, ng2_activiti_form_1.FormRenderingService])
                ], ActivitiDemoComponent);
                return ActivitiDemoComponent;
            }());
            exports_1("ActivitiDemoComponent", ActivitiDemoComponent);
        }
    }
});
//# sourceMappingURL=activiti-demo.component.js.map
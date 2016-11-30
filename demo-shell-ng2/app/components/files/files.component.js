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
System.register(['@angular/core', '@angular/router', 'ng2-alfresco-core', 'ng2-alfresco-documentlist', 'ng2-activiti-form'], function(exports_1, context_1) {
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
    var core_1, router_1, ng2_alfresco_core_1, ng2_alfresco_documentlist_1, ng2_activiti_form_1;
    var FilesComponent;
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
            },
            function (ng2_alfresco_documentlist_1_1) {
                ng2_alfresco_documentlist_1 = ng2_alfresco_documentlist_1_1;
            },
            function (ng2_activiti_form_1_1) {
                ng2_activiti_form_1 = ng2_activiti_form_1_1;
            }],
        execute: function() {
            FilesComponent = (function () {
                function FilesComponent(documentActions, auth, formService, router) {
                    this.documentActions = documentActions;
                    this.auth = auth;
                    this.formService = formService;
                    this.router = router;
                    this.currentPath = '/Sites/swsdp/documentLibrary';
                    this.fileShowed = false;
                    this.multipleFileUpload = false;
                    this.folderUpload = false;
                    this.acceptedFilesTypeShow = false;
                    this.versioning = false;
                    this.acceptedFilesType = '.jpg,.pdf,.js';
                    documentActions.setHandler('my-handler', this.myDocumentActionHandler.bind(this));
                }
                FilesComponent.prototype.myDocumentActionHandler = function (obj) {
                    window.alert('my custom action handler');
                };
                FilesComponent.prototype.myCustomAction1 = function (event) {
                    alert('Custom document action for ' + event.value.entry.name);
                };
                FilesComponent.prototype.myFolderAction1 = function (event) {
                    alert('Custom folder action for ' + event.value.entry.name);
                };
                FilesComponent.prototype.showFile = function (event) {
                    if (event.value.entry.isFile) {
                        this.fileNodeId = event.value.entry.id;
                        this.fileShowed = true;
                    }
                    else {
                        this.fileShowed = false;
                    }
                };
                FilesComponent.prototype.onFolderChanged = function (event) {
                    if (event) {
                        this.currentPath = event.path;
                    }
                };
                FilesComponent.prototype.toggleMultipleFileUpload = function () {
                    this.multipleFileUpload = !this.multipleFileUpload;
                    return this.multipleFileUpload;
                };
                FilesComponent.prototype.toggleFolder = function () {
                    this.multipleFileUpload = false;
                    this.folderUpload = !this.folderUpload;
                    return this.folderUpload;
                };
                FilesComponent.prototype.toggleAcceptedFilesType = function () {
                    this.acceptedFilesTypeShow = !this.acceptedFilesTypeShow;
                    return this.acceptedFilesTypeShow;
                };
                FilesComponent.prototype.toggleVersioning = function () {
                    this.versioning = !this.versioning;
                    return this.versioning;
                };
                FilesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (this.auth.isBpmLoggedIn()) {
                        this.formService.getProcessDefinitions().subscribe(function (defs) { return _this.setupBpmActions(defs || []); }, function (err) { return console.log(err); });
                    }
                    else {
                        console.log('You are not logged in');
                    }
                };
                FilesComponent.prototype.viewActivitiForm = function (event) {
                    this.router.navigate(['/activiti/tasksnode', event.value.entry.id]);
                };
                FilesComponent.prototype.setupBpmActions = function (actions) {
                    var _this = this;
                    actions.map(function (def) {
                        var documentAction = new ng2_alfresco_documentlist_1.DocumentActionModel();
                        documentAction.title = 'Activiti: ' + (def.name || 'Unknown process');
                        documentAction.handler = _this.getBpmActionHandler(def);
                        _this.documentList.actions.push(documentAction);
                        var folderAction = new ng2_alfresco_documentlist_1.FolderActionModel();
                        folderAction.title = 'Activiti: ' + (def.name || 'Unknown process');
                        folderAction.handler = _this.getBpmActionHandler(def);
                        _this.documentList.actions.push(folderAction);
                    });
                };
                FilesComponent.prototype.getBpmActionHandler = function (processDefinition) {
                    return function (obj, target) {
                        window.alert("Starting BPM process: " + processDefinition.id);
                    }.bind(this);
                };
                __decorate([
                    core_1.ViewChild(ng2_alfresco_documentlist_1.DocumentList), 
                    __metadata('design:type', ng2_alfresco_documentlist_1.DocumentList)
                ], FilesComponent.prototype, "documentList", void 0);
                FilesComponent = __decorate([
                    core_1.Component({
                        moduleId: __moduleName,
                        selector: 'files-component',
                        templateUrl: './files.component.html',
                        styleUrls: ['./files.component.css']
                    }), 
                    __metadata('design:paramtypes', [ng2_alfresco_documentlist_1.DocumentActionsService, ng2_alfresco_core_1.AlfrescoAuthenticationService, ng2_activiti_form_1.FormService, router_1.Router])
                ], FilesComponent);
                return FilesComponent;
            }());
            exports_1("FilesComponent", FilesComponent);
        }
    }
});
//# sourceMappingURL=files.component.js.map
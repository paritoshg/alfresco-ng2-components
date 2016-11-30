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
System.register(['@angular/router', './components/index', 'ng2-alfresco-upload'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, index_1, ng2_alfresco_upload_1;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (ng2_alfresco_upload_1_1) {
                ng2_alfresco_upload_1 = ng2_alfresco_upload_1_1;
            }],
        execute: function() {
            exports_1("appRoutes", appRoutes = [
                { path: 'home', component: index_1.FilesComponent },
                { path: 'files', component: index_1.FilesComponent },
                { path: 'datatable', component: index_1.DataTableDemoComponent },
                { path: '', component: index_1.LoginDemoComponent },
                { path: 'uploader', component: ng2_alfresco_upload_1.UploadButtonComponent },
                { path: 'login', component: index_1.LoginDemoComponent },
                { path: 'search', component: index_1.SearchComponent },
                { path: 'activiti', component: index_1.ActivitiDemoComponent },
                { path: 'activiti/appId/:appId', component: index_1.ActivitiDemoComponent },
                { path: 'activiti/tasks/:id', component: index_1.FormViewer },
                { path: 'activiti/tasksnode/:id', component: index_1.FormNodeViewer },
                { path: 'webscript', component: index_1.WebscriptComponent },
                { path: 'tag', component: index_1.TagComponent },
                { path: 'about', component: index_1.AboutComponent },
                { path: 'settings', component: index_1.SettingComponent }
            ]);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routes.js.map
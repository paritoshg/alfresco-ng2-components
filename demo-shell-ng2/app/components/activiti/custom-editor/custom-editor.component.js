System.register(['@angular/core', 'ng2-activiti-form'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_activiti_form_1;
    var CustomEditorComponent, CustomStencil01, CustomEditorsModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_activiti_form_1_1) {
                ng2_activiti_form_1 = ng2_activiti_form_1_1;
            }],
        execute: function() {
            CustomEditorComponent = (function (_super) {
                __extends(CustomEditorComponent, _super);
                function CustomEditorComponent() {
                    _super.apply(this, arguments);
                }
                CustomEditorComponent = __decorate([
                    core_1.Component({
                        selector: 'custom-editor',
                        template: "\n        <div style=\"color: red\">Look, I'm a custom editor!</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomEditorComponent);
                return CustomEditorComponent;
            }(ng2_activiti_form_1.WidgetComponent));
            exports_1("CustomEditorComponent", CustomEditorComponent);
            CustomStencil01 = (function (_super) {
                __extends(CustomStencil01, _super);
                function CustomStencil01() {
                    _super.apply(this, arguments);
                }
                CustomStencil01 = __decorate([
                    core_1.Component({
                        selector: 'custom-stencil-01',
                        template: "<div style=\"color: green\">ADF version of custom Activiti stencil</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomStencil01);
                return CustomStencil01;
            }(ng2_activiti_form_1.WidgetComponent));
            exports_1("CustomStencil01", CustomStencil01);
            CustomEditorsModule = (function () {
                function CustomEditorsModule() {
                }
                CustomEditorsModule = __decorate([
                    core_1.NgModule({
                        declarations: [CustomEditorComponent, CustomStencil01],
                        exports: [CustomEditorComponent, CustomStencil01],
                        entryComponents: [CustomEditorComponent, CustomStencil01]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomEditorsModule);
                return CustomEditorsModule;
            }());
            exports_1("CustomEditorsModule", CustomEditorsModule);
        }
    }
});
//# sourceMappingURL=custom-editor.component.js.map
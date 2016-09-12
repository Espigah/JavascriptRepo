var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("app-component.html", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var APP_COMPONENT_TEMPLATE;
    return {
        setters:[],
        execute: function() {
            exports_1("APP_COMPONENT_TEMPLATE", APP_COMPONENT_TEMPLATE = '<h1>My First Angular ts App</h1>');
        }
    }
});
System.register("app-component", ["app-component.html", '@angular/core'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var app_component_html_1, core_1;
    var AppComponent;
    return {
        setters:[
            function (app_component_html_1_1) {
                app_component_html_1 = app_component_html_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-component',
                        template: app_component_html_1.APP_COMPONENT_TEMPLATE,
                        styleUrls: ["app/app-component.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_2("AppComponent", AppComponent);
        }
    }
});
System.register("app-module", ['@angular/core', '@angular/platform-browser', "app-component"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, platform_browser_1, app_component_1;
    var AppModule;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_2.NgModule({
                        imports: [platform_browser_1.BrowserModule],
                        declarations: [app_component_1.AppComponent],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_3("AppModule", AppModule);
        }
    }
});
System.register("main", ['@angular/platform-browser-dynamic', "app-module"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var platform_browser_dynamic_1, app_module_1;
    var platform;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }],
        execute: function() {
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(app_module_1.AppModule);
        }
    }
});
//# sourceMappingURL=official.bundle.js.map
(function (_angular_platformBrowserDynamic, _angular_core, _angular_platformBrowser) {
    'use strict';
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(k, v);
    }
    var APP_COMPONENT_TEMPLATE = '<h1>My First Angular ts App</h1>';
    var AppComponent = (function () {
        function AppComponent() {
        }
        AppComponent = __decorate([
            _angular_core.Component({
                selector: 'app-component',
                template: APP_COMPONENT_TEMPLATE,
                styleUrls: ["app/app-component.css"]
            }),
            __metadata('design:paramtypes', [])
        ], AppComponent);
        return AppComponent;
    }());
    var AppModule = (function () {
        function AppModule() {
        }
        AppModule = __decorate([
            _angular_core.NgModule({
                imports: [_angular_platformBrowser.BrowserModule],
                declarations: [AppComponent],
                bootstrap: [AppComponent]
            }),
            __metadata('design:paramtypes', [])
        ], AppModule);
        return AppModule;
    }());
    var platform = _angular_platformBrowserDynamic.platformBrowserDynamic();
    platform.bootstrapModule(AppModule);
}(vendor._angular_platformBrowserDynamic, vendor._angular_core, vendor._platform - browser));
//# sourceMappingURL=rollup.bundle.es2015.js.map

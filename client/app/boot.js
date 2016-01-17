var browser_1 = require("angular2/platform/browser");
var router_1 = require("angular2/router");
var core_1 = require("angular2/core");
var http_1 = require("angular2/http");
var app_1 = require("./app");
var userService_1 = require("./services/userService");
browser_1.bootstrap(app_1.UserDirectoryApp, [router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    userService_1.UserService,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
//# sourceMappingURL=boot.js.map
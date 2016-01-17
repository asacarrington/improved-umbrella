var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var router_1 = require("angular2/router");
require("rxjs/add/operator/map");
var listUser_1 = require("./user/list/listUser");
//import {HTTP_PROVIDERS} from "angular2/http";
var core_1 = require("angular2/core");
var editUser_1 = require("./user/edit/editUser");
var UserDirectoryApp = (function () {
    function UserDirectoryApp() {
        this.title = "User Directory";
    }
    UserDirectoryApp = __decorate([
        core_1.Component({
            selector: "user-app",
            templateUrl: "/app/app.html",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: "/list", name: "List", component: listUser_1.UserList },
            { path: "/edit/:id", component: editUser_1.Edit, name: "Edit" }
        ])
    ], UserDirectoryApp);
    return UserDirectoryApp;
})();
exports.UserDirectoryApp = UserDirectoryApp;
//# sourceMappingURL=app.js.map
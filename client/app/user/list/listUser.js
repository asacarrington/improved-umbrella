var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var userDisplay_1 = require("./userDisplay");
var router_1 = require("angular2/router");
var core_1 = require("angular2/core");
var UserList = (function () {
    function UserList(userManager, router) {
        this.users = userManager.getAll();
        console.log('got alll return');
        this.router = router;
        this.userManager = userManager;
        console.log(JSON.stringify(this.users));
    }
    UserList.prototype.ngOnInit = function () {
    };
    UserList.prototype.editUser = function (id) {
        this.router.navigate(['Edit', { id: id }]);
    };
    UserList = __decorate([
        core_1.Component({
            selector: "user-list",
            templateUrl: "./app/user/list/listUser.html",
            directives: [router_1.ROUTER_DIRECTIVES, userDisplay_1.UserDisplay]
        })
    ], UserList);
    return UserList;
})();
exports.UserList = UserList;
//# sourceMappingURL=listUser.js.map
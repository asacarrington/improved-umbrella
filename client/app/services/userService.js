var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var user_1 = require("../models/user");
var core_1 = require("angular2/core");
var baseUrl = "api/movies";
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.users = [];
        this.users.push(new user_1.User("mr", "asa", "carrington"));
        this.users.push(new user_1.User("mr", "dan", "harry"));
        this.users.push(new user_1.User("mr", "tom", "brooks"));
        console.log('asdassadasdasaa');
        this.pageTitle = "EPIC TITLE";
        this.blurbData = "epic page text from crm";
    }
    UserService.prototype.getAll = function () {
        console.log('return this');
        return this.users;
    };
    UserService.prototype.getById = function (id) {
        for (var _a = 0, _b = this.users; _a < _b.length; _a++) {
            var user = _b[_a];
            if (user.id == id) {
                return user;
            }
        }
        return null;
    };
    UserService.prototype.deleteUser = function (id) {
        for (var _i = 0; _i < this.users.length; _i++) {
            if (this.users[_i].id == id) {
                this.users.splice(_i, 1);
            }
        }
    };
    UserService.prototype.getAllMovies = function () {
        return this.http.get(baseUrl)
            .map(function (response) { return response.json(); })
            .map(function (json) { return json.map(function (m) {
            return new Movie(m.id, m.title, m.rating, m.length);
        }); });
    };
    UserService.prototype.getMovieById = function (id) {
        return this.http.get(baseUrl + "/" + id)
            .map(function (response) { return response.json(); });
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
})();
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var UserDisplay = (function () {
    function UserDisplay() {
        this.editUser = new core_1.EventEmitter();
    }
    UserDisplay.prototype.edit = function () {
        this.editUser.emit(this.user);
    };
    UserDisplay.prototype.changeRating = function () {
        console.log("in directive");
        console.log("in directiv move" + this.user);
        this.ratingChange.emit(this.user.id + 1);
    };
    __decorate([
        core_1.Input()
    ], UserDisplay.prototype, "user");
    __decorate([
        core_1.Output()
    ], UserDisplay.prototype, "editUser");
    UserDisplay = __decorate([
        core_1.Component({
            selector: "user-display",
            template: "\n\t\t<div>\n\t\t\t<h3> {{ user.title }} </h3>\n\t\t\t<h3> {{ user.firstname }} </h3>\n\t\t\t<h3> {{ user.surname }} </h3>\n\t\t\t<button (click)=\"edit()\">Edit</button>\n\t\t</div>\n\t"
        })
    ], UserDisplay);
    return UserDisplay;
})();
exports.UserDisplay = UserDisplay;
// ngOnChanges(changes) {
// 	console.dir(changes);
// }
//
var Foo = (function () {
    function Foo() {
    }
    Foo = __decorate([
        core_1.Directive({})
    ], Foo);
    return Foo;
})();
exports.Foo = Foo;
//# sourceMappingURL=userDisplay.js.map
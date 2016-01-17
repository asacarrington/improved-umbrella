var User = (function () {
    function User(title, firstname, surname) {
        this.id = this.generateId();
        this.title = title;
        this.firstname = firstname;
        this.surname = surname;
    }
    User.prototype.isUserConfirmed = function () {
        return this.isConfirmed;
    };
    User.prototype.generateId = function () {
        return Math.floor((Math.random() * 10) + 1);
    };
    return User;
})();
exports.User = User;
//# sourceMappingURL=user.js.map
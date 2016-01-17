var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var common_1 = require("angular2/common");
var Edit = (function () {
    function Edit(params, userService, builder, router) {
        this.userService = userService;
        this.router = router;
        this.editForm = builder.group({
            "title": ["initial value"],
            "rating": [1],
            "length": [120]
        });
        this.title = this.editForm.controls["title"];
        this.rating = this.editForm.controls["rating"];
        this.length = this.editForm.controls["length"];
        this.id = parseFloat(params.get("id"));
    }
    Edit.prototype.ngOnInit = function () {
        /*
                this.movieData.getById(this.id)
                    .subscribe(
                        movie => {
                            this.title.updateValue(movie.title);
                            this.length.updateValue(movie.length);
                            this.rating.updateValue(movie.rating);
                        },
                        error => console.log(error)
                    );*/
    };
    Edit.prototype.submit = function () {
        /*   if (this.editForm.valid) {
               let data = this.editForm.value;
               data.id = this.id;
   
               this.movieData.update(data)
                   .subscribe(
                       () => {
                           this.router.navigate(['Detail', { id: this.id }]);
                       },
                       error => console.log(error)
                   )
   
           }*/
    };
    Edit = __decorate([
        core_1.Component({
            templateUrl: "/app/user/edit/edit.html",
            directives: [common_1.FORM_DIRECTIVES]
        })
    ], Edit);
    return Edit;
})();
exports.Edit = Edit;
//# sourceMappingURL=editUser.js.map
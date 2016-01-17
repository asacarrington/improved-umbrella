import {User} from "../../models/User";
import {UserService} from "../../services/userService";
import {UserDisplay} from "./userDisplay";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {OnInit} from "angular2/core";
import {RouteParams, Router} from "angular2/router";
import {Component, provide, Provider} from "angular2/core";

@Component({
    selector: "user-list",
    templateUrl: "./app/user/list/listUser.html",
    directives: [ROUTER_DIRECTIVES, UserDisplay]
})
export class UserList implements OnInit {
    constructor(userManager: UserService,
                router: Router) {
        this.users = userManager.getAll();
        console.log('got alll return');
        this.router = router;
        this.userManager = userManager;

        console.log(JSON.stringify(this.users));

    }
    ngOnInit() {

    }

    editUser(id: number) {
        this.router.navigate(['Edit', {id:id}]);
    }

    users: Array<any>;

    router: Router;

    userManager: UserService;

}
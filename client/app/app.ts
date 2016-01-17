
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import "rxjs/add/operator/map";
import {UserList} from "./user/list/listUser";
//import {HTTP_PROVIDERS} from "angular2/http";
import {Component, provide, Provider} from "angular2/core";
import {HTTP_PROVIDERS} from "angular2/http";
import {Edit} from "./user/edit/editUser";

@Component({
    selector: "user-app",
    templateUrl: "/app/app.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/list", name: "List", component:UserList},
    { path: "/edit/:id", component: Edit, name: "Edit"}
])
export class UserDirectoryApp {
    public title: string = "User Directory";
}

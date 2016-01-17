import {bootstrap} from "angular2/platform/browser"
import {ROUTER_PROVIDERS,
    HashLocationStrategy,
    LocationStrategy} from "angular2/router"
import {App} from "./app"
import {provide, enableProdMode} from "angular2/core"
import {HTTP_PROVIDERS} from "angular2/http";
import {UserDirectoryApp} from "./app";
import {UserService} from "./services/userService";

bootstrap(UserDirectoryApp,
    [ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        UserService,
        provide(LocationStrategy, {useClass: HashLocationStrategy})]);

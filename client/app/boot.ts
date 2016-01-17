import {bootstrap} from "angular2/platform/browser"
import {provide} from "angular2/core";
import {ROUTER_PROVIDERS,
        LocationStrategy, HashLocationStrategy} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {UserDirectoryApp} from "./app";

bootstrap(UserDirectoryApp,
    [ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})]);

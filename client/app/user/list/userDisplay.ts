import { EventEmitter, Component, Directive, Input, Output, OnInit, OnDestroy, OnChanges} from "angular2/core";
import {User} from "../../models/User";

@Component({
    selector:"user-display",
    template: `
		<div>
			<h3> {{ user.title }} </h3>
			<h3> {{ user.firstname }} </h3>
			<h3> {{ user.surname }} </h3>
			<button (click)="edit()">Edit</button>
		</div>
	`
})
export class UserDisplay  {

    @Input() user : User;
    @Output() editUser: EventEmitter<User> = new EventEmitter();


    edit() {
        this.editUser.emit(this.user);
    }

    changeRating() {
        console.log("in directive");

        console.log("in directiv move" + this.user);
        this.ratingChange.emit(this.user.id + 1);
    }

}

// ngOnChanges(changes) {
// 	console.dir(changes);
// }
//


@Directive({

})
export class Foo {}
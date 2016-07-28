import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	moduleId: module.id,
	directives: [ROUTER_DIRECTIVES],
	selector: 'app-user',
	templateUrl: 'user.component.html',
	styleUrls: ['user.component.css']
})
export class UserComponent {
	users: FirebaseListObservable<any[]>;

	constructor(af: AngularFire) {
		this.users = af.database.list('users');
	}

}

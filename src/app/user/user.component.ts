import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../auth/auth-service';

@Component({
	directives: [ROUTER_DIRECTIVES],
	selector: 'app-user',
	templateUrl: 'user.component.html',
	styleUrls: ['user.component.css']
})
export class UserComponent {
	users: FirebaseListObservable<any[]>;

	constructor(af: AngularFire, auth: AuthService) {
		const path = `/users/${auth.id}`;
		this.users = af.database.list(path);
	}

}

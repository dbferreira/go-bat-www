import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../auth/auth-service';

@Component({
	selector: 'app-match',
	templateUrl: 'match.component.html',
	styleUrls: ['match.component.css']
})
export class MatchComponent {
	matches: FirebaseListObservable<any[]>;
	auth: AuthService;

	constructor(public af: AngularFire, auth: AuthService) {
		const path = `/matches/${auth.id}`;
		this.matches = af.database.list(path);
		this.auth = auth;
	}

}

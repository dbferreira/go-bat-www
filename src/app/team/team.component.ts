import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../auth/auth-service';

@Component({
	selector: 'app-team',
	templateUrl: 'team.component.html',
	styleUrls: ['team.component.css']
})
export class TeamComponent {
	teams: FirebaseListObservable<any[]>;

	constructor(af: AngularFire, auth: AuthService) {
		const path = `/teams/${auth.id}`;
		this.teams = af.database.list(path);
	}

}

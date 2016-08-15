import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'app-team',
	templateUrl: 'team.component.html',
	styleUrls: ['team.component.css']
})
export class TeamComponent {
	teams: FirebaseListObservable<any[]>;

	constructor(af: AngularFire) {
		this.teams = af.database.list('teams');
	}

}

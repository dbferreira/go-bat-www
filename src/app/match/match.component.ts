import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
	moduleId: module.id,
	selector: 'app-match',
	templateUrl: 'match.component.html',
	styleUrls: ['match.component.css']
})
export class MatchComponent {
	matches: FirebaseListObservable<any[]>;

	constructor(af: AngularFire) {
		this.matches = af.database.list('matches');
	}

}

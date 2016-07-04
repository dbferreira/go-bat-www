import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
	moduleId: module.id,
	providers: [FirebaseService],
	selector: 'app-team',
	templateUrl: 'team.component.html',
	styleUrls: ['team.component.css']
})
export class TeamComponent implements OnInit {
	teams = [];
	constructor(private firebaseService: FirebaseService) {

	}

	ngOnInit() {
		this.reload();
	}

	reload() {
		return this.firebaseService.list('teams')
			.then(teams => this.teams = teams);
	}


}

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
	moduleId: module.id,
	providers: [FirebaseService],
	selector: 'app-match',
	templateUrl: 'match.component.html',
	styleUrls: ['match.component.css']
})
export class MatchComponent implements OnInit {
	matches = [];
	constructor(private firebaseService: FirebaseService) {

	}

	ngOnInit() {
		this.reload();
	}

	reload() {
		return this.firebaseService.list('matches')
			.then(matches => this.matches = matches);
	}


}

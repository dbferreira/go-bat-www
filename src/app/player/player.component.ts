import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
	moduleId: module.id,
	providers: [FirebaseService],
	selector: 'app-player',
	templateUrl: 'player.component.html',
	styleUrls: ['player.component.css']
})
export class PlayerComponent implements OnInit {
	players = [];
	constructor(private firebaseService: FirebaseService) {

	}

	ngOnInit() {
		this.reload();
	}

	reload() {
		return this.firebaseService.list('players')
			.then(players => {
				console.info("received stuff:", players);
				this.players = players;
			});
	}


}

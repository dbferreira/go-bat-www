import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../auth/auth-service';
import { Player } from '../player';

@Component({
	selector: 'app-player',
	templateUrl: 'player.component.html',
	styleUrls: ['player.component.css']
})
export class PlayerComponent {
	players: FirebaseListObservable<any[]>;

	constructor(public af: AngularFire, auth: AuthService) {
		const path = `/players/${auth.id}`;
		console.info(path);
		if (auth.id) { this.players = af.database.list(path); };
	}

	addPlayer(newName: string) {
		this.players.push(new Player({
			name: newName,
			age: 25,
			fitness: 7.34
		}));
	}

	deletePlayer(key: string) {
		this.players.remove(key);
	}

	login() {
		this.af.auth.login();
	}



	//   update(key: string, newSize: string) {
	//     this.items.update(key, { size: newSize });
	//   }

	//   deleteEverything() {
	//     this.items.remove();
	//   }



}

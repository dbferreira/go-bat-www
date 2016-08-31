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
	newplayer: string = '';
	loading: boolean = true;
	isViewTable: boolean = false;
	players: FirebaseListObservable<any[]>;
	countries: string[] = ['ZA', 'ZW', 'AU', 'NZ', 'GB', 'IN', 'LK', 'PK'];

	constructor(public af: AngularFire, auth: AuthService) {
		const path = `/players/${auth.id}`;
		this.players = af.database.list(path);
		this.players.subscribe((p) => {
			this.loading = false;
		});
	}

	addPlayer(input: HTMLInputElement) {
		this.players.push(new Player({
			name: input.value,
			age: 25,
			nationality: this.countries[Math.floor(Math.random() * this.countries.length)].toLowerCase(),
			fitness: 7.34
		}));
		input.value = '';
	}

	deletePlayer(key: string) {
		this.players.remove(key);
	}

	login() {
		this.af.auth.login();
	}

	setView(view: string) {
		this.isViewTable = view === 'table';
	}



	//   update(key: string, newSize: string) {
	//     this.items.update(key, { size: newSize });
	//   }

	//   deleteEverything() {
	//     this.items.remove();
	//   }



}

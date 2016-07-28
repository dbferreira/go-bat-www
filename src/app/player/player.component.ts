import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
	moduleId: module.id,
	selector: 'app-player',
	templateUrl: 'player.component.html',
	styleUrls: ['player.component.css']
})
export class PlayerComponent {
	players: FirebaseListObservable<any[]>;

	constructor(public af: AngularFire) {
		this.players = af.database.list('players');
		this.af.auth.subscribe(auth => console.log(auth));
	}

	addPlayer(newName: string) {
		this.players.push({ name: newName });
	}

	deletePlayer(key: string) {
		this.players.remove(key);
	}

	login() {
		this.af.auth.login(
			{
				email: 'daniel.ferreira@imqs.co.za',
				password: '123456'
			},
			{
				provider: AuthProviders.Password,
				method: AuthMethods.Password
			});
	}

	//   update(key: string, newSize: string) {
	//     this.items.update(key, { size: newSize });
	//   }

	//   deleteEverything() {
	//     this.items.remove();
	//   }



}

import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { AuthService } from '../auth/auth-service';

@Component({
	selector: 'app-userlandingpage',
	templateUrl: 'userlandingpage.component.html',
	styleUrls: ['userlandingpage.component.css']
})
export class UserlandingpageComponent implements OnInit {
	newUser: boolean = false;
	loading: boolean = true;
	receivedNewTeam: boolean = false;
	team: FirebaseObjectObservable<any[]>;
	auth: AuthService;

	constructor(public af: AngularFire, auth: AuthService) {
		this.auth = auth;
		const path = `/teams/${auth.id}`;
		this.team = af.database.object(path);
		this.team.subscribe((t) => {
			this.loading = false;
			if (t['$value'] === null && !this.receivedNewTeam && !this.newUser) {
				this.newUser = true;
			} else if (this.newUser) {
				this.receivedTeam(t);
			}
		});
	}

	receivedTeam(team: any): void {
		this.newUser = false;
		this.receivedNewTeam = true;
	}

	createTeam(teamName: HTMLInputElement): void {

		// Todo: validate name to check for duplicates and possibly remove swear words
		this.af.database.object(`queues/teams/${this.auth.id}`)
			.set({
				user: this.auth.id,
				name: teamName.value,
				created: new Date().getTime()
			});
	}

	ngOnInit() {
	}

}

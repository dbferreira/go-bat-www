import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
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
	teams: FirebaseListObservable<any[]>;

	constructor(public af: AngularFire, auth: AuthService) {
		const path = `/teams/${auth.id}`;
		this.teams = af.database.list(path);
		this.teams.subscribe((t) => {
			if (this.newUser && t.length > 0) {
				this.receivedTeam(t[0]);
			};
			this.loading = false;
			this.newUser = t.length === 0;
			if (this.newUser) {
				af.database.object(`queues/teams/${auth.id}`)
					.set({
						user: auth.id,
						created: new Date().getTime()
					});
			}
		});
	}

	receivedTeam(team: any): void {
		this.receivedNewTeam = true;
	}

	ngOnInit() {
	}

}

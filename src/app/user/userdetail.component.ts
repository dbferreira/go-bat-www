import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
	selector: 'app-userdetail',
	templateUrl: 'userdetail.component.html',
	styleUrls: ['userdetail.component.css']
})
export class UserDetailComponent {
	user: FirebaseObjectObservable<any>;

	constructor(private route: ActivatedRoute,
		private af: AngularFire) {
		this.route.params
			.map(params => params['id'])
			.subscribe((id) => this.user = af.database.object('/users/' + id));

	}

}

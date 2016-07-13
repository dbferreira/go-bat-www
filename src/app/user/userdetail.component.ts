import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	moduleId: module.id,
	providers: [FirebaseService],
	selector: 'app-userdetail',
	templateUrl: 'userdetail.component.html',
	styleUrls: ['userdetail.component.css']
})
export class UserDetailComponent implements OnInit {
	user = {};
	constructor(private route: ActivatedRoute,
		private firebaseService: FirebaseService) {

	}

	ngOnInit() {
		this.route.params
			.map(params => params['id'])
			.subscribe((id) => {
				this.firebaseService
					.item('users', id)
					.then(user => {
						this.user = user;
					});
			});
	}

}

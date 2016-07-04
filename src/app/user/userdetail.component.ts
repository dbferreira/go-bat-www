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
				console.log("subscribing wih id ",id);
				this.firebaseService
					.item('users', id)
					.then(user => {
						console.info("received a user...", user);
						this.user = user
					});
			});
	}




}

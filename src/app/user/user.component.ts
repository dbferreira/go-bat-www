import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	moduleId: module.id,
	providers: [FirebaseService],
	directives: [ROUTER_DIRECTIVES],
	selector: 'app-user',
	templateUrl: 'user.component.html',
	styleUrls: ['user.component.css']
})
export class UserComponent implements OnInit {
	users = [];
	constructor(private firebaseService: FirebaseService) {

	}

	ngOnInit() {
		this.reload();
	}

	reload() {
		return this.firebaseService.list('users')
			.then(users => this.users = users);
	}


}

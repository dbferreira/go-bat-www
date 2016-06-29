import { Users } from './mock-data'

export class User {
	private joined: number;	
	constructor(
		public username: string,
		public name: string,
		public email: string,
		public password: string,
		public age?: number) {
		this.joined = Math.floor(Date.now() / 1000);
	}

	getUserData() {	
		for (var i = 0; i < Users.length; ++i) {
			console.log("Importing user: ", Users[i]);
			
		}

	}
}

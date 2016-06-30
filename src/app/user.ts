
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

}

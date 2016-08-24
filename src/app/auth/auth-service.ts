import { Injectable } from '@angular/core';
import { AuthProviders, FirebaseAuth, FirebaseAuthState } from 'angularfire2';


@Injectable()
export class AuthService {
	private authState: FirebaseAuthState = null;

	constructor(public af: FirebaseAuth) {
		af.subscribe((state: FirebaseAuthState) => {
			this.authState = state;
			console.info("User:", state);
		});
	}

	get authenticated(): boolean {
		return this.authState !== null;
	}

	get id(): string {
		return this.authenticated ? this.authState.uid : '';
	}

	get email(): string {
		return this.authenticated ? this.authState.auth.email : '';
	}
	get photo(): string {
		return this.authenticated ? this.authState.auth.providerData[0].photoURL : '';
	}

	signIn(provider: number) {
		return this.af.login({ provider })
			.catch(error => console.log('ERROR @ AuthService#signIn() :', error));
	}

	signInWithGithub() {
		return this.signIn(AuthProviders.Github);
	}

	signInWithGoogle() {
		return this.signIn(AuthProviders.Google);
	}

	signInWithTwitter() {
		return this.signIn(AuthProviders.Twitter);
	}

	signOut(): void {
		this.af.logout();
	}


}

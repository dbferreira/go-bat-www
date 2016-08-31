import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth-service';


@Component({
	styleUrls: ['sign-in.css'],
	selector: 'app-signin',
	templateUrl: 'sign-in.html'
})
export class SignInComponent {
	loginError: string;
	constructor(private auth: AuthService, private router: Router) { }

	signInWithGithub(): void {
		this.auth.signInWithGithub()
			.then(() => this.postSignIn());
	}

	signInWithGoogle(): void {
		this.auth.signInWithGoogle()
			.then(() => this.postSignIn());
	}

	signInWithTwitter(): void {
		this.auth.signInWithTwitter()
			.then(() => this.postSignIn());
	}

	signInWithPassword(email, password: string): void {
		this.auth.signInWithPassword(email, password)
			.then(() => this.postSignIn())
			.catch((err) => this.loginError = this.getError(err['code']));
	}

	private postSignIn(): void {
		this.router.navigate(['/home']);
	}

	private getError(code: string): string {
		switch (code) {
			case 'auth/invalid-email':
				return 'Please enter a valid email address';
			default:
				return 'The username and password does not match';
		}

	}

}

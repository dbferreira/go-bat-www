import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth-service';


@Component({
	styleUrls: ['sign-in.css'],
	selector: 'app-signin',
	templateUrl: 'sign-in.html'
})
export class SignInComponent {
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

	private postSignIn(): void {
		console.info("post sign-in");
		this.router.navigate(['/home']);
	}
}

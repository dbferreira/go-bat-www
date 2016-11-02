import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth-service';


@Component({
  styleUrls: ['sign-up.css'],
  selector: 'app-signup',
  templateUrl: 'sign-up.html'
})
export class SignUpComponent {
  dataError: string;
  constructor(private auth: AuthService, private router: Router) { }

  signUp(email, password: string): void {
    if (!email || !password) {
      this.dataError = 'Please complete all the required fields';
      return;
    }
    if (password.length < 6) {
      this.dataError = 'Passwords need to be 6 characters or longer';
      return;
    }

    this.auth.signUp(email, password)
      .then(() => this.router.navigate(['/home']))
      .catch((err) => {
        this.dataError = this.getError(err['code']);
      });
  }

  private getError(code: string): string {
    switch (code) {
      case 'auth/invalid-email':
        return 'Please enter a valid email address';
      default:
        return 'Please enter a valid email address and password';
    }

  }


}

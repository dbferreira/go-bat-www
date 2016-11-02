import 'rxjs/Rx';
import { Component } from '@angular/core';

import { AuthService } from './auth/auth-service';
import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  private title = 'Go-bat';
  private authState: FirebaseAuthState = null;

  constructor(public auth: AuthService) {
    // this.af.auth.subscribe((state: FirebaseAuthState) => {
    // 	this.authState = state;
    // });
  }
}

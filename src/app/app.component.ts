import 'rxjs/Rx';
import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { UserComponent } from './user/user.component';
import { TeamComponent } from './team/team.component';
import { MatchComponent } from './match/match.component';
import { AuthService } from './auth/auth-service';
import { AngularFire, FirebaseAuthState  } from 'angularfire2';

@Component({
	providers: [HTTP_PROVIDERS],
	directives: [ROUTER_DIRECTIVES, PlayerComponent, UserComponent, TeamComponent, MatchComponent],
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

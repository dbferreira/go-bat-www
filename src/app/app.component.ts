import 'rxjs/Rx';
import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { UserComponent } from './user/user.component';
import { TeamComponent } from './team/team.component';
import { MatchComponent } from './match/match.component';

@Component({
	moduleId: module.id,
	providers: [HTTP_PROVIDERS],
	directives: [ROUTER_DIRECTIVES, PlayerComponent, UserComponent, TeamComponent, MatchComponent],
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class AppComponent {
	title = 'Go-bat';
}

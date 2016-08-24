import { provideRouter, RouterConfig } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { PublicpageComponent } from './publicpage/publicpage.component';
import { AuthGuard } from './auth/auth-guard';

import { TeamComponent } from './team/team.component';
import { MatchComponent } from './match/match.component';
import { UserRoutes } from './user/user.routes';

export const routes: RouterConfig = [
	...UserRoutes,
	{ path: '', component:  PublicpageComponent},
	{ path: 'players', component:  PlayerComponent},
	{ path: 'teams', component:  TeamComponent},
	{ path: 'matches', component:  MatchComponent, canActivate: [AuthGuard]},
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];


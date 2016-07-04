import { provideRouter, RouterConfig } from '@angular/router';
import { PlayerComponent } from './player/player.component';

import { TeamComponent } from './team/team.component';
import { MatchComponent } from './match/match.component';
import { UserRoutes } from './user/user.routes';

export const routes: RouterConfig = [
	...UserRoutes,
	{ path: '', component:  PlayerComponent},
	{ path: 'players', component:  PlayerComponent},
	{ path: 'teams', component:  TeamComponent},
	{ path: 'matches', component:  MatchComponent},
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];


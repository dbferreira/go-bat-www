import { provideRouter, RouterConfig } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { PublicpageComponent } from './publicpage/publicpage.component';
import { AuthGuard } from './auth/auth-guard';
import { UnauthGuard } from './auth/unauth-guard';
import { SignInComponent } from './auth/sign-in';
import { SignUpComponent } from './auth/sign-up';

import { TeamComponent } from './team/team.component';
import { MatchComponent } from './match/match.component';
import { UserlandingpageComponent } from './userlandingpage/userlandingpage.component';
import { UserRoutes } from './user/user.routes';

export const routes: RouterConfig = [
	// Public pages
	{ path: '', component: PublicpageComponent },
	{ path: 'signin', component: SignInComponent, canActivate: [UnauthGuard] },
	{ path: 'signup', component: SignUpComponent, canActivate: [UnauthGuard] },

	// Private pages
	{ path: 'home', component: UserlandingpageComponent, canActivate: [AuthGuard]},
	{ path: 'players', component: PlayerComponent, canActivate: [AuthGuard] },
	{ path: 'teams', component: TeamComponent, canActivate: [AuthGuard] },
	{ path: 'matches', component: MatchComponent, canActivate: [AuthGuard] },
	...UserRoutes,
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];


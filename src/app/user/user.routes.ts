import { RouterConfig }          from '@angular/router';
import { UserComponent }     from './user.component';
import { UserDetailComponent }   from './userdetail.component';
import { AuthGuard } from '../auth/auth-guard';

export const UserRoutes: RouterConfig = [
	{ path: 'users', component: UserComponent, canActivate: [AuthGuard] },
	{ path: 'users/:id', component: UserDetailComponent, canActivate: [AuthGuard] }
];

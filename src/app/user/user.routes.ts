import { RouterConfig }          from '@angular/router';
import { UserComponent }     from './user.component';
import { UserDetailComponent }   from './userdetail.component';

export const UserRoutes: RouterConfig = [
  { path: 'users',  component: UserComponent },
  { path: 'users/:id', component: UserDetailComponent }
];

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routes';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { AuthGuard } from './auth/auth-guard';
import { UnauthGuard } from './auth/unauth-guard';
import { AuthService } from './auth/auth-service';
import * as firebase from 'firebase';


import { UserlandingpageComponent } from './userlandingpage/userlandingpage.component';
import { PlayerComponent } from './player/player.component';
import { UserComponent } from './user/user.component';
import { TeamComponent } from './team/team.component';
import { MatchComponent } from './match/match.component';
import { PublicpageComponent } from './publicpage/publicpage.component';
import { SignInComponent } from './auth/sign-in';
import { SignUpComponent } from './auth/sign-up';
import { UserDetailComponent }   from './user/userdetail.component';

const firebaseConfig = {
  apiKey: 'AIzaSyArJBZDD4R4Px5NICnLtV9Dn9yT5X3PH1U',
  authDomain: 'go-bat.firebaseapp.com',
  databaseURL: 'https://go-bat.firebaseio.com',
  storageBucket: 'go-bat.appspot.com'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect,
};

@NgModule({
  declarations: [
    AppComponent,
    UserlandingpageComponent,
    PlayerComponent,
    UserComponent,
    TeamComponent,
    MatchComponent,
    PublicpageComponent,
    SignInComponent,
    SignUpComponent,
    UserDetailComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing,
    RouterModule
  ],
  providers: [AuthGuard, UnauthGuard, AuthService, appRoutingProviders],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _appRef: ApplicationRef) { }

  ngDoBootstrap() {
    this._appRef.bootstrap(AppComponent);
  }
}

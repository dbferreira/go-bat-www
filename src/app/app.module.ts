import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTER_PROVIDERS } from "./app.routes";
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { AuthGuard } from './auth/auth-guard';
import { UnauthGuard } from './auth/unauth-guard';
import { AuthService } from './auth/auth-service';
import * as firebase from 'firebase';

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
		AppComponent
	],
	imports: [
		AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
		BrowserModule,
		CommonModule,
		FormsModule,
		RouterModule
	],
	providers: [APP_ROUTER_PROVIDERS, AuthGuard, UnauthGuard, AuthService],
	entryComponents: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(private _appRef: ApplicationRef) { }

	ngDoBootstrap() {
		this._appRef.bootstrap(AppComponent);
	}
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTER_PROVIDERS } from "./app.routes";
import {AngularFireModule} from 'angularfire2';
import *as firebase from 'firebase';

const firebaseConfig = {
		apiKey: 'AIzaSyArJBZDD4R4Px5NICnLtV9Dn9yT5X3PH1U',
		authDomain: 'go-bat.firebaseapp.com',
		databaseURL: 'https://go-bat.firebaseio.com',
		storageBucket: 'go-bat.appspot.com'
	}

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		AngularFireModule.initializeApp(firebaseConfig),
		BrowserModule,
		CommonModule,
		FormsModule,
		RouterModule
	],
	providers: [APP_ROUTER_PROVIDERS],
	entryComponents: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(private _appRef: ApplicationRef) { }

	ngDoBootstrap() {
		this._appRef.bootstrap(AppComponent);
	}
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { LocalStorageService, LocalStorageSubscriber } from './app/localstorage/LocalStorageEmitter';
import { FIREBASE_PROVIDERS,
	defaultFirebase,
	firebaseAuthConfig,
	AuthMethods,
	AuthProviders  } from 'angularfire2';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [
	LocalStorageService,
	APP_ROUTER_PROVIDERS,
	FIREBASE_PROVIDERS,
	defaultFirebase({
		apiKey: 'AIzaSyArJBZDD4R4Px5NICnLtV9Dn9yT5X3PH1U',
		authDomain: 'go-bat.firebaseapp.com',
		databaseURL: 'https://go-bat.firebaseio.com',
		storageBucket: 'go-bat.appspot.com'
	})
]).catch(err => console.error(err));

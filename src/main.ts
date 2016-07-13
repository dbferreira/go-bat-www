import 'rxjs/Rx';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { LocalStorageService, LocalStorageSubscriber } from './app/localstorage/LocalStorageEmitter';

if (environment.production) {
	enableProdMode();
}

let appPromise = bootstrap(AppComponent, [
	LocalStorageService,
	APP_ROUTER_PROVIDERS
]).catch(err => console.error(err));

LocalStorageSubscriber(appPromise);

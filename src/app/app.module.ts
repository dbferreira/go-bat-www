import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTER_PROVIDERS } from "./app.routes";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
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

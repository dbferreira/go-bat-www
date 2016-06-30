import 'rxjs/Rx';
import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { FirebaseService } from './firebase.service';
import { PlayerComponent } from './player/player.component';

@Component({
	moduleId: module.id,
	providers: [HTTP_PROVIDERS, FirebaseService],
	directives: [PlayerComponent],
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class AppComponent {
	title = 'Go-bat';
}

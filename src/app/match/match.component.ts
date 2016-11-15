import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { AuthService } from '../auth/auth-service';

@Component({
  selector: 'app-match',
  templateUrl: 'match.component.html',
  styleUrls: ['match.component.css']
})
export class MatchComponent {
  matches: FirebaseListObservable<any[]>;
  auth: AuthService;
  fixturesQueue: FirebaseObjectObservable<any[]>;
  canArrangeMatch: boolean = false;

  constructor(public af: AngularFire, auth: AuthService) {
    const path = `/matches/${auth.id}`;
    this.matches = af.database.list(path);
    this.auth = auth;
    this.fixturesQueue = af.database.object(`/queues/fixtures/${auth.id}`);

    // If a fixture assignment is already requested, prevent from adding another one
    this.fixturesQueue.subscribe((q) => {
      if ((q['$value'] === null)) {
        this.canArrangeMatch = false;
      } else {
        this.canArrangeMatch = true;
      }
    });
  }

  arrangeMatch() {
    this.fixturesQueue
      .set({
        user: this.auth.id,
        vs: 'random',
        created: new Date().getTime()
      });
  }

}

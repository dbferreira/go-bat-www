import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { AuthService } from '../auth/auth-service';
import { Player } from '../player';

@Component({
  selector: 'app-player',
  templateUrl: 'player.component.html',
  styleUrls: ['player.component.css']
})
export class PlayerComponent {
  newplayer: string = '';
  loading: boolean = true;
  isViewTable: boolean = false;
  canAddPlayer: boolean = false;
  players: FirebaseListObservable<any[]>;
  playerQueue: FirebaseObjectObservable<any[]>;
  auth: AuthService;
  countries: string[] = ['ZA', 'ZW', 'AU', 'NZ', 'GB', 'IN', 'LK', 'PK'];

  constructor(public af: AngularFire, auth: AuthService) {
    this.auth = auth;
    this.players = af.database.list(`/players/${auth.id}`);
    this.players.subscribe((p) => {
      this.loading = false;
    });
    this.playerQueue = af.database.object(`/queues/players/${auth.id}`);

    // If a team already exist, prevent from adding another one
    this.playerQueue.subscribe((q) => {
      if ((q['$value'] === null)) {
        this.canAddPlayer = false;
      } else {
        this.canAddPlayer = true;
      }
    });
  }

  addPlayer() {
    const afTeam = this.af.database.object(`teams/${this.auth.id}`);
    afTeam.subscribe((team) => {
      const teamRegion = team.region;
      this.playerQueue
        .set({
          user: this.auth.id,
          region: teamRegion,
          created: new Date().getTime()
        });
    });
  }

  deletePlayer(key: string) {
    this.players.remove(key);
  }

  // login() {
  //   this.af.auth.login();
  // }

  setView(view: string) {
    this.isViewTable = view === 'table';
  }



  //   update(key: string, newSize: string) {
  //     this.items.update(key, { size: newSize });
  //   }

  //   deleteEverything() {
  //     this.items.remove();
  //   }



}

import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { AuthService } from '../auth/auth-service';

@Component({
  selector: 'app-userlandingpage',
  templateUrl: 'userlandingpage.component.html',
  styleUrls: ['userlandingpage.component.css']
})
export class UserlandingpageComponent implements OnInit {
  newUser: boolean = false;
  loading: boolean = true;
  receivedNewTeam: boolean = false;
  countries: string[] = ['ZA', 'ZW', 'AU', 'NZ', 'GB', 'IN', 'LK', 'PK'];
  team: FirebaseObjectObservable<any[]>;
  teamQueue: FirebaseObjectObservable<any[]>;
  canAddTeam: boolean = true;
  auth: AuthService;

  constructor(public af: AngularFire, auth: AuthService) {
    this.auth = auth;
    const path = `/teams/${auth.id}`;
    this.team = af.database.object(path);
    this.team.subscribe((t) => {
      this.loading = false;
      if (t['$value'] === null && !this.receivedNewTeam && !this.newUser) {
        this.newUser = true;
      } else if (this.newUser) {
        this.receivedTeam(t);
      }
    });

    // If a team already exist, prevent from adding another one
    this.teamQueue = af.database.object(`/queues/teams/${this.auth.id}`);
    this.teamQueue.subscribe((q) => {
      if ((q['$value'] === null)) {
        this.canAddTeam = false;
      } else {
        this.canAddTeam = true;
      }
    });
  }

  receivedTeam(team: any): void {
    this.newUser = false;
    this.receivedNewTeam = true;
  }

  createTeam(teamName: HTMLInputElement, region: HTMLSelectElement): void {

    // Todo: validate name to check for duplicates and possibly remove swear words (https://github.com/raymondjavaxx/swearjar-node)
    this.af.database.object(`queues/teams/${this.auth.id}`)
      .set({
        user: this.auth.id,
        name: teamName.value,
        region: region,
        created: new Date().getTime()
      });
  }

  createRandomTeam(): void {
    const userID = Math.round(Math.random() * 1000);
    const teamName = 'Test Team ' + userID;
    const useRegion = this.countries[Math.round(Math.random() * 8)];
    this.af.database.object(`queues/teams/${this.auth.id}`)
      .set({
        user: this.auth.id,
        name: teamName,
        region: useRegion,
        created: new Date().getTime()
      });
  }

  ngOnInit() {
  }

}

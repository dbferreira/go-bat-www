
import { Player } from './player';
import { User } from './user';

export class Team {
  id: string;
  players: Player[];
  name: string;
  user: User;

  constructor(values: Object) {
    (<any>Object).assign(this, values);
  }

}

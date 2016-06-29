
import { Player } from './player';
import { User } from './user';

export class Team {
	id: number;
	players: Player[];
	name: string;
	user: User;

	constructor(values: Object) {
		(<any>Object).assign(this, values);
	}
}

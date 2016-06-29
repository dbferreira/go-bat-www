
import { Team } from './team';

export class Player {
	id: number;
	name: string;
	team: Team;

	constructor(values: Object) {
		(<any>Object).assign(this, values);

	}
}

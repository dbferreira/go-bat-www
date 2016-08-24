
import { Team } from './team';

export interface IPlayer {
	key?: string;
	createdAt: number;
	name: string;
	age: number;
	batting: number;
	bowling: number;
	fitness: number;
	team: Team;
}

export class Player implements IPlayer {
	createdAt: number;
	name: string;
	age: number;
	batting: number;
	bowling: number;
	fitness: number;
	team: Team;

	constructor(values: Object) {
		(<any>Object).assign(this, values);

	}
}

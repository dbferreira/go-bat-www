import { Team } from './team';

export class Match {
	id: number;
	homeTeam: Team;
	awayTeam: Team;
	winner: Team;
	timestamp: Date;
	homeTeamScore: string;
	awayTeamScore: string;


	constructor(values: Object) {
		(<any>Object).assign(this, values);
	}
}

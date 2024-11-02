type Team = {
	name: string;
	score?: number;
};

type Teams = [
	/** home team */
	Team,
	/** away team */
	Team,
];
export class Match {
	public startTime: Date;

	constructor(teams: Teams) {
		this.startTime = new Date();
	}
}

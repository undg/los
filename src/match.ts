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

	/**
	 * Creates a new Match instance.
	 * @param {Teams} teams - Array containing home and away teams.
	 */
	constructor(teams: Teams) {
		this.startTime = new Date();
	}
}

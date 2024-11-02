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
	public homeTeam = "";
	public homeScore = 0;
	public awayTeam = "";
	public awayScore = 0;

	/**
	 * Creates a new Match instance.
	 * @param {Teams} teams - Array containing home and away teams.
	 */
	constructor(teams: Teams) {
		const home = teams[0];
		const away = teams[1];
		this.startTime = new Date();
		this.homeTeam = home.name;
		this.homeScore = home.score ?? this.homeScore;
		this.awayTeam = away.name;
		this.awayScore = away.score ?? this.awayScore;
	}

	update(homeScore: number, awayScore: number) {
		this.homeScore = homeScore;
		this.awayScore = awayScore;
	}
}

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
	private startTime: Date;
	private homeTeam = "";
	private homeScore = 0;
	private awayTeam = "";
	private awayScore = 0;

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

	get() {
		return {
			startTime: this.startTime,
			homeTeam: this.homeTeam,
			homeScore: this.homeScore,
			awayTeam: this.awayTeam,
			awayScore: this.awayScore,
		};
	}
}

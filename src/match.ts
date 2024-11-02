import { GetMatch, Teams } from "./types.js";

export class Match {
	#startTime: Date;
	#totalScore = 0;
	#homeTeam = "";
	#homeScore = 0;
	#awayTeam = "";
	#awayScore = 0;

	/**
	 * Creates a new Match instance.
	 * @param {Teams} teams - Array containing home and away teams.
	 */
	constructor(teams: Teams) {
		const home = teams[0];
		const away = teams[1];
		this.#startTime = new Date();
		this.#homeTeam = home.name;
		this.#homeScore = home.score ?? this.#homeScore;
		this.#awayTeam = away.name;
		this.#awayScore = away.score ?? this.#awayScore;
	}

	update(homeScore: number, awayScore: number) {
		this.#homeScore = homeScore;
		this.#awayScore = awayScore;
		this.#totalScore = this.#homeScore + this.#awayScore;
	}

	get(): GetMatch {
		return {
			startTime: this.#startTime,
			totalScore: this.#totalScore,
			homeTeam: this.#homeTeam,
			homeScore: this.#homeScore,
			awayTeam: this.#awayTeam,
			awayScore: this.#awayScore,
		};
	}
}

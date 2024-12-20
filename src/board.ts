import { Match } from "./match.js";
import { GetMatch, Teams } from "./types.js";

export class Board {
	#board = new Map<string, Match>();

	constructor() {}

	/**
	 * Add match to board
	 * @param {string} matchName - Name of match, usually team1-team2
	 * @param {Teams} teams - Teams in match
	 * @example
	 * const board = new Board();
	 * board.add("GER-FRA", {
	 *   team1: { name: "Germany" },
	 *   team2: { name: "France" }
	 * });
	 */
	add(matchName: string, teams: Teams) {
		const match = new Match(teams);

		if (this.#board.has(matchName)) {
			console.warn(`Match ${matchName} already exists`);
			return;
		}

		this.#board.set(matchName, match);
	}

	update(matchName: string, [homeScore, awayScore]: [number, number]) {
		if (!this.#board.has(matchName)) {
			console.warn(`Can't update match '${matchName}'. Please add it first.`);
			return;
		}
		this.#board.get(matchName)?.update(homeScore, awayScore);
	}

	delete(matchName: string) {
		if (!this.#board.has(matchName)) {
			console.warn(`Can't delete match '${matchName}'. Please add it first.`);
			return;
		}
		this.#board.delete(matchName);
	}

	get() {
		const board = [...this.#board.values()]
			.map((b) => b.get())
			.toSorted((a, b) => {
				if (a.totalScore === b.totalScore) {
					return b.startTime.getTime() - a.startTime.getTime();
				}

				return a.totalScore - b.totalScore;
			});
		return board;
	}

	render() {
		const board = this.get();

		return board.map(
			(b) => `${b.homeTeam} ${b.homeScore} - ${b.awayTeam} ${b.awayScore}`,
		);
	}

	getTeamTotalScore(team: string): number {
		const board = [...this.#board.values()].map((b) => b.get());

		const teamsMap = new Map<string, number>();
		for (const match of board) {
			const homeTeam = match.homeTeam;
			const homeScore = match.homeScore + (teamsMap.get(homeTeam) ?? 0);
			teamsMap.set(homeTeam, homeScore);

			const awayTeam = match.awayTeam;
			const awayScore = match.awayScore + (teamsMap.get(awayTeam) ?? 0);
			teamsMap.set(awayTeam, awayScore);
		}

		return teamsMap.get("Team") ?? 0;
	}
}

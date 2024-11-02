import { Teams } from "./types.js";

export class Board {
	#board = new Map<string, Teams>();

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
		this.#board.set(matchName, teams);
	}

	update() {}
	delete() {}
	get() {
		const board = [...this.#board.values()];
		return board;
	}
	render() {}
}

import { describe, expect, it, vi } from "vitest";
import { Match } from "./match.js";

describe("Match", () => {
	const sysTime = new Date(
		"Sat Nov 02 2024 13:42:32 GMT+0000 (Greenwich Mean Time)",
	);
	vi.setSystemTime(sysTime);

	it("should store startTime", () => {
		const match = new Match([{ name: "t1" }, { name: "t2" }]);
		expect(match.startTime).toEqual(sysTime);
	});

	it("should store 2 teams with default 0-0 score", () => {
		const match = new Match([{ name: "t1" }, { name: "t2" }]);
		expect(match.homeTeam).toEqual("t1");
		expect(match.homeScore).toEqual(0);
		expect(match.awayTeam).toEqual("t2");
		expect(match.awayScore).toEqual(0);
	});

	it("should store 2 teams with 4-9 score", () => {
		const match = new Match([
			{ name: "t1", score: 4 },
			{ name: "t2", score: 9 },
		]);
		expect(match.homeTeam).toEqual("t1");
		expect(match.homeScore).toEqual(4);
		expect(match.awayTeam).toEqual("t2");
		expect(match.awayScore).toEqual(9);
	});
});

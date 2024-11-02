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
});

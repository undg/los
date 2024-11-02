import { describe, expect, it, vi } from "vitest";
import { Match } from "./match.js";

describe("Match", () => {
	const sysTime = new Date(
		"Sat Nov 02 2024 13:42:32 GMT+0000 (Greenwich Mean Time)",
	);
	vi.setSystemTime(sysTime);
	it("Store startTime", () => {
		const match = new Match();
		expect(match.startTime).toEqual(sysTime);
	});
});

import { describe, expect, it, vi } from "vitest";
import { Board } from "./board.js";

describe("Board", () => {
	it("shold have all methods documented in readme", () => {
		const board = new Board();
		expect(board).toHaveProperty("add");
		expect(board).toHaveProperty("update");
		expect(board).toHaveProperty("delete");
		expect(board).toHaveProperty("get");
		expect(board).toHaveProperty("render");
	});

	it("should add match to board", () => {
		const board = new Board();
		board.add("t1-t2", [{ name: "t1" }, { name: "t2" }]);

		expect(board.get()).toHaveLength(1);
		board.add("t2-t1", [{ name: "t1" }, { name: "t2" }]);

		expect(board.get()).toHaveLength(2);
	});

	it("should have score", () => {
		const board = new Board();
		board.add("t1-t2", [{ name: "t1" }, { name: "t2" }]);

		expect(board.get()[0].homeScore).toEqual(0);
		expect(board.get()[0].awayScore).toEqual(0);
	});

	it("should add only new match to board", () => {
		const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
		const board = new Board();
		const MATCH_NAME = "t1-t2";

		board.add(MATCH_NAME, [{ name: "t1" }, { name: "t2" }]);
		expect(board.get()[0].homeScore).toEqual(0);

		// at this point nothing will change
		board.add(MATCH_NAME, [
			{ name: "t1", score: 2 },
			{ name: "t2", score: 3 },
		]);
		expect(board.get()[0].homeScore).toEqual(0);

		// but we have warning in stdout
		expect(warnSpy).toHaveBeenCalledWith(`Match ${MATCH_NAME} already exists`);

		warnSpy.mockRestore();
	});

	it("should update score", () => {
		const board = new Board();
		board.add("h-a", [{ name: "home" }, { name: "away" }]);

		board.update("h-a", [888, 69]);

		expect(board.get()[0].homeScore).toEqual(888);
		expect(board.get()[0].awayScore).toEqual(69);
	});
});

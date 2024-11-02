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

	describe("add() & get()", () => {
		it("should add match to board", () => {
			const board = new Board();
			board.add("t1-t2", [{ name: "t1" }, { name: "t2" }]);

			expect(board.get()).toHaveLength(1);
			board.add("t2-t1", [{ name: "t1" }, { name: "t2" }]);

			expect(board.get()).toHaveLength(2);
		});

		it("should get score", () => {
			const board = new Board();
			board.add("t1-t2", [{ name: "t1" }, { name: "t2" }]);

			expect(board.get()[0].homeScore).toEqual(0);
			expect(board.get()[0].awayScore).toEqual(0);
		});

		it("should add only new match to board and bark", () => {
			const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
			const MATCH_NAME = "t1-t2";

			const board = new Board();

			board.add(MATCH_NAME, [{ name: "t1" }, { name: "t2" }]);
			expect(board.get()[0].homeScore).toEqual(0);

			// at this point nothing will change
			board.add(MATCH_NAME, [
				{ name: "t1", score: 2 },
				{ name: "t2", score: 3 },
			]);
			expect(board.get()[0].homeScore).toEqual(0);

			// but we have warning in stdout
			expect(warnSpy).toHaveBeenCalledWith(
				`Match ${MATCH_NAME} already exists`,
			);

			warnSpy.mockRestore();
		});
	});

	describe("update()", () => {
		it("should update score", () => {
			const board = new Board();
			board.add("h-a", [{ name: "home" }, { name: "away" }]);

			board.update("h-a", [888, 69]);

			expect(board.get()[0].homeScore).toEqual(888);
			expect(board.get()[0].awayScore).toEqual(69);
		});

		it("should NOT update non existing game and bark", () => {
			const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
			const NOOPE_MATCH = "t800-t1000";

			const board = new Board();

			// Normal behavior
			board.add("h-a", [
				{ name: "home", score: 69 },
				{ name: "away", score: 69 },
			]);

			// This should do nothing but bark at you in stdout
			board.update(NOOPE_MATCH, [888, 888]);

			// as expected
			expect(board.get()).toHaveLength(1);
			expect(board.get()[0].homeScore).toEqual(69);

			// bark
			expect(warnSpy).toHaveBeenCalledWith(
				`Can't update match '${NOOPE_MATCH}'. Please add it first.`,
			);
			warnSpy.mockRestore();
		});
	});

	describe("delete()", () => {
		it("should finish match, delete it", () => {
			const board = new Board();

			board.add("h-a", [{ name: "home" }, { name: "away" }]);
			expect(board.get()).toHaveLength(1);

			board.add("tA-tB", [{ name: "home" }, { name: "away" }]);
			expect(board.get()).toHaveLength(2);

			board.delete("tA-tB");
			expect(board.get()).toHaveLength(1);

			board.delete("h-a");
			expect(board.get()).toHaveLength(0);
		});

		it("should handle non existing Match", () => {
			const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
			const NOOPE_MATCH = "t800-t1000";
			const board = new Board();

			board.delete(NOOPE_MATCH);

			expect(warnSpy).toHaveBeenCalledWith(
				`Can't delete match '${NOOPE_MATCH}'. Please add it first.`,
			);

			warnSpy.mockRestore();
		});
	});

	describe("render()", () => {
		it("should render score board", () => {
			const board = new Board();
			board.add("h-a", [
				{ name: "home", score: 69 },
				{ name: "away", score: 888 },
			]);
			expect(board.render()).toEqual(["home 69 - away 888"]);
		});
	});

	describe("sort()", () => {
		it("should sort Maches by totalScore", () => {
			const board = new Board();

			// 18
			board.add("A-B", [
				{ name: "a", score: 9 },
				{ name: "b", score: 9 },
			]);

			// 2
			board.add("C-D", [
				{ name: "c", score: 1 },
				{ name: "d", score: 1 },
			]);

			// 2
			board.add("E-F", [
				{ name: "e", score: 1 },
				{ name: "f", score: 1 },
			]);

			expect(board.render()).toEqual([
				//
				"c 1 - d 1", // 2
				"e 1 - f 1", // 2 added second
				"a 9 - b 9", // 18
			]);
		});

		it("should sort Maches by totalScore and startDate", () => {
			const board = new Board();

			const sysTimeAfter = new Date(
				"Sat Nov 02 2024 22:00:00 GMT+0000 (Greenwich Mean Time)",
			);
			const sysTimeBefore = new Date(
				"Sat Nov 02 2024 10:00:00 GMT+0000 (Greenwich Mean Time)",
			);

			vi.setSystemTime(sysTimeBefore);
			// 18
			board.add("A-B", [
				{ name: "a", score: 9 },
				{ name: "b", score: 9 },
			]);

			vi.setSystemTime(sysTimeAfter);
			// 0
			board.add("C-D", [{ name: "c" }, { name: "d" }]);

			// 18 with later date
			board.update("C-D", [9, 9]);

			expect(board.render()).toEqual([
				//
				"c 9 - d 9",
				"a 9 - b 9",
			]);
		});
	});
});

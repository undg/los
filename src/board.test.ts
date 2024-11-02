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
});

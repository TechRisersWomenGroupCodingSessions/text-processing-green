const testAdd = require("./index.js");

describe("index", () => {
	it("evaluates the text and returns a list of the top 10 used words", () => {
		const text = "Hello, hello, you";

		expect(topTenList(text)).toBe("1. hello\n 2. you");
	});
});

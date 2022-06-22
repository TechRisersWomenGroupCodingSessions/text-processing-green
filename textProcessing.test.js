const testAdd = require("./index.js");

describe("index", () => {
	it("removes punctuation from the text string", () => {
		const text = "hello, hello you!";

		expect(stripPunctuation(text)).toBe("hello hello you");
	})

	// it("evaluates the text and returns a list of the top 10 used words", () => {
	// 	const text = "Hello, hello you";

	// 	expect(topTenList(text)).toBe("1. hello\n 2. you");
	// });
});

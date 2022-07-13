const text = require("./index.js");

describe("index", () => {
	it("removes punctuation from the text string", () => {
		const textString = "hello, hello you!";

		expect(text.stripPunctuation(textString)).toBe("hello hello you");
	});

	it("punctuation stripped text is parsed into wordsArray", () => {
		const textString = "hello, hello you!";

		expect(text.getWords(textString)).toStrictEqual(["hello", "hello", "you"]);
	});

	it("counts the total number of words in the text", () => {
		const textString = "hello, hello you!";

		expect(text.countWords(textString)).toBe(3);
	});

	it("creates an object of key value pairs of words and the number of times they appear in the text", () => {
		const textString = "Hello, hello you!";

		expect(text.wordOccurrences(textString)).toStrictEqual({
			hello: 2,
			you: 1,
		});
	});

	it("evaluates the text and returns a list of the top 10 used words", () => {
		const text = "Hello, hello you";

		expect(topTenList(text)).toStrictEqual("1. hello\n 2. you");
	});
});

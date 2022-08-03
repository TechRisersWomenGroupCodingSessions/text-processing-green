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

	// it("creates an object of key value pairs of words and the number of times they appear in the text", () => {
	// 	const textString = "Hello, hello you!";
	// 	console.log(text.wordOccurrences(textString))
	// 	console.log(text.frequencies)
	// 	expect(text.wordOccurrences(textString)).toStrictEqual({
	// 		hello: 2,
	// 		you: 1,
	// 	});
	// });

	it("creates an array of all the words ordered by the number of occurences of each word", () => {
		const textString = "Hello, hello you!";
		expect(text.getOrderedOccurrences(textString)).toStrictEqual(["hello", "you"]);
	});

	it("evaluates the text and returns a list of the top 10 used words", () => {
		const textString =
			"Hello, hello you you you are are are are very very very very very hot hot hot hot hot hot hot today";

		expect(text.topTenList(textString)).toStrictEqual([
			"1. hot",
			"2. very",
			"3. are",
			"4. you",
			"5. hello",
			"6. ",
			"7. ",
			"8. ",
			"9. ",
			"10. ",
		]);
	});
});

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
		expect(text.getOrderedOccurrences(textString)).toStrictEqual([
			"hello",
			"you",
		]);
	});

	it("evaluates the text and returns a list of the top 10 used words", () => {
		const textString =
			"Hello, hello you you you are are are are very very very very very hot hot hot hot hot hot hot today";

		expect(text.topTenList(textString)).toStrictEqual(
			`Those are the top 10 words used:\r\n\r\n1. hot\r\n2. very\r\n3. are\r\n4. you\r\n5. hello\r\n6. today\r\n7. \r\n8. \r\n9. \r\n10. \r\n\r\nThe text has in total 22 words`
		);
	});

	it("knows how many minutes it would take to read a given piece of text based on an average reading rate of 200 words per minute", () => {
		const textString = `Styles's music has been described as soft rock, pop, and rock, with elements of folk and Britpop. The musical style on his debut solo album was called a "mish-mash of Los Angeles' style classic rock and ballads" by NME, invoking an "intimately emotional Seventies soft-rock vibe" by Rolling Stone, and "synthesis[ing] influences from the last half-century of rock" by Time magazine. It was influenced by the artists he grew up listening to, such as Pink Floyd, The Rolling Stones, The Beatles and Fleetwood Mac, as well as the songwriting of Harry Nilsson.[144][145] Styles praised Nilsson's lyrics as being "honest, and so good, and I think it's because he's never trying to sound clever."[145] His second solo album, Fine Line, was seen by NME to have taken, "this nostalgic sound [from his first record] and combined it with soaring pop sensibilities."[146] Styles has also cited Freddie Mercury, Elvis Presley, and Paul McCartney (including his side project Wings) as influences, while mentioning Shania Twain as his main inspiration both musically and in fashion.[147][148][149] His favourite album is Astral Weeks by Northern Irish musician Van Morrison, which he called "completely perfect"; he also considers Etta James's album At Last! to be "perfect". Upon listening to Pink Floyd's 1973 album The Dark Side of the Moon as a child, he said he "couldn't really get it, but I just remember being like—this is really fucking cool."[5] Joni Mitchell's 1971 album Blue inspired Styles to contact the album's dulcimer instrumentalist, with whom he worked on Fine Line.`;

		expect(text.getReadingTime(textString)).toStrictEqual(1);
	});

	it("counts the total number of words in the text", () => {
		const textString = `Hello, this is an example for you to practice. You should grab this text and make it as your test case:
		if (true) {
  console.log('should should should')
}`;

		expect(text.countWords(textString)).toBe(3);
	});
});

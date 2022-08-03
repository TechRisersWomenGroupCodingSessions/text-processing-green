const text = {
	wordsArray: [],

	topTenList(textString) {
		const orderedWordsArray = this.getOrderedOccurrences(textString);
		console.log(orderedWordsArray);

		let topTenString = "";
		for (let i = 0; i < 10; i++) {
			
			topTen += "";
		}

		return topTenString;
	},

	stripPunctuation(textString) {
		const stripped = textString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
		return stripped;
	},

	getWords(textString) {
		let strippedText = this.stripPunctuation(textString);

		this.wordsArray = strippedText.toLowerCase().split(" ");

		return this.wordsArray;
	},

	countWords(textString) {
		return this.getWords(textString).length;
	},

	getWordOccurrences(textString) {
		const wordRank = this.getWords(textString).reduce(function (obj, word) {
			if (!obj[word]) {
				obj[word] = 0;
			}
			obj[word]++;
			return obj;
		}, {});

		return wordRank;
	},

	getOrderedOccurrences(textString) {
		const wordFrequencies = this.getWordOccurrences(textString);

		return Object.keys(wordFrequencies).sort(
			(a, b) => wordFrequencies[b] - wordFrequencies[a]
		);
	},
};

module.exports = text;

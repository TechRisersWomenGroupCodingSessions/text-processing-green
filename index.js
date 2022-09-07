const text = {
	wordsArray: [],

	topTenList(textString) {
		const orderedWordsArray = this.getOrderedOccurrences(textString);

		let topTenString = "Those are the top 10 words used:\r\n\r\n";
		for (let i = 0; i < 10; i++) {
			let currentWord = orderedWordsArray[i];
			if (currentWord) {
				topTenString += `${i + 1}. ${orderedWordsArray[i]}\r\n`;
			} else {
				topTenString += `${i + 1}. \r\n`;
			}
		}

		let wordCount = this.countWords(textString);
		topTenString += `\r\nThe text has in total ${wordCount} words`;
		console.log(topTenString);

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

	getReadingTime(textString) {

		const avgReadingMinutes = Math.floor(this.countWords(textString) / 200);
		const remainderReadingSecs = this.countWords(textString) % 200 / 200 * 0.60;
		console.log(remainderReadingSecs);
		if (remainderReadingSecs < 0.3) {
			return avgReadingMinutes
		} else {
		return avgReadingMinutes + Math.ceil(remainderReadingSecs);
		};
	},

};

module.exports = text;

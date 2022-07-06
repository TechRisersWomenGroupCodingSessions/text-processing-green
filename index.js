const text = {
	wordsArray: [],

	topTenList(textString) {
		//parse words considering white space, commas, dashes, period (e.g. mid-day) into maybe a dictionary key = word value = word count

		const wordsArray = textString.split(" ");
		console.log(wordsArray);

		const wordCount = {};

		//count words

		//display numbered list
	},

	stripPunctuation(textString) {
		const stripped = textString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
		return stripped;
	},

	getWords(textString) {
		let strippedText = this.stripPunctuation(textString);
		this.wordsArray = strippedText.split(" ");

		return this.wordsArray;
	},

	countWords(textString) {
		return this.getWords(textString).length;
	},
};

module.exports = text;

function topTenList(textString) {
    //parse words considering white space, commas, dashes, period (e.g. mid-day) into maybe a dictionary key = word value = word count
    
    textString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    const wordsArray = textString.split(" ");
    console.log(wordsArray);

    

    const wordCount = {}

    //count words

    //display numbered list
}

module.exports = topTenList; 
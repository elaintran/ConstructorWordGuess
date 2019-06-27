var Letter = require("./Letter.js");

var Word = function(word) {
    this.word = word;
    var letterArray = [];
    //var newLetters;
    var wordDisplay = "";
    this.array = function() {
        for (var i = 0; i < this.word.length; i++) {
            var newLetters = new Letter(this.word[i]);
            letterArray.push(newLetters.letter);
        }
        console.log(newLetters);
        console.log(letterArray);
    }
    this.display = function() {
        for (var i = 0; i < this.word.length; i++) {
            var newLetters = new Letter(this.word[i]);
            newLetters.correct = false;
            wordDisplay += newLetters.wordDisplay() + " ";
        }
        console.log(wordDisplay);
    }
}

var newWord = new Word("testing");
newWord.array();
newWord.display();

module.exports = Word;
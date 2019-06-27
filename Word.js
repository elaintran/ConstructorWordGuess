var Letter = require("./Letter.js");

var Word = function(word) {
    this.word = word;
    //var newLetters;
    var wordDisplay = "";
    this.array = function() {
        var letterArray = [];
        for (var i = 0; i < this.word.length; i++) {
            var newLetters = new Letter(this.word[i]);
            letterArray.push(newLetters.letter);
        }
        console.log(letterArray);
    }
    this.display = function() {
        for (var i = 0; i < this.word.length; i++) {
            var newLetters = new Letter(this.word[i]);
            //set to false to display underscores
            wordDisplay += newLetters.wordDisplay() + " ";
        }
        console.log(wordDisplay);
    }
    this.checker = function(boolean) {
        if (boolean) {
            newLetters.correct = true;
        } else {
            newLetters.correct = false;
        }
    }
}

var newWord = new Word("testing");
newWord.array();
newWord.display();

module.exports = Word;
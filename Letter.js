//function called every time the letters from the chosen word are looped through
var Letter = function(letter) {
    //place letter value into object
    this.letter = letter;
    //piece together letters in a word
    this.wordDisplay = function() {
        //if guessed correctly, reveal letter
        if (this.correct === true) {
            return this.letter;
        //if incorrect, display an underscore instead
        } else {
            return "_";
        }
    }
}

module.exports = Letter;
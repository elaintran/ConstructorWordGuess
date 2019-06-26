var words = ["wordone", "wordtwo", "wordthree"];
var index = Math.floor(Math.random() * words.length);
var randomWord = words[index];
var potato;
var newWord = "";

//function called every time the letters from the chosen word are looped through
function Letter(letter) {
    //place letter value into object
    this.letter = letter;
    //switch for correct and incorrect guesses
    this.correctLetter = false;
    //piece together letters in a word
    this.wordDisplay = function() {
        //if guessed correctly, reveal letter
        if (this.correctLetter === true) {
            //console.log(this.letter);
            return this.letter;
        //if incorrect, display an underscore instead
        } else {
            //console.log("_");
            return "_";
        }
    }
}

for (var i = 0; i < randomWord.length; i++) {
    newLetter = new Letter(randomWord[i]);
    newWord += newLetter.wordDisplay() + " ";
}
console.log(newWord);
var inquirer = require("inquirer");

//array of words
var words = ["wordone", "wordtwo", "wordthree"];
//getting a random index
var index = Math.floor(Math.random() * words.length);
//declaring a new word
var randomWord = words[index];
//start with an empty string
//will print out undefined if left an empty variable
var newWord = "";
//total guesses
var guess = 10;
//letter found default to false
var found;

//function called every time the letters from the chosen word are looped through
function Letter(letter) {
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

//prompt users to make a guess
function wordGuess() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter",
            name: "letter",
            validate: function(value) {
                //if value is a number and value length is more than two
                //does not work for values that aren't numbers and letters
                if (!isNaN(value) || value.length > 2) {
                    return false;
                } else {
                    return true;
                }
            }    
        }
    ]).then(function(response) {
        found = false;
        for (var i = 0; i < randomWord.length; i++) {
            var newLetter = new Letter(randomWord[i]);
            if (response.letter === randomWord[i]) {
                newLetter.correct = true;
                found = true;
            } else {
                newLetter.correct = false;
            }
            newWord += newLetter.wordDisplay() + " ";
        }
        console.log(newWord);
        if (found === false) {
            guess--;
        }
        console.log(`Guesses Left: ${guess}`);
        //wordGuess();
    })
}
wordGuess();

//notes
//display guesses left
//loop is currently creating a new word each time, so need to prevent that
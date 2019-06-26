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

//function called every time the letters from the chosen word are looped through
function Letter(letter) {
    //place letter value into object
    this.letter = letter;
    //correct letter guessed is default to false
    this.correctLetter = false;
    //piece together letters in a word
    this.wordDisplay = function() {
        //if guessed correctly, reveal letter
        if (this.correctLetter === true) {
            return this.letter;
        //if incorrect, display an underscore instead
        } else {
            return "_";
        }
    }
    //switch for correct and incorrect guesses
    this.correct = function(guess) {
        if (guess) {
            this.correctLetter = true;
        } else {
            this.correctLetter = false;
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
                //if value is a number and value length is more than one
                //does not work for values that aren't numbers and letters
                if (!isNaN(value) || value.length > 2) {
                    //console.log(!isNaN(value));
                    return false;
                } else {
                    return true;
                }
            }    
        }
    ]).then(function(response) {
        for (var i = 0; i < randomWord.length; i++) {
            newLetter = new Letter(randomWord[i]);
            if (response.letter === randomWord[i]) {
                newLetter.correct(true);
            } else {
                newLetter.correct(false);
            }
            newWord += newLetter.wordDisplay() + " ";
        }
        //if letter guessed is the same as a letter in the word
        //reveal the underscore with the letter
        //console log correct
        //else if not correct
        //display the non-updated word
        //console.log incorrect
        console.log(newWord);
        wordGuess();
    })
}
wordGuess();

//notes
//display guesses left
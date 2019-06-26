var Letter = require("./Letter.js");
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
//letter found default variable
var found;

//prompt users to make a guess
function wordGuess() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter",
            name: "letter",
            validate: function(value) {
                //if value is a number, value length is more than two, or there is no value
                //does not work for values that aren't numbers and letters
                //use regex to check for letters instead?
                if (!isNaN(value) || value.length > 2 || value === "") {
                    return false;
                } else {
                    return true;
                }
            }    
        }
    ]).then(function(response) {
        //found reset to false
        found = false;
        //loop through the word to check if letter is correct
        for (var i = 0; i < randomWord.length; i++) {
            //creates new letter function
            var newLetter = new Letter(randomWord[i]);
            //if letter is correct
            if (response.letter === randomWord[i]) {
                //add correct property as true into object
                //returns letter
                newLetter.correct = true;
                //toggle found to true so it doesn't subtract the guesses
                found = true;
            } else {
                //add correct property as false into object
                //returns underscore
                newLetter.correct = false;
            }
            //piece together the word with a space in between
            newWord += newLetter.wordDisplay() + " ";
        }
        //display the new word on the console
        console.log(newWord);
        //if letter is not found, subtract guesses by one
        if (found === false) {
            guess--;
        }
        //display the remaining guesses
        console.log(`Guesses Left: ${guess}`);
        //wordGuess();
    })
}
wordGuess();

//notes
//loop is currently creating a new word each time, so need to prevent that
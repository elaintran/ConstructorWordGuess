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
    //switch for correct and incorrect guesses
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
    this.guess = function(guess) {
        if (guess) {
            this.correctLetter = true;
        } else {
            this.correctLetter = false;
        }
    }
}

//prompt users to make a guess
inquirer.prompt([
    {
        type: "input",
        message: "Guess a letter",
        name: "letter"    
    }
]).then(function(response) {
    for (var i = 0; i < randomWord.length; i++) {
        if (response.letter === randomWord[i]) {
            newLetter = new Letter(randomWord[i]);
            newLetter.guess(true);
        }
        newWord += newLetter.wordDisplay() + " ";
        newLetter.guess(false);
    }
    //if letter guessed is the same as a letter in the word
    //reveal the underscore with the letter
    //console log correct
    //else if not correct
    //display the non-updated word
    //console.log incorrect
    console.log(newWord);
})

//notes
//display guesses left
var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "text",
        message: "Guess a letter",
        name: "letter"    
    }
]).then(function(response) {
    //if letter guessed is the same as a letter in the word
    //reveal the underscore with the letter
    //console log correct
    //else if not correct
    //display the non-updated word
    //console.log incorrect
    console.log(response.letter);
})
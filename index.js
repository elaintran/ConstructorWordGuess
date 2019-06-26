var word = require("./word.js");
var inquirer = require("inquirer");

// var inquirer = require("inquirer");

// function rand() {
//     for (var i = 0; i < randomWord.length; i++) {
//         hiddenWord += "_";
//     }
// }
// rand();
// //console.log(hiddenWord[0] = "a");

// // console.log(randomWord.split(""));

// inquirer.prompt([
//     {
//         type: "input",
//         message: "Guess a letter",
//         name: "letter"    
//     }
// ]).then(function(response) {
//     console.log(hiddenWord)
//     for (var i = 0; i < randomWord.length; i++) {
//         if (response.letter === randomWord[i]) {
//             //console.log(hiddenWord[i] = randomWord[i]);
//             //hiddenWord[i] = "a";
//             //console.log(response.letter);
//             //console.log(randomWord[i]);
//             hiddenWord.charAt([i]).replace("_", randomWord[i]);
//         }
//     }
//     //if letter guessed is the same as a letter in the word
//     //reveal the underscore with the letter
//     //console log correct
//     //else if not correct
//     //display the non-updated word
//     //console.log incorrect
// })
/*eslint-env browser*/

var userChoice = window.prompt("what is your choice 'rock, paper, scissors'?");
var computerChoice = Math.random() * 10;
var lowerBound = 10 / 3, upperBound = 10 / 3 * 2;
if (computerChoice < lowerBound) {
    computerChoice = "rock";
} else if (computerChoice > upperBound) {
    computerChoice = "scissors";
} else {
    computerChoice = "paper";
}

function whoWin(userChoice, computerChoice) {
    'use strict';
   
    if (userChoice === computerChoice) {
        window.alert("You are in a tie!");
    } else {
        if (userChoice === "rock") {
            switch (computerChoice) {
            case "paper":
                window.alert("Paper covers rock! You lose!");
                break;
            case "scissors":
                window.alert("Rock destroys scissors! You win!");
                break;
            }
            
        } else if (userChoice === "paper") {
            switch (computerChoice) {
            case "rock":
                window.alert("Paper covers rock! You win!");
                break;
            case "scissors":
                window.alert("Scissors cut paper! You lose!");
                break;
            }
        } else if (userChoice === "scissors") {
            switch (computerChoice) {
            case "rock":
                window.alert("Paper covers rock! You win!");
                break;
            case "scissors":
                window.alert("Scissors cut paper! You lose!");
                break;
            }

        } else {
            window.alert("Your choice is not one of 'rock, paper, scissors'. Click the Refresh button to start again!");

        }
        
    }
    
}

whoWin(userChoice, computerChoice);
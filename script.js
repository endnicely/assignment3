/*eslint-env browser*/

/*
//Practice with Functions 
var num = window.prompt("please provide a whole number");

function halfNumber(num) {
    "use strict";
    var halfnumber = num / 2;
    window.console.log("Half of " + num + " is " + halfnumber);
}
halfNumber(num);
function squareNumber(num) {
    "use strict";
    var squarenumber = Math.pow(num, 2);
    window.console.log("The result of squaring the number " + num + " is " + squarenumber);
}
squareNumber(num);


var num1 = window.prompt("please provide the first number to test percentOf(), findModulus()");
var num2 = window.prompt("please provide the second number to test percentOf(), findModulus()");

function percentOf(num1, num2) {
    "use strict";
    var percent = num1 / num2 * 100 + "%";
    window.console.log(num1 + " is " + percent + " of " + num2);
}

percentOf(num1, num2);

function findModulus(num1, num2) {
    "use strict";
    var modulus = num2 % num1;
    window.console.log(modulus + " is the modulus of " + num1 + " and " + num2);
    
}
findModulus(num1, num2);

var num_collection = window.prompt("Please provide a collection of numbers delimited by comma");
sum(num_colllection){
    
}*/

// The Rock, Paper, Scissors Game
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

function whoWin(userChoice, computerChoice){
   
    if(userChoice === computerChoice) {
        window.alert("You are in a tie!");  
    }
    else{
        if (userChoice = "rock"){
            switch (computerChoice){
                case "paper":
                    window.alert("Paper covers rock! You lose!");
                    break;
                case "scissors":
                    window.alert("Rock destroys scissors! You win!");
                    break;
            }
            
            } else if (userChoice = "paper") {
                 switch (computerChoice){
                    case "rock":
                        window.alert("Paper covers rock! You win!");
                        break;
                    case "scissors":
                        window.alert("Scissors cut paper! You lose!");
                        break;
                 }

            }else if {userChoice = "scissors") {
                switch (computerChoice){
                    case "rock":
                        window.alert("Rock destroys scissors! You lose!");
                        break;
                    case "paper":
                        window.alert("Scissors cut paper! You win!");
                        break;
                 }

            }
            
        }
    }
    
}



//The Basic Calculator
//function calculate(num1, num2, operation) {
//    "use strict";
//    var result;
//
//    switch (operation) {
//    case "add":
//        result = num1 + num2;
//        break;
//    case "subtract":
//        result = num1 - num2;
//        break;
//    case "multiply":
//        result = num1 * num2;
//        break;
//    case "divide":
//        result = num1 / num2;
//        break;
//    }
//    result = num1 + " " + operation + " " + num2 + " is " + result;
//    window.alert(result);
//}
//
//function BasicCalculator() {
//    "use strict";
//    var num1, num2, operation, invalid = false;
//    do {
//        if (invalid) {
//            window.alert("Invalid Operation! Please provide a valid operation (add, subtract, multiply or divide.");
//        }
//        
//        num1 = parseFloat(window.prompt("Please provide your first number for basic calculator."));
//        num2 = parseFloat(window.prompt("Please provide your second number for basic calculator."));
//        operation = window.prompt("What operation (add, subtract, multiply or divide) you want basic calculator to perform?");
//        if (operation !== "add" && operation !== "subtract" && operation !== "multiply" && operation !== "divide") {
//            invalid = true;
//        } else {
//            invalid = false;
//        }
//        
//    } while (invalid);
//    
//    calculate(num1, num2, operation);
//}
//
//
//BasicCalculator();


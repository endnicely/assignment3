/*eslint-env browser*/


//Practice with Functions 
//1
var num = window.prompt("please provide a whole number");

function halfNumber(num) {
    "use strict";
    var halfnumber = num / 2;
    window.console.log("Half of " + num + " is " + halfnumber);
}
halfNumber(num);

//2
function squareNumber(num) {
    "use strict";
    var squarenumber = Math.pow(num, 2);
    window.console.log("The result of squaring the number " + num + " is " + squarenumber);
}
squareNumber(num);

//3
var num1 = window.prompt("please provide the first number to test percentOf()");
var num2 = window.prompt("please provide the second number to test percentOf()");

function percentOf(num1, num2) {
    "use strict";
    var percent = num1 / num2 * 100 + "%";
    window.console.log(num1 + " is " + percent + " of " + num2);
}

//4
var num_1 = window.prompt("please provide the first number to test findModulus()");
var num_2 = window.prompt("please provide the second number to test findModulus()");
percentOf(num1, num2);

function findModulus(num1, num2) {
    "use strict";
    var modulus = num2 % num1;
    window.console.log(modulus + " is the modulus of " + num1 + " and " + num2);
    
}
findModulus(num_1, num_2);
    
//5    
function arbitraryNumParamFunction() {
    'use strict';
    var i, sum = 0, temp = [];
    temp =  arguments[arguments.length - 1].split(',').map(parseFloat);
    for (i = 0; i < temp.length; i += 1) {
        sum += temp[i];
    }
       
    window.alert("The sum of your numbers is " + sum);
}
var arbitraryNumParam = window.prompt("please provide a collection of number delimited by comma, for example: 20, 30.5, 40");

arbitraryNumParamFunction(arbitraryNumParam);

//The Fortune Teller
function tellFortune(childenNum, partnerName, geolocation, jobTitle) {
    'use strict';
    window.document.write("You will be a " +  jobTitle + " in " + geolocation + ", and married to " + partnerName + " with " + childenNum + " kids.<br><br>");
    
}

tellFortune(3, "Bill Gates", "Seattle", "philanthropist");
tellFortune(0, "no one", "India", "monk");
tellFortune(2, "Zak", "San Diego", "web developer");


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


//The Basic Calculator
function calculate(num1, num2, operation) {
    "use strict";
    var result;

    switch (operation) {
    case "add":
        result = num1 + num2;
        break;
    case "subtract":
        result = num1 - num2;
        break;
    case "multiply":
        result = num1 * num2;
        break;
    case "divide":
        result = num1 / num2;
        break;
    }
    result = num1 + " " + operation + " " + num2 + " is " + result;
    window.alert(result);
}

function basicCalculator() {
    "use strict";
    var num1, num2, operation, invalid = false;
    do {
        if (invalid) {
            window.alert("Invalid Operation! Please provide a valid operation (add, subtract, multiply or divide.");
        }
        
        num1 = parseFloat(window.prompt("Please provide your first number for basic calculator."));
        num2 = parseFloat(window.prompt("Please provide your second number for basic calculator."));
        operation = window.prompt("What operation (add, subtract, multiply or divide) you want basic calculator to perform?");
        if (operation !== "add" && operation !== "subtract" && operation !== "multiply" && operation !== "divide") {
            invalid = true;
        } else {
            invalid = false;
        }
        
    } while (invalid);
    
    calculate(num1, num2, operation);
}

basicCalculator();


/*eslint-env browser*/

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


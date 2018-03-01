/*eslint-env browser*/

//STEP 1
var num = window.prompt("please provide a whole number");

function halfNumber(num) {
    "use strict";
    var halfnumber = num / 2;
    window.console.log("Half of " + num + " is " + halfnumber);
}
halfNumber(num);

//STEP 2
function squareNumber(num) {
    "use strict";
    var squarenumber = Math.pow(num, 2);
    window.console.log("The result of squaring the number " + num + " is " + squarenumber);
}
squareNumber(num);

//STEP 3
var num1 = window.prompt("please provide the first number to test percentOf()");
var num2 = window.prompt("please provide the second number to test percentOf()");

function percentOf(num1, num2) {
    "use strict";
    var percent = num1 / num2 * 100 + "%";
    window.console.log(num1 + " is " + percent + " of " + num2);
}

//STEP 4
var num_1 = window.prompt("please provide the first number to test findModulus()");
var num_2 = window.prompt("please provide the second number to test findModulus()");
percentOf(num1, num2);

function findModulus(num1, num2) {
    "use strict";
    var modulus = num2 % num1;
    window.console.log(modulus + " is the modulus of " + num1 + " and " + num2);
    
}
findModulus(num_1, num_2);
    
//STEP 5   
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

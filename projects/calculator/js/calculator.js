/* jshint esversion: 8 */
/* jshint browser: true */
'use strict';

var outputScreen;
var clearOnEntry;


/**
 * Display a digit on the `outputScreen`
 * 
 * @param {number} digit digit to add or display on the `outputScreen`
 */
function enterDigit(digit) {
    outputScreen.textContent += digit;
}


/**
 * Clear `outputScreen` and set value to 0
 */
function clear_screen() {
    outputScreen.innerHTML = "";
    outputScreen.textContent = "0";
}


/**
 * Evaluate the expression and display its result or *ERROR*
 */
function eval_expr() {
    // split up the string depending on what is present
    var resultElement = document.getElementById("result");
    var expression = resultElement.innerHTML;
    

    if (expression.includes("&nbsp;")) {
        var splitArray = expression.split("&nbsp;");
        expression = splitArray[1];
    }

    if (expression === "") {
        expression = "0";
      }

    if (resultElement.innerHTML === "undefined") {
        expression = "0";
    }


    // Try to evaluate the expression
    let result;
    try {

        // Print the expression to the console for testing purposes
        console.log(`Evaluating expression: ${expression}`);

        result = eval(expression);
    } catch (error) {
        result = "ERROR";
    }

    // Display the result
    document.getElementById("result").innerHTML = result;
}


/**
 * Display an operation on the `outputScreen`
 * 
 * @param {string} operation to add to the expression
 */
function enterOp(operation) {
    outputScreen.textContent += operation;
}


window.onload = function () {
    outputScreen = document.querySelector("#result");
    clearOnEntry = true;
};

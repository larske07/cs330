/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */
'use strict';


/**
 * Greet user by name
 * 
 * @param {string} name visitor's name
 * @param {string} selector element to use for display
 */
function greet(name, selector) {
    const queryStr = window.location.search;
    name = new URLSearchParams(queryStr);
    let greetElement = document.querySelector(selector);
    greetElement.innerText = `Hello, ${name.get('name')}`;
}


/**
 * Check if a number is prime
 * 
 * @param {number} number number to check
 * @return {boolean} result of the check
 */
function isPrime(number) {
    let myBool = true;
    if (number === 1) {
        return myBool;
    }
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                myBool = false;
                break;
            }
        }
        return myBool;
        }
    }


/**
 * Print whether a number is prime
 * 
 * @param {number} number number to check
 * @param {string} selector element to use for display
 */
function printNumberInfo(number, selector) {
    let msg = '';
    const queryStr = window.location.search;
    number = new URLSearchParams(queryStr);
    let numberInfoElement = document.querySelector(selector);
    if (isPrime(number.get('number'))) {
        msg = ' is prime!';
    }
    else {
        msg = ' is not prime.';
    }
    numberInfoElement.innerText = `${number.get('number')}` + msg;
}


/**
 * Generate an array of prime numbers
 * 
 * @param {number} number number of primes to generate
 * @return {number[]} an array of `number` prime numbers
 */
function getNPrimes(number) {
    let list = [];
    let lnc = 2;
    while (number > 0) {
        if (isPrime(lnc)) {
            list.push(lnc);
            lnc++;
            number--;
        }
        else {
            lnc++;
        }
    }
    console.log(list);
    return list;
}


/**
 * Print a table of prime numbers
 * 
 * @param {number} number number of primes to display
 * @param {string} selector element to use for display
 */
function printNPrimes(number, selector) {
    const queryStr = window.location.search;
    number = new URLSearchParams(queryStr);
    let printNPrimesElement = document.querySelector(selector);
    let primes = getNPrimes(number.get('number'));
    let text = '';
    primes.forEach(num => {
        const row = document.createElement('tr');
        //row.classList.add('table-dark');
        const cell = document.createElement('td');
        cell.textContent = num;
        row.appendChild(cell);
        printNPrimesElement.appendChild(row);
    });
}


/**
 * Display warning about missing URL query parameters
 * 
 * @param {Object} urlParams URL parameters
 * @param {string} selector element to use for display
 */
function displayWarnings(urlParams, selector) {}

window.onload = function () {
    // TODO: Initialize the following variables
    let urlParams = "";
    let name = "";
    let number = "";
    this.displayWarnings(urlParams, "#warnings");
    greet(name, "#greeting");
    printNumberInfo(number, "#numberInfo");
    printNPrimes(number, "table#nPrimes");
};

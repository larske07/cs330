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
    name = name.get('name') || 'student';
    let greetElement = document.querySelector(selector);
    greetElement.innerText = `Hello ${name}`;
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
    number = number.get('number') || '330';
    let numberInfoElement = document.querySelector(selector);
    if (isPrime(number)) {
        msg = ' is a prime number';
    }
    else {
        msg = ' is not a prime number';
    }
    numberInfoElement.innerText = `${number}` + msg;
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
    number = number.get('number') || '330';
    let printNPrimesElement = document.querySelector(selector);
    let tbody = printNPrimesElement.querySelector('tbody');
    let primes = getNPrimes(number);
    let text = '';
    primes.forEach(num => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = num;
        row.appendChild(cell);
        tbody.appendChild(row);
    });
}


/**
 * Display warning about missing URL query parameters
 * 
 * @param {Object} urlParams URL parameters
 * @param {string} selector element to use for display
 */
function displayWarnings(urlParams, selector) {
    let warningsElement = document.querySelector(selector);
    if (!urlParams) {
        warningsElement.innerText = 'Warning: Missing some URL query parameter.';
    }
}

window.onload = function () {
    let urlParams = "?name=student&number=330";
    let name = "student";
    let number = "330";
    console.log('loaded');
    this.displayWarnings(urlParams, "#warnings");
    greet(name, "#greeting");
    printNumberInfo(number, "#numberInfo");
    printNPrimes(number, "table#nPrimes");
};

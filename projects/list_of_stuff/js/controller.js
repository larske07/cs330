/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';

var myMachinesModel = new Machines();
var myMachinesView = new MachinesView(myMachinesModel);

/**
 * @param {Selector idx} selectElementId
 * @param {Options} options
 * 
 */


function populateSelect(selectElementId, options) {
    let selectElement = document.querySelector(selectElementId);
    for (let opt of options) {
        let optElem = document.createElement("option");
        optElem.setAttribute("value", opt);
        optElem.innerHTML = opt;
        selectElement.appendChild(optElem);
    }

}


/**
 * Add a pinball machine to the machines
 * @returns if the form is invalid
 */
function addMachine() {
    if (!document.querySelector("#pinball_details").checkValidity()) {
        return;
    }
    let pinballMachines = localStorage.getItem("myPinballMachines");
    pinballMachines = pinballMachines ? JSON.parse(pinballMachines) : [];
    let checked = false;
    let brand = document.querySelector("#sel_brand").selectedOptions[0].value;
    let year = document.querySelector("#num_year").value;
    let price = document.querySelector("#num_price").value;

    let newMachine = new Machine(checked, brand, year, price);
    pinballMachines.push(newMachine);
    localStorage.setItem("myPinballMachines", JSON.stringify(pinballMachines));
    myMachinesModel.add(newMachine);
}



function loadMachines() {
    let pinballMachines = localStorage.getItem('myPinballMachines');
    pinballMachines = pinballMachines ? JSON.parse(pinballMachines) : [];
    let xpath_machines_tbl = '//*[@id="tbl_machines"]/tbody'
    let machines_tbl = document.evaluate(xpath_machines_tbl, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    machines_tbl.innerHTML = '';
    for (let machine of pinballMachines) {
        myMachinesModel.add(machine);
    }
}

function clearAll() {
    localStorage.removeItem('myPinballMachines');
    myMachinesModel.clear();
    loadMachines();
}

window.onload = function (params) {
    populateSelect("#sel_brand", ['Williams', 'Gottlieb', 'Stern', 'Data East', 'Bally']);
}

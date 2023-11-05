"use strict";

var myFootlockerModel = new Footlocker();
var myFootlockerView = new FootlockerView(myFootlockerModel);

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
 * Add a pair of shoes to the footlocker
 * @returns if the form is invalid
 */
function addPair() {
    if (!document.querySelector("#shoe_details").checkValidity()) {
        return;
    }
    let shoeBox = localStorage.getItem("myShoeBox");
    shoeBox = shoeBox ? JSON.parse(shoeBox) : [];
    let brand = document.querySelector("#sel_brand").selectedOptions[0].value;
    let size = document.querySelector("#num_size").value;
    let price = document.querySelector("#num_price").value;

    let newPair = new Shoe(brand, size, price);
    shoeBox.push(newPair);
    localStorage.setItem("myShoeBox", JSON.stringify(shoeBox));
    myFootlockerModel.add(newPair);
}

function loadShoes() {
    let shoeBox = localStorage.getItem('myShoeBox');
    shoeBox = shoeBox ? JSON.parse(shoeBox) : [];
    let xpath_footlocker_tbl = '//*[@id="tbl_footlocker"]/tbody'
    let footlocker_tbl = document.evaluate(xpath_footlocker_tbl, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    footlocker_tbl.innerHTML = '';
    for (let shoePair of shoeBox) {
        myFootlockerModel.add(shoePair);
    }
}

function clearAll() {
    localStorage.removeItem('myShoeBox');
    myFootlockerModel.clear();
    loadShoes();
}

window.onload = function (params) {
    populateSelect("#sel_brand", ['Adidas', 'Nike', 'Reebok', 'Puma', 'Asics']);
}
// Formatted template code taken from previous project

'use strict';

class AppView {
    constructor(model) {
        model.subscribe(this.redrawView.bind(this));
    }

    redrawView(universities, msg) {
        let dataList = document.querySelector("#schoolOptions");
        dataList.innerHTML = '';
        let currentOption = document.getElementById("university_name");
        
        for (let university of universities) {

            // Create a new option
            let option = document.createElement("option");

            // Make an attribute of the link to of the domain
            option.setAttribute("link", university.domain);

            // Set id and name
            option.id = university.name;
            option.value = university.name;
            dataList.appendChild(option);
        }
    }
}
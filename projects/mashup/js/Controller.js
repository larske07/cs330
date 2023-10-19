'use strict';

var myModel = new Universities();
var myView = new AppView(myModel);

async function getInsult() {
    let text = await fetch("https://corporatebs-generator.sameerkumar.website").then(res => res.json());
    return text.phrase;
}

async function populateModel() {
    // Stored Universities
    let storedUniversities = localStorage.getItem("myUniversities");
    storedUniversities = storedUniversities ? JSON.parse(storedUniversities) : [];
    if (storedUniversities.length == 0) {
        await myModel.populate();
        storeUniversities();
        myModel.configureDropdownSearch();
    }
    else {
        loadUniversitiesIntoModel();
        myModel.configureDropdownSearch();
    }
    // Stored Universities in List
    let storedUniList = localStorage.getItem("uniList");
    storedUniList = storedUniList ? JSON.parse(storedUniList) : [];
    if (storedUniList.length != 0) {
        for (let uni of storedUniList) {
            // Get value from DOM and have the input be blank
            let input = document.getElementById("university_name");

            // Get table college list
            let tableBody = document.getElementById("table-college-list");

            // Create a new row
            let row = document.createElement("tr");

            // Create essential elements
            let td_name = document.createElement("td");
            let td_delete = document.createElement("td");
            let delete_icon = document.createElement("a");

            // Add delete functionality to icon
            delete_icon.onclick = () => {
                tableBody.removeChild(row);

                // Disable button if the list has met it's limit
                if (numberOfItemsInList() > 2) {
                    input.disabled = true;
                    document.getElementById("add-btn").disabled = true;
                } else {
                    input.disabled = false;
                    document.getElementById("add-btn").disabled = false;
                }
            }

            // Link to no where
            delete_icon.href = "#"

            // Add classes to td
            td_delete.className = "d-flex justify-content-end align-items-center";

            // Link elements
            td_delete.appendChild(delete_icon)
            row.appendChild(td_name);
            row.appendChild(td_delete);

            // Add name and delete button to row
            td_name.innerText = uni;
            delete_icon.innerHTML = '<i class="fa-solid fa-trash-can text-danger"></i>';

            // Add row to table
            tableBody.appendChild(row);

            // Disable button if the list has met it's limit
            if (numberOfItemsInList() > 2) {
                input.disabled = true;
                document.getElementById("add-btn").disabled = true;
            } else {
                input.disabled = false;
                document.getElementById("add-btn").disabled = false;
            }

            document.getElementById("university_name").value = "";
        }
    }
    // stored robots
    let storedRobots = localStorage.getItem("robotImages");
    storedRobots = storedRobots ? JSON.parse(storedRobots) : [];
    if (storedRobots.length != 0) {
        let tableResultsBody = document.getElementById("table-college-results");
        for (let hash of storedRobots) {
            // Create the new row and add to results
            let row = document.createElement("tr");
            tableResultsBody.appendChild(row)

            // Create a new image, with the source being our hashed robot
            let image = document.createElement("img");
            image.setAttribute("src", hash);
            image.setAttribute("alt", hash);

            // Add image to the row
            row.appendChild(image);
        }
    }
}

function storeRobots() {

    try {

        const robotImages = [];

        const resultRows = document.querySelectorAll("#table-college-results tr");

        resultRows.forEach(row => {

            const img = row.querySelector('img');
            const imgSrc = img.src;

            robotImages.push(imgSrc);

        })

        localStorage.setItem('robotImages', JSON.stringify(robotImages));

    } catch (error) {

        console.log(error);

    }

}

function storeUniversities() {
    try {

        const universitiesArray = myModel.universities;

        // Map universities to JSON
        const universitiesJSON = universitiesArray.map(University => {
            return University.toJSON();
        });

        // Save array of JSON to localStorage
        localStorage.setItem('myUniversities', JSON.stringify(universitiesJSON));

    } catch (error) {
        console.log(error);
    }

}

function numberOfItemsInList() {
    let tableBody = document.getElementById("table-college-list");

    let rows = tableBody.querySelectorAll('tr');

    return rows.length;

}

function addUniversityToList() {

    // Get table college list
    let tableBody = document.getElementById("table-college-list");

    // Get value from DOM and have the input be blank
    let input = document.getElementById("university_name");

    // If the input is null, break
    if (input.value === "") {
        return
    }

    // Create a new row
    let row = document.createElement("tr");

    // Create essential elements
    let td_name = document.createElement("td");
    let td_delete = document.createElement("td");
    let delete_icon = document.createElement("a");

    // Add delete functionality to icon
    delete_icon.onclick = () => {
        tableBody.removeChild(row);

        // Disable button if the list has met it's limit
        if (numberOfItemsInList() > 2) {
            input.disabled = true;
            document.getElementById("add-btn").disabled = true;
        } else {
            input.disabled = false;
            document.getElementById("add-btn").disabled = false;
        }
    }

    // Link to no where
    delete_icon.href = "#"

    // Add classes to td
    td_delete.className = "d-flex justify-content-end align-items-center";

    // Link elements
    td_delete.appendChild(delete_icon)
    row.appendChild(td_name);
    row.appendChild(td_delete);

    // Add name and delete button to row
    td_name.innerText = input.value;
    td_name.setAttribute("link", document.getElementById(input.value).getAttribute("link"));
    delete_icon.innerHTML = '<i class="fa-solid fa-trash-can text-danger"></i>';

    // Add row to table
    tableBody.appendChild(row);

    // Disable button if the list has met it's limit
    if (numberOfItemsInList() > 2) {
        input.disabled = true;
        document.getElementById("add-btn").disabled = true;
    } else {
        input.disabled = false;
        document.getElementById("add-btn").disabled = false;
    }

    document.getElementById("university_name").value = "";

}

function loadUniversitiesIntoModel() {
    try {
        const storedData = localStorage.getItem('myUniversities');
        const universitiesJSON = JSON.parse(storedData);
        myModel.universities = [];
        const universities = universitiesJSON.map(u => University.fromJSON(u));
        myModel.universities = universities;
    } catch (error) {
        console.log(error);
    }

}

async function addRobotImage() {
    // Get table college list
    let tableResultsBody = document.getElementById("table-college-results");

    // Clear paragraph
    let annoyingThing = document.getElementById("theAnnoyingThing");
    annoyingThing.innerHTML = "";

    // Get the current items and the results
    let deleteRows = tableResultsBody.getElementsByTagName("tr")

    // Delete all the rows
    while (deleteRows.length > 0) {
        deleteRows[0].parentNode.removeChild(deleteRows[0]);
    }

    // Get table college list
    let tableListBody = document.querySelectorAll("#table-college-list tr");

    // Define to populate with the selected colleges
    let selectedColleges = []

    // Go over each row and add to the list
    tableListBody.forEach(row => {
        let text = row.textContent.replace(/ /g, "_");
        selectedColleges.push(text)
    })

    // For each selected college, add a row with the robot
    for (let college of selectedColleges) {

        // Create the new row and add to results
        let row = document.createElement("tr");
        tableResultsBody.appendChild(row)

        // Create a new image, with the source being our hashed robot
        let image = document.createElement("img")
        let imageDiv = document.createElement("div")
        let overlay = document.createElement("div")
        let p = document.createElement("p")

        // Attribute
        imageDiv.className = "image";
        image.setAttribute("src", `https://robohash.org/${college}`);
        image.setAttribute("alt", `${college}`);
        overlay.className = "overlay";
        p.innerHTML = `<i>${college.replace("_", " ")} Believes In</i>: ${await getInsult()}`;

        // Link
        overlay.appendChild(p);
        imageDiv.appendChild(image);
        imageDiv.appendChild(overlay);

        // Add image to the row
        row.appendChild(imageDiv);
    }

    localStorage.setItem('uniList', JSON.stringify(selectedColleges));

    storeRobots();
}


function clearAll() {
    localStorage.removeItem('myUniversities');
    myModel.clear();
}

window.onload = function (params) {
    populateModel();
}

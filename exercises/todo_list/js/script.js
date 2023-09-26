/* jshint esversion: 8 */
/* jshint browser: true */
"use strict;";

var team = ["Aardvark", "Beaver", "Cheetah", "Dolphin", "Elephant", "Flamingo", "Giraffe", "Hippo"];
var priority = ["Low", "Normal", "Important", "Critical"];

/**
 * Add a new task to the list
 * 
 * Validate form, collect input values, and add call `addRow` to add a new row to the table
 */
function addTask() {

    try {

        let title = document.getElementById("title").value;
        let assignedTo = document.getElementById("assignedTo").value
        let priority = document.getElementById("priority").value;
        let dueDate = document.getElementById("dueDate").value

        let vals = [title, assignedTo, priority, dueDate];

        addRow(vals, document.getElementById("tableBody"));
        
    } catch (error) {

        console.log(error);
        
    }  
}

/**
 * Add a new row to the table
 * 
 * @param {string[]} valueList list of task attributes
 * @param {Object} parent DOM node to append to
 */
function addRow(valueList, parent) {

    try {

        let row = document.createElement("tr"); 
        let cb = document.createElement("input");
        console.log(valueList)
        let my_alert = document.getElementById('feedbackMessage')

        let no_values = false

        for(let i=0; i<valueList.length; i++) {

            if (valueList[i] === '') {

                no_values = true

            }

        }

        if (no_values) {

            my_alert.innerText = 'Fill out title and due date'

        }
        else{

            my_alert.innerText = ''

            for(let i=0; i<valueList.length; i++) {

                let td = document.createElement("td");
                let text = document.createTextNode(valueList[i]);
                td.appendChild(text);
                row.appendChild(td)

            }

            if (valueList[2] === 'Low') {
                row.style.backgroundColor = 'blue';
            } else if (valueList[2] === 'Normal') {
                row.style.backgroundColor = 'green';
            } else if (valueList[2] === 'Important') {
                row.style.backgroundColor = 'yellow';
            } else if (valueList[2] === 'Critical') {
                row.style.backgroundColor = 'red';
            }

            let deleteCell = row.insertCell(0);
            cb.type = 'checkbox';
            
            cb.addEventListener('change', function() {
                if (this.checked) {
                    removeRow(row);
                }
            });

            cb.addEventListener('dblclick', function() {
                selectAll();
            });
            
            deleteCell.appendChild(cb);

            parent.appendChild(row);

        }
        
    } catch (error) {

        console.log(error);

    }
}

/**
 * Remove a table row corresponding to the selected checkbox
 * 
 * https://stackoverflow.com/questions/26512386/remove-current-row-tr-when-checkbox-is-checked
 */
function removeRow() {

    try {

        let table = document.getElementById('taskList');
        let checkboxes = table.querySelectorAll('input[type="checkbox"]:checked');
    
        setTimeout(() => {

            for(let i=0; i<checkboxes.length; i++) {

                let row = checkboxes[i].parentNode.parentNode;
                table.deleteRow(row.rowIndex);

            }
        
        }, 2000);

    } catch (error) {

        console.log(error);
        
    }
}

/**
 * Remove all table rows
 * 
 */
function selectAll() {

    try {

        let checkboxes = document.querySelectorAll('input[type="checkbox"]');

        setTimeout(() => {
    
            for(let i=0; i<checkboxes.length; i++) {
            checkboxes[i].checked = true; 
            }

        }, 2000);
        
    } catch (error) {
        console.log(error);
    }
}

/**
 * Add options to the specified element
 * 
 * @param {string} selectId `select` element to populate
 * @param {string[]} sList array of options
 */
function populateSelect(selectId, sList) {

    try {

        let sel = document.getElementById(selectId);

        for (let i = 0; i < sList.length; i++) {

            let opt = document.createElement("option");
            opt.text = sList[i];
            opt.value = sList[i];
            sel.appendChild(opt);

        }
    } catch (error) {

        console.log(error);

    }
}

window.onload = () => {

    try {

        populateSelect("assignedTo", team);
        populateSelect("priority", priority);

        $("#dueDate").datepicker({
            dateFormat: "mm/dd/y",
            changeMonth: true,
            changeYear: true,
            showButtonPanel: true,
            onClose: function(dateText, inst) {
                var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
                var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                $(this).datepicker("setDate", new Date(year, month, 1));
            }
        });

    } catch (error) {

        console.log(error);

    } 
};

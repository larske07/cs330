/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';

class MachinesView {
    constructor(model) {
        model.subscribe(this.redrawView.bind(this));
    }

    redrawView(machines, msg) {
        console.log("Redrawing view");
        let tblBody = document.querySelector("#tbl_machines > tbody");
        tblBody.innerHTML = '';

        for (let machine of machines) {
            let row = document.createElement("tr");

            let tdBrand = document.createElement("td");
            tdBrand.innerText = machine.brand;
            row.appendChild(tdBrand);

            let tdYear = document.createElement("td");
            tdYear.innerText = machine.year;
            row.appendChild(tdYear);

            let tdPrice = document.createElement("td");
            tdPrice.innerText = `$ ${Number.parseFloat(machine.price).toFixed(2)}`;
            row.appendChild(tdPrice);

            tblBody.appendChild(row);
        }

        for (var i = 0, row; row = tblBody.rows[i]; i++) {
            var cell = row.insertCell(0);
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            cell.appendChild(checkbox);

            checkbox.addEventListener('change', function(event) {
                if (event.target.checked) {
                    event.target.closest('tr').remove();
                }
                console.log('Row removed:', event.target.checked);
                
            });
        }
    }
}

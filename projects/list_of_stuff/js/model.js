/* jshint esversion: 8 */
/* jshint browser: true */
/* jshint node: true */
'use strict';

class Machine {
    constructor(checked, brand, year, price) {
        this.checked = checked;
        this.brand = brand;
        this.year = year;
        this.price = price;
    }
}

class Subject {
    constructor() {
        this.handlers = [];
    }
    subscribe(func) {
        this.handlers.push(func);
    }
    unsubscribe(func) {
        this.handlers = this.handlers.filter(item => item !== func);
    }
    publish(msg, obj) {
        let scope = obj || window;
        for (let f of this.handlers) {
            f(scope, msg);
        }
    }
}

class Machines extends Subject {
    constructor() {
        super();
        this.machines = [];
    }

    add(machine) {
        this.machines.push(machine);
        this.publish("New machine has been added", this);
    }

    clear() {
        this.machines = [];
        this.publish("All machines are gone", this);
    }

    toggleChecked(machine) {
        machine.checked = !machine.checked;
        this.publish("Checked state has been updated", this);
    }

    [Symbol.iterator]() {
        let idx = -1;
        return {
            next: () => ({value: this.machines[++idx], done: !(idx in this.machines)})
        }
    }
}

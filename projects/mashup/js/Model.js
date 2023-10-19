// Formatted template code taken from previous project

'use strict';

async function getUniData() {
    return fetch("http://universities.hipolabs.com/search?country=united states")
        .then(response => response.json())
        .catch(error => console.log(error));
}

function getWebData(link) {
    return `https://robohash.org/${link}`
}

class University {
    constructor(name, domain) {
        this.name = name;
        this.domain = domain;
    }

    toJSON() {
        return {
          name: this.name,
          domain: this.domain  
        };
      }
    static fromJSON(data) {
        return new University(data.name, data.domain);
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

class Universities extends Subject {
    constructor() {
        super();
        this.universities = [];
    }

    configureDropdownSearch() {
        this.publish("test", this);
    }

    addUni(University) {
        if (University) {
            this.universities.push(University);
        }
    }


    async populate() {
        let data = await getUniData();
        for (let element of data) {
            this.addUni(new University(element.name, element.web_pages[0]));
        } 
        this.publish("All universities populated in model", this);
    }

    getRoboImg(link) {
        console.log("test");
        let data = getWebData(link);
    }

    clear() {
        this.universities = [];
        this.publish("All universities removed from model", this);
    }

    [Symbol.iterator]() {
        let idx = -1;
        return {
            next: () => ({value: this.universities[++idx], done: !(idx in this.universities)})
        }
    }
}

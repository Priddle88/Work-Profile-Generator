class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        let testName = /\d/.test(this.name);
        let numId = parseInt(this.id);

        console.log(typeof this.id);
        console.log(testName);
        console.log(parseInt(this.id));

        if (testName || this.name.trim() == "") {
            throw new Error("Try again with your FIRST NAME");
        }
        if (numId <= 0 || isNaN(numId)) {
            throw new Error("Must be a number above 0");
        }
        if (this.email.trim() == "") {
            throw new Error("Try again with a valid email");
        }

        console.log(this.id);

    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;
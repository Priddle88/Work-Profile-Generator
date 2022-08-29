//The base class that the other classes will pull from
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        // Makes sure that the name doesn't have a number in it
        let testName = /\d/.test(this.name);
        let numId = parseInt(this.id);

        // Tests for the variables
        if (testName || this.name.trim() == "") {
            throw new Error("Try again with your FIRST NAME");
        }
        if (numId <= 0 || isNaN(numId)) {
            throw new Error("Must be a number above 0");
        }
        if (this.email.trim() == "") {
            throw new Error("Try again with a valid email");
        }
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

// Export the Employee class
module.exports = Employee;
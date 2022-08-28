const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email);
        this.officeNumber = officeNumber;

        this.officeNumber = parseInt(this.officeNumber);

        if (parseInt(this.officeNumber) <= 0 || isNaN(parseInt(this.officeNumber))) {
            throw new Error("Must be a number above 0");
        }
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
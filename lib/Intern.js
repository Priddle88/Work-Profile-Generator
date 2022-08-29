// Gets the Employee class
const Employee = require("./Employee");

// Creates the Intern class with the new school property
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;

        let testSchool = /\d/.test(this.school);

        if (testSchool || this.school.trim() == "") {
            throw new Error("Try again with another Github account");
        }
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

// Export the Intern class
module.exports = Intern;
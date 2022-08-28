const Employee = require("./Employee");

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

module.exports = Intern;
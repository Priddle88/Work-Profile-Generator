const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // if (typeof school !== "string" || school.trim() == "") {
        //     throw new Error("Try again with a valid email");
        // }

        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
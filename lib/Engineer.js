const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // if (typeof github !== "string" || github.trim() == "") {
        //     throw new Error("Try again with a valid email");
        // }

        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
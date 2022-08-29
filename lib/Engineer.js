// Gets the Employee class
const Employee = require("./Employee");

// Creates the Engineer class with the new github property
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;

        if (this.github.trim() == "") {
            throw new Error("Try again with another Github account");
        }
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

// Export the Engineer class
module.exports = Engineer;
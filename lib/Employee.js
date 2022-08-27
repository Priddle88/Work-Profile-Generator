
class Employee {
    constructor(name, id, email) {
        // if (typeof name !== "string" || name.trim() == "") {
        //     throw new Error("Try again with you FIRST NAME");
        // }
        // if (typeof id !== "number" || id <= 0) {
        //     throw new Error("Must be a number above 0");
        // }
        // if (typeof email !== "string") {
        //     throw new Error("Try again with a valid email");
        // }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`This is name: ${this.name}`);
        
        return ;
    }
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;
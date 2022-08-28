const Employee = require('../lib/Employee');

describe('employee', () => {
    it('only accepts a string for the name', () => {
        const testName = new Employee("Parker", "12", "Riddle");
        expect(testName.getName()).toBe("Parker");
    });

    it('only accepts a number for the id', () => {
        const testId = new Employee("Parker", "12", "Riddle");
        expect(testId.getId()).toBe("12");
    });

    it('only accepts a string for the email', () => {
        const testEmail = new Employee("Parker", "12", "Riddle");
        expect(testEmail.getEmail()).toBe("Riddle");
    });
});
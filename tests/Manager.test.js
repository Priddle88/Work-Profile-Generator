const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('only accepts a number for the office number', () => {
        const testOfficeNumber = new Manager("Parker", "12", "Riddle", "11");
        expect(testOfficeNumber.getOfficeNumber()).toBe(11);
    });
});
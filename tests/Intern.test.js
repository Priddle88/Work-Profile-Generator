const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('only accepts a string for the school name', () => {
        const testSchool = new Intern("Parker", "12", "Riddle", "U of Denver");
        expect(testSchool.getSchool()).toBe("U of Denver");
    });
});
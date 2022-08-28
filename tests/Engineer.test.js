const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('only accepts a string for the email', () => {
        const testGithub = new Engineer("Parker", "12", "Riddle", "Priddle88");
        expect(testGithub.getGithub()).toBe("Priddle88");
    });
});
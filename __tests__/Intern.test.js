const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test(`creates an intern object`, () => {
    const intern = new Intern('Mark', 1, 'fake@fakemail.com', 'bestSchool');

    expect(intern.name).toBe('Mark');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('fake@fakemail.com');
    expect(intern.school).toBe('bestSchool');
    expect(intern.role).toBe('Intern');
});

test(`returns intern's school`, () => {
    const intern = new Intern('Mark', 1, 'fake@fakemail.com', 'bestSchool');

    expect(intern.getSchool()).toBe('bestSchool');
});

test(`returns intern's role`, () => {
    const intern = new Intern('Mark', 1, 'fake@fakemail.com', 'bestSchool');

    expect(intern.getRole()).toBe('Intern');
})
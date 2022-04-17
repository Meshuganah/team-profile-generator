
const { expect, test } = require('@jest/globals');
const exp = require('constants');
const { text } = require('stream/consumers');
const Engineer = require('../lib/Engineer');

test(`creates an enginner object`, () => {
    const engineer = new Engineer('Mark', 1, 'fake@fakemail.com', 'octocat');

    expect(engineer.name).toBe('Mark');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('fake@fakemail.com');
    expect(engineer.github).toBe('octocat');
    expect(engineer.role).toBe('Engineer');
});

test(`returns engineer's github username`, () => {
    const engineer = new Engineer('Mark', 1, 'fake@fakemail.com', 'octocat');

    expect(engineer.getGithub()).toBe('octocat');
})

test(`returns engineers role`, () => {
    const engineer = new Engineer('Mark', 1, 'fake@fakemail.com', 'octocat');

    expect(engineer.getRole()).toBe('Engineer');
})

const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');

test(`creates an manager object`, () => {
    const manager = new Manager('Mark', 1, 'fake@fakemail.com', 1);

    expect(manager.name).toBe('Mark');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('fake@fakemail.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toBe('Manager');
});

test(`returns manager's role`, () => {
    const manager = new Manager('Mark', 1, 'fake@fakemail.com', 1);

    expect(manager.getRole()).toBe('Manager');
})
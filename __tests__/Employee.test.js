
const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test(`creates an employee object`, () => {
    const employee = new Employee('Mark', 1, 'fake@fakemail.com');

    expect(employee.name).toBe('Mark');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('fake@fakemail.com');
    expect(employee.role).toBe('Employee');
});
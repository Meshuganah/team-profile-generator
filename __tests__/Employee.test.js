
const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');

test(`creates an employee object`, () => {
    const employee = new Employee('Mark', 1, 'fake@fakemail.com');

    expect(employee.name).toBe('Mark');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('fake@fakemail.com');
    expect(employee.role).toBe('Employee');
});

test(`gets employee's name value`, () => {
    const employee = new Employee('Mark', 1, 'fake@fakemail.com');

    expect(employee.getName()).toBe('Mark');
});

test(`gets employee's id number` , () => {
    const employee = new Employee('Mark', 1, 'fake@fakemail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test(`gets employee's email`, () => {
    const employee = new Employee('Mark', 1, 'fake@fakemail.com');

    expect(employee.getEmail()).toBe('fake@fakemail.com');
});

test(`gets employee's role`, () => {
    const employee = new Employee('Mark', 1, 'fake@fakemail.com');

    expect(employee.getRole()).toBe('Employee');
})

const sum = require('./sum')

test('testing the sum function', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 3)).toBe(5);
});
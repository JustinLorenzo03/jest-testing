
const multiply = require('./multiply')

test('testing the multiply function', () => {
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(5, 3)).toBe(15);
});
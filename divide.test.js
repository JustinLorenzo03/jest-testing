
const divide = require('./divide')

test('testing the divide function', () => {
    expect(divide(4, 2)).toBe(2);
    expect(divide(6, 2)).toBe(3);
});
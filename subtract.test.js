
const subtract = require('./subtract')

test('testing the subtract function', () => {
    expect(subtract(2, 1)).toBe(1);
    expect(subtract(5, 3)).toBe(2);
});
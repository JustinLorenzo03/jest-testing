
const power = require('./power')

test('testing the power function', () => {
    expect(power(3, 2)).toBe(5);
    expect(power(5, 3)).toBe(8);
});
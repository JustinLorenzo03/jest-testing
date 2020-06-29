
const lcm = require('./lcm')

test('testing the lcm function', () => {
    expect(lcm(1, 2)).toBe(2);
    expect(lcm(3, 4)).toBe(12);
});
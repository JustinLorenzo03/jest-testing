
const gdc = require('./gcd')

test('testing the gcd function', () => {
    expect(gcd(12, 13)).toBe(1);
    expect(gcd(9, 3)).toBe(3);
});
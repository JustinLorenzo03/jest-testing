
const fib = require('./fib')

test('testing the fib function', () => {
    expect(fib(3, 2)).toBe(5);
    expect(fib(4, 2)).toBe(6);
});
const math= require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(math.sum(1, 2)).toBe(3);
});

test('calculates the square root of a number', () => {
    expect(math.square(5)).toBe(25);
})
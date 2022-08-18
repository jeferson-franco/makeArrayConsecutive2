const solution = require('./makeArrayConsecutive2.js');

test('test 1', () => {
    expect(solution([6, 2, 3, 8])).toBe(3);
});

test('test 2', () => {
    expect(solution([0, 3])).toBe(2);
});

test('test 3', () => {
    expect(solution([5, 4, 6])).toBe(0);
});

test('test 4', () => {
    expect(solution([6, 3])).toBe(2);
});

test('test 5', () => {
    expect(solution([1])).toBe(0);
});

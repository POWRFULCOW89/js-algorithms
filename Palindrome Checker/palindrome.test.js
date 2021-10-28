const palindrome = require('./palindrome.js');

const expected = [
    ['eye', true],
    ['racecar', true],
    ['not a palindrome', false],
    ['A man, a plan, a canal. Panama', true],
    ['nope', false],
    ['almostomla', false],
    ['My age is 0, 0 si ega ym.', true],
    ['0_0 (: /-\ :) 0-0', true],
    ['five|\_/|four', false]
]

expected.forEach(res => {
    test(`${res[0]} should be ${res[1]}`, () => {
        expect(palindrome(res[0])).toBe(res[1]);
    });
});
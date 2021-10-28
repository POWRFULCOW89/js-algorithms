const rot13 = require('./caesar');

test('should decode to the string FREE CODE CAMP', () => {
    expect(rot13("SERR PBQR PNZC")).toBe('FREE CODE CAMP');
});

test('should decode to the string FREE PIZZA', () => {
     expect(rot13("SERR CVMMN!")).toBe('FREE PIZZA!');
});

test('should decode to the string FREE LOVE?', () => {
    expect(rot13("SERR YBIR?")).toBe('FREE LOVE?');
})

test('should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', () => {
    expect(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT')).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG');
});
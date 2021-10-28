const telephoneCheck = require('./phone-validator.js');

//Convert to tests
// describe('telephoneCheck', () => {
test('telephoneCheck("555-555-5555") should return a boolean.', () => {
expect(typeof telephoneCheck('555-555-5555')).toBe('boolean');
});
test('telephoneCheck("1 555-555-5555") should return true.', () => {
expect(telephoneCheck('1 555-555-5555')).toBe(true);
});
test('telephoneCheck("1 (555) 555-5555") should return true.', () => {
expect(telephoneCheck('1 (555) 555-5555')).toBe(true);
});
test('telephoneCheck("5555555555") should return true.', () => {
expect(telephoneCheck('5555555555')).toBe(true);
});
test('telephoneCheck("555-555-5555") should return true.', () => {
expect(telephoneCheck('555-555-5555')).toBe(true);
});
test('telephoneCheck("(555)555-5555") should return true.', () => {
expect(telephoneCheck('(555)555-5555')).toBe(true);
});
test('telephoneCheck("1(555)555-5555") should return true.', () => {
expect(telephoneCheck('1(555)555-5555')).toBe(true);
});
test('telephoneCheck("555-5555") should return false.', () => {
expect(telephoneCheck('555-5555')).toBe(false);
});
test('telephoneCheck("5555555") should return false.', () => {
expect(telephoneCheck('5555555')).toBe(false);
});
test('telephoneCheck("1 555)555-5555") should return false.', () => {
expect(telephoneCheck('1 555)555-5555')).toBe(false);
});


// convert to tests
test('telephoneCheck("1 555 555 5555") should return true.', () => {
expect(telephoneCheck('1 555 555 5555')).toBe(true);
});
test('telephoneCheck("1 456 789 4444") should return true.', () => {
expect(telephoneCheck('1 456 789 4444')).toBe(true);
});
test('telephoneCheck("123**&!!asdf#") should return false.', () => {
expect(telephoneCheck('123**&!!asdf#')).toBe(false);
});
test('telephoneCheck("55555555") should return false.', () => {
expect(telephoneCheck('55555555')).toBe(false);
});
test('telephoneCheck("(6505552368)") should return false.', () => {
expect(telephoneCheck('(6505552368)')).toBe(false);
});
test('telephoneCheck("2 (757) 622-7382") should return false.', () => {
expect(telephoneCheck('2 (757) 622-7382')).toBe(false);
});
test('telephoneCheck("0 (757) 622-7382") should return false.', () => {
expect(telephoneCheck('0 (757) 622-7382')).toBe(false);
});
test('telephoneCheck("-1 (757) 622-7382") should return false.', () => {
expect(telephoneCheck('-1 (757) 622-7382')).toBe(false);
});
test('telephoneCheck("2 757 622-7382") should return false.', () => {
expect(telephoneCheck('2 757 622-7382')).toBe(false);
});

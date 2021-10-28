const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const shifted = alphabet.substr(13) + alphabet.substr(0,13);

const rot13 = str =>  {
  str = str.split('').map((c) => {
    return alphabet.indexOf(c) != -1 ? shifted.charAt(alphabet.indexOf(c)) : c;
  }).join('');
  return str;
}

module.exports = rot13;
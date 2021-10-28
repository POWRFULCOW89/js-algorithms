const palindrome = str => {
    str = str.toLowerCase()
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.replace(/[* _\-#$%&\/\(\):,.\/\\]/g, "");
    let reversed = str.split("").reverse().join("");
    return str === reversed ? true : false;
}
  
module.exports = palindrome;
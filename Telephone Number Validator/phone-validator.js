function telephoneCheck(str) {
    if (str[0] == '-'){
      return false;
    }
    
    else if (/[?,.!]/.test(str)){ // Discard strings with non-telephonic symbols
      return false;  
    }
  
    // Discard strings with more than 4 numbers enclosed in parentheses
    else if (/([(])+([0-9]{4,})+([)])/.test(str)) {
      return false;
    }
  
    // Discard strings if there are open parentheses
    else if (str.split('(').length - 1 != str.split(')').length - 1){
      return false;
    }
    else {
      str = str.replace(/\D{1,}/g,'')
  
      switch(str.length){
        case 10:
          return true;
        case 11:
          return str[0] == '1' ? true : false;
        default:
          return false;
      }
    }  
}

module.exports = telephoneCheck;
function capitalize(s){
  let newString1 = []
  let newString2 = [];
  let finalArray = []
  for(var i = 0; i < s.length; i++){
    if (i % 2 != 0) {
      newString2[i] = s[i].toUpperCase();
    }else {
      newString2[i] = s[i].toLowerCase();
    }   

    if (i % 2 === 0) {
      newString1[i] = s[i].toUpperCase();
    }else {
      newString1[i] = s[i].toLowerCase();
    }   
  }    
  finalArray.push(newString1.join(''));
  finalArray.push(newString2.join(''));

}
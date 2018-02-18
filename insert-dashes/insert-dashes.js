function insertDash(num) {
  let numArray = [];
  var finalNum;
  var numString = (num).toString();

  for (var i = 0; i < numString.length; i++) {

    if (((numString[i - 1] % 2) === 1) && ((numString[i] % 2) === 1)) {
      finalNum = '-' + numString[i]
      numArray.push(finalNum);
    } else {
      finalNum = numString[i];
      numArray.push(finalNum);
    }

  }

  return numArray.join('');
}

insertDash(454793);
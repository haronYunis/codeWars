function insertDash(num) {
  var finalNum
  var numString = (' ' + num);

  for (var i = 0; i < numString.length; i++) {
    if (numString[i] % 2 == 1 && numString[i + 1] % 2 == 1) {
      finalNum = numString[i] + '-' + numString[i + 1];
    }
  }
  return finalNum
}

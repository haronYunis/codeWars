function high(x) {
  let returnWords;
  let highestWord = 0;

  x = x.split(' ');
  for (let i = x.length - 1; i >= 0; i--) {
    let count = 0;
    for (let eachLetter = 0; eachLetter < x[i].length; eachLetter++) {
      count += x[i].charCodeAt(eachLetter) - 96;
    }
    if (count >= highestWord) {
      highestWord = count;
      returnWords = x[i];
    }
  }
  return returnWords;
}
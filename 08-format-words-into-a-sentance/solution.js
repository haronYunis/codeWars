function formatWords(words) {

  if (words === null || words === []) return "";
  return words.map(function (a, i) {
    if (i == words.length - 2) return a + ' and';
    console.log(i);
    console.log(a);
    return a + '';
  }).join(' ').slice(0, -1);

}


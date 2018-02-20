
function isNice(arr) {
  let bool = [];

  for (var i = 0; i < arr.length; i++) {
    if ((arr.includes(arr[i] + 1)) || arr.includes((arr[i] - 1)) && arr.length !== 0) {
      bool.push('true');
    } else {
      bool.push('false');
    }
    console.log(bool);
  }
  for (var j = 0; j < bool.length; j++) {
    if (bool.includes('false')) {
      return false;
    } else { return true; }
  }
}
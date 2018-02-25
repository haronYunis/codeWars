
function isNice(arr){
  let bool = [];
  for (let i = 0; i < arr.length; i++) {
    bool.push('false');
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] - 1 || arr[i] === arr[j] + 1) bool[i] = 'true';
    }
  }
  for (let k = 0; k < bool.length; k++) if (bool[k] === 'false') return false;
  return bool.length !== 0 ? true : false;
}
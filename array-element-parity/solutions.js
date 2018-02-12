function solve(arr) {
  for (var i = 0; i < arr.length; i++)
    if (!arr.includes(-1 * arr[i])) return arr[i];
}
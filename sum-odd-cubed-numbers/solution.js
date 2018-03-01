function cubeOdd(arr) {
  return arr.length === 0
    || arr.filter(x => x % 2 === 1 || x % 2 === -1).length === 0 ? 0
    : arr.filter(x => typeof x !== 'number').length > 0 ? undefined
      : arr.map(x => x * x * x)
        .filter(x => x % 2 === 1 || x % 2 === -1)
        .reduce((a, c) => a + c);
}
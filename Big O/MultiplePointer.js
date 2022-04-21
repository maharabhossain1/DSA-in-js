function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return 0;
  let firstpoint = 0;
  let secPoint = 1;
  let pointValue = 1;
  while (secPoint < arr.length) {
    if (arr[firstpoint] === arr[secPoint]) {
      secPoint++;
    } else {
      firstpoint++;
      pointValue++;
      arr[firstpoint] = arr[secPoint];
    }
  }
  return pointValue;
}
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));

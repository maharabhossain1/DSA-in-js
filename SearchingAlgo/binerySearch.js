// Divided and conQure method
//  Array must be sorted
// we devided array into two parts then we conQure them   and we chack if the element is in the array  if it is we return the index otherwise we return -1

function binarySearch(array, target) {
  var left = 0;
  var right = array.length - 1;
  var middle = Math.floor((left + right) / 2);
  while (array[middle] !== target && left <= right) {
    if (array[middle] < target) left = middle + 1;
    else right = middle - 1;
    middle = Math.floor((left + right) / 2);
  }
  return array[middle] === target ? middle : -1;
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20));

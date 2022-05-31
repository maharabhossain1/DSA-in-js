// Divided and conQure method
//  Array must be sorted
// we devided array into two parts then we conQure them   and we chack if the element is in the array  if it is we return the index otherwise we return -1
// Time complexity : O(log n)

// Basic Binary Search
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
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));

var arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8];
function uniqSort(arr = []) {
  var map = {};
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = true;
      res.push(arr[i]);
    }
  }
  return res.sort((a, b) => a - b);
}
// console.log(uniqSort(arr));

// Search Insert Position Using Binary Search Algorithm One type of solution
var searchInsert1 = function (nums, target) {
  var start = 0;
  var end = nums.length - 1;
  var index = Math.floor((end - start) / 2) + start;

  if (target > nums[nums.length - 1]) {
    // The target is beyond the end of this array.
    index = nums.length;
  } else {
    // Start in middle, divide and conquer.
    while (start < end) {
      // Get value at current index.
      var value = nums[index];

      if (value === target) {
        // Found our target.
        result = index;
        break;
      } else if (target < value) {
        // Target is lower in array, move the index halfway down.
        end = index;
      } else {
        // Target is higher in array, move the index halfway up.
        start = index + 1;
      }

      // Get next mid-point.
      index = Math.floor((end - start) / 2) + start;
    }
  }

  return index;
};
console.log(searchInsert1([1, 3, 5, 6], 2));

// Search Insert Position Using Binary Search Algorithm Second type of solution
var searchInsert2 = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = Math.floor((left + right) / 2);

  if (target > nums[nums.length - 1]) {
    mid = mid.length;
  } else {
    while (left < right) {
      let value = nums[mid];
      if (value === target) {
        return mid;
      } else if (value > target) {
        right = mid;
      } else {
        left = mid + 1;
      }

      mid = Math.floor((left + right) / 2);
    }
  }
  return mid;
};

console.log(searchInsert2([1, 3, 5, 6], 2));

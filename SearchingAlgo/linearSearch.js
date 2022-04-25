// prob :01
function linearSearch(array, num) {
  // add whatever parameters you deem necessary - good luck!
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) return i;
  }
  return -1;
}
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 52));

// prob :01
// function linearSearch(array, num) {
//   // add whatever parameters you deem necessary - good luck!
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === num) return i;
//   }
//   return -1;
// }
// console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 52));

// pure function
const add3 = (a, b) => a + b;

// closure  store value in memory heap
const add = () => {
  return (b) => {
    return b;
  };
};

const add2 = (a) => (b) => a + b;

const store = add();
console.log("1st", store(50000));

const store2 = add2(2);
console.log(store2(3));

/// What does this code logs out

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 100);
// }

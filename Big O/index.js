// prob :01
//

// solution -01
const add = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};
console.log(add(6));

// solution -02
const add2 = (n) => {
  return (n * (n + 1)) / 2;
};
console.log(add2(6));

/// Time manage
// For number 01
let t1 = performance.now();
// add(1000000000);
add2(1000000000000000000); // This is the best solutions

let t2 = performance.now();
console.log(`Time is ${(t2 - t1) / 1000} sec`);
///////////////////////////////////////////////////////////////////////////
// ------------------------------ (((((((x))))))) -----------------------//
///////////////////////////////////////////////////////////////////////////
// Time Complexity
// Example -01
function countUpandDown(n) {
  console.log("going Up");
  // for this loop Big O in o(n)
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("Going Down ");
  //Again for this  one is also loop Big O in o(n)
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("all done ");
}
// In total
// In this Example Big O is only N  that means o(n)

//Example -02
// For nested Loop Big o in O(n^2)
function nestedLoop(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(j);
    }
  }
}
// In this Example Big O is  O(n^2)
///////////////////////////////////////////////////////////////////////////
// ------------------------------ (((((((x))))))) -----------------------//
///////////////////////////////////////////////////////////////////////////
// Space Complexity or Auxiliry Space Complexity
function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}
// Big o in O(1) space
//
function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
// Big o in O(1) space
//
function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}
// Big o in O(n) space
//
function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
// Big o in O(n) space

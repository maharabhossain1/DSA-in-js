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

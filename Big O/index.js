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
add(1000000000);
let t2 = performance.now();
console.log(`Time is ${(t2 - t1) / 1000} sec`);

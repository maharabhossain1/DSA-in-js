//
//
function union(...arr) {
  return arr.reduce((first, second) => [...new Set(first.concat(second))]);
}
const unionValue = union([1, 4, 6, 5, 3], [4, 3, 6, 9], [9, 7, 4, 6, 2]);
console.log("union", unionValue);

//
//

function common(...arr) {
  return arr.reduce((first, second) => {
    return first.filter((el) => second.includes(el));
  });
}
const commonValue = common([1, 4, 6, 5, 3], [4, 3, 6, 9], [9, 7, 4, 6, 2]);

console.log("Common", commonValue);

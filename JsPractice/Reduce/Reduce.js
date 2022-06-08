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

//
//
const products = [
  {
    productId: 234435,
    colorId: 1,
    size: "11-M",
  },
  {
    productId: 443434,
    colorId: 2,
    size: "11-M",
  },
  {
    productId: 343434,
    colorId: 1,
    size: "11-L",
  },
  {
    productId: 322333,
    colorId: 2,
    size: "12-M",
  },
];

function fieldByIndex(products, field) {
  return products.reduce((acc, curr) => {
    const key = curr[field];
    const value = acc[key] ? [...acc[key], curr] : [curr];
    acc[key] = value;
    return acc;
  }, {});
}

console.log(fieldByIndex(products, "size"));

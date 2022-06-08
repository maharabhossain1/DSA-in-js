/////////////////////////////////
// Making Union From Three Arrays
/////////////////////////////////
function union(...arr) {
  return arr.reduce((first, second) => [...new Set(first.concat(second))]);
}
const unionValue = union([1, 4, 6, 5, 3], [4, 3, 6, 9], [9, 7, 4, 6, 2]);
console.log("union", unionValue);

/////////////////////////////////
// Making Common From Three Arrays
//
function common(...arr) {
  return arr.reduce((first, second) => {
    return first.filter((el) => second.includes(el));
  });
}
const commonValue = common([1, 4, 6, 5, 3], [4, 3, 6, 9], [9, 7, 4, 6, 2]);

console.log("Common", commonValue);

/////////////////////////////////
// Here Products is an array of objects , We Are trying to make an object with key as product Size // and value as array of products with same Size
/////////////////////////////////
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

/////////////////////////////////
// Accessing a property on an object
/////////////////////////////////

const places = {
  tours: {
    nearMe: {
      mumbai: {
        date: "Sun Dec 25",
        loc: "The Taj",
        cost: "3000.00",
      },
    },
  },
};

// The Object is given and we need to find the value of 'loc' key . We can use the following method
const loc = places.tours.nearMe.mumbai.loc; // but this is not the best way to do it.
// We can use reduce method to find the needed value

const paths = ["tours", "nearMe", "mumbai", "loc"];

function getLocation(places, paths) {
  return paths.reduce((object, path) => {
    return (object || {})[path];
  }, places);
}
const getLocationValue = getLocation(places, paths); // The Taj
console.log("Location", getLocationValue);

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

/////////////////////////////////
// Finding the occurrence of a string in an array and make it object
/////////////////////////////////

// Example-1
const fruits = ["Banana", "Orange", "Apple", "Orange", "Pear", "Banana"];

const occurrence = fruits.reduce((acc, curr) => {
  acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
  return acc;
}, {});
console.log(occurrence);

// Example-2
const comments = [
  {
    id: 1,
    name: "John",
    comment: "This is a good product",
  },
  {
    id: 2,
    name: "Kabir",
    comment: "This is a good product1",
  },
  {
    id: 3,
    name: "John",
    comment: "This is a good product",
  },
  {
    id: 4,
    name: "Kabir",
    comment: "This is a good product",
  },
  {
    id: 5,
    name: "John",
    comment: "This is a good product",
  },
];

const commentsByName = comments.reduce((acc, curr) => {
  const key = curr.name;
  const value = acc[key] ? [...acc[key], curr.comment] : [curr.comment];
  acc[key] = value;
  return acc;
}, {});

// Example-3
const studentsArray = [
  { name: "Kingsley", score: 70, position: "1st" },
  { name: "Jack", score: 80, position: "2nd" },
  { name: "Joe", score: 63, position: "3rd" },
  { name: "Beth", score: 75, position: "4rd" },
  { name: "Kareem", score: 59, position: "5th" },
  { name: "Sarah", score: 93, position: "6th" },
];

const studentObj = studentsArray.reduce((acc, student) => {
  return { ...acc, [student.name]: student.position };
}, {});

console.log(studentObj);

// Example-4
// Finding maximum and minimum value
const students = [
  { name: "Kingsley", score: 70 },
  { name: "Jack", score: 80 },
  { name: "Joe", score: 63 },
  { name: "Beth", score: 75 },
  { name: "Kareem", score: 59 },
  { name: "Sarah", score: 93 },
];

const max = students.reduce((acc, student) => {
  const field1 = "max";
  const field2 = "min";
  acc[field1] = acc[field1] > student.score ? acc[field1] : student.score;
  acc[field2] = acc[field2] < student.score ? acc[field2] : student.score;

  return acc;
}, {});

console.log(max);

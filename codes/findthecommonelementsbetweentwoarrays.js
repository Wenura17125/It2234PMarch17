/*
a = [4,5,6,3,7]
b = [8,3,2,1,5]
find the common elements between a and b
*/

// Define the arrays
let a = [4, 5, 6, 3, 7];
let b = [8, 3, 2, 1, 5];

// Array to store common elements
let commonElements = [];

// Use forEach to find common elements
a.forEach(element => {
    if(b.includes(element)) {
        commonElements.push(element);
    }
});

// Display the result
console.log("Common elements between arrays:", commonElements);
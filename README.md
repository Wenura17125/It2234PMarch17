# IT2234P Web Services and Server Technologies

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Code Quality](https://img.shields.io/badge/Code%20Quality-A-brightgreen?style=for-the-badge)]()

> 📚 A comprehensive collection of daily practical lessons for Web Services and Server Technologies course.

## 📋 Course Overview

This repository serves as a practical guide through various web services and server technologies. Each lesson is organized in dedicated folders containing both source code and visual outputs.

## 🗓️ Latest Session: JavaScript Array Operations & Advanced Concepts (March 17, 2025)

### 🎯 Learning Objectives

- Master array manipulation using push and pop operations
- Implement array traversal using forEach loops
- Develop algorithms for array comparison and analysis
- Find common elements between arrays
- Understand nested array operations
- Learn JSON object manipulation
- Practice array reversal techniques
- Implement array frequency analysis
- Find pairs that sum to a target value
- Analyze element frequency in arrays

### 💻 Code Examples & Implementations

#### 1. Basic Array Operations

##### Array Push and Pop (`Arrayoperationspushpop.js`)
```javascript
//Array operations
//push pop
arr3 = ['a','b','d'];
console.log(arr3);
arr3.push('e');
console.log(arr3);
arr3.pop();
console.log(arr3);
```
[View Output](outputs/Arrayoperationspushpop.png)

##### Array Initialization and Access (`printarray.js`)
```javascript
//Array
//functio
let name = []; //array initialization
let score = [84, 92, 75, 68, 55, 95, 66, 89, 87, 74]; //array declaration
//accessing array element
console.log(score[0]);
```
[View Output](outputs/printarray.png)

#### 2. Array Traversal Techniques

##### Using For Loop (`printarrayusingforloop.js`)
```javascript
let score = [84, 92, 75, 68, 55, 95, 66, 89, 87, 74];
for(let i=0;i< score.length;i++)
{
    console.log(score[i]);
}
```
[View Output](outputs/printarrayusingforloop.png)

##### Using forEach Loop (`printarrayusingforeachloop.js`)
```javascript
let score = [84, 92, 75, 68, 55, 95, 66, 89, 87, 74];
score.forEach((n)=>{
    console.log(n);
})
```
[View Output](outputs/printarrayusingforeachloop.png)

#### 3. Advanced Array Operations

##### Finding Maximum Number (`findmaxnumberinthearrayusingforeachloop.js`)
```javascript
//find max number in the array using foreach loop
let score = [84, 92, 75, 68, 55, 95, 66, 89, 87, 74];
let max = score[0];
score.forEach((n)=>{
    if(n>max)
    {
        max = n;
    }
});
console.log("Maximum number in the array is: " + max);
```
[View Output](outputs/findmaxnumberinthearrayusingforeachloop.png)

##### Finding Common Elements (`findthecommonelementsbetweentwoarrays.js`)
```javascript
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
```
[View Output](outputs/findthecommonelementsbetweentwoarrays.png)

##### Nested Array Operations (`printthenestedarray.js`)
```javascript
// Print nested array using forEach loop
let nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
nestedArray.forEach((n) => {
  n.forEach((m) => {
    console.log(m);
  });
});
```
[View Output](outputs/printthenestedarray.png)

##### Array Reversal (`reversethearrayusingpushpop.js`)
```javascript
//reverse the array using push and pop
// a b c d -> d c b a
let arr = ['a','b','c','d'];
let arr2 = [];

while(arr.length > 0) {
    arr2.push(arr.pop());
}

console.log(arr2);
```
[View Output](outputs/reversethearrayusingpushpop.png)

#### 4. Array Analysis and Algorithms

##### Finding Pairs with Target Sum (`findingpairsinanarraythatsumuptoatargetvalue.js`)
```javascript
// Example array and target
let arr = [1, 2, 3, 4, 5, 6];
let target = 7;

// Function to find pairs that sum up to target using forEach
function findPairs(arr, target) {
    let pairs = [];
    
    // Use forEach to iterate through each number
    arr.forEach((num1, index) => {
        // Only check numbers after the current number to avoid duplicates
        arr.slice(index + 1).forEach(num2 => {
            // If pair sums to target, add to results
            if(num1 + num2 === target) {
                pairs.push([num1, num2]);
            }
        });
    });
    
    return pairs;
}
```
[View Output](outputs/findingpairsinanarraythatsumuptoatargetvalue.png)

##### Finding Most Frequent Element (`findthemostfrequentelementinthearray.js`)
```javascript
const numbers = [4,8,3,4,3,2,1,8,4];

// Create a Map to store frequency
const numberCount = new Map();

// Count frequency of each number
numbers.forEach(number => {
    const currentCount = numberCount.get(number) || 0;
    numberCount.set(number, currentCount + 1);
});

// Find the most frequent number
let highestCount = 0;
let mostCommonNumber = null;

numberCount.forEach((count, number) => {
    if (count > highestCount) {
        highestCount = count;
        mostCommonNumber = number;
    }
});
```
[View Output](outputs/findthemostfrequentelementinthearray.png)

#### 5. JSON Operations and Data Analysis

##### Basic JSON Structure (`JSON.js`)
```javascript
//JSON
//{key:value}
let student = {
    name: "John",
    age: 20,
    marks: 90,
    isPassed: true,
    address: {
        street: "123 Main St",
        city: "Anytown"
    }
};
```
[View Output](outputs/JSON.png)

### 📊 Implementation Summary

| Category | File | Description | Output |
|----------|------|-------------|--------|
| Basic Array Operations | `Arrayoperationspushpop.js` | Basic array push/pop operations | [View](outputs/Arrayoperationspushpop.png) |
| Basic Array Operations | `printarray.js` | Array initialization and access | [View](outputs/printarray.png) |
| Array Traversal | `printarrayusingforloop.js` | Array traversal using for loop | [View](outputs/printarrayusingforloop.png) |
| Array Traversal | `printarrayusingforeachloop.js` | Array traversal using forEach | [View](outputs/printarrayusingforeachloop.png) |
| Array Analysis | `findmaxnumberinthearrayusingforeachloop.js` | Finding maximum value using forEach | [View](outputs/findmaxnumberinthearrayusingforeachloop.png) |
| Array Comparison | `findthecommonelementsbetweentwoarrays.js` | Finding common elements between arrays | [View](outputs/findthecommonelementsbetweentwoarrays.png) |
| Nested Arrays | `printthenestedarray.js` | Nested array traversal using forEach | [View](outputs/printthenestedarray.png) |
| Array Manipulation | `reversethearrayusingpushpop.js` | Array reversal using push/pop | [View](outputs/reversethearrayusingpushpop.png) |
| Array Algorithms | `findingpairsinanarraythatsumuptoatargetvalue.js` | Finding pairs that sum to target | [View](outputs/findingpairsinanarraythatsumuptoatargetvalue.png) |
| Array Analysis | `findthemostfrequentelementinthearray.js` | Finding most frequent element | [View](outputs/findthemostfrequentelementinthearray.png) |
| JSON Operations | `JSON.js` | JSON object manipulation | [View](outputs/JSON.png) |
| Student Data Analysis | `homework.js` | Student data filtering and GPA analysis | [View](outputs/homework.png) |

### 🔍 Technical Notes

- All implementations are in pure JavaScript
- Extensive use of ES6+ array methods
- Each example includes comprehensive console output
- Visual outputs are captured for reference
- Consistent code formatting and naming conventions

---

<div align="center">

📖 **Learning Path** | 🛠️ **Practical Examples** | 📊 **Visual Outputs**

</div>
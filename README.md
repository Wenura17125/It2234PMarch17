# IT2234P Web Services and Server Technologies

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Code Quality](https://img.shields.io/badge/Code%20Quality-A-brightgreen?style=for-the-badge)]()

> 📚 A comprehensive collection of daily practical lessons for Web Services and Server Technologies course.

## 📋 Course Overview

This repository serves as a practical guide through various web services and server technologies. Each lesson is organized in dedicated folders containing both source code and visual outputs.

## 🗓️ Latest Session: JavaScript Functions & Programming Concepts (March 19, 2025)

### 🎯 Learning Objectives

- Master arrow function syntax and usage
- Implement callback functions effectively
- Understand function parameters (default and rest)
- Create recursive functions
- Build practical function implementations
- Practice boolean function logic
- Develop mathematical operations using functions

### 💻 Code Examples & Implementations

#### 1. Arrow Functions

##### Basic Arrow Function (`arrowfunction.js`)
```javascript
let sum = (a, b) => a + b;
console.log(sum(5, 3));
```
[View Output](Output/arrowfunction.png)

##### Arrow Function with Multiple Parameters (`arrowfunctiontosum2numbers.js`)
```javascript
let sum = (a, b) => {
    return a + b;
};
console.log(sum(10, 20));
```
[View Output](Output/arrowfunctiontosum2numbers.png)

#### 2. Function Parameters

##### Default and Rest Parameters (`defaultandrestparameter.js`)
```javascript
function sum(a, b = 10) {
    return a + b;
}
console.log(sum(5));
```
[View Output](Output/defaultandrestparameter.png)

##### ForEach with Rest Parameters (`foreachrestparameter.js`)
```javascript
function printNumbers(...numbers) {
    numbers.forEach(number => console.log(number));
}
printNumbers(1, 2, 3, 4, 5);
```
[View Output](Output/foreachrestparameter.png)

#### 3. Basic Function Operations

##### Print Message Function (`functionprintmsg.js`)
```javascript
function printMessage(msg) {
    console.log(msg);
}
printMessage("Hello World");
```
[View Output](Output/functionprintmsg.png)

##### Addition Function (`functionsum.js`)
```javascript
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 3));
```
[View Output](Output/functionsum.png)

##### Subtraction Function (`functionsub.js`)
```javascript
function subtract(a, b) {
    return a - b;
}
console.log(subtract(10, 5));
```
[View Output](Output/functionsub.png)

#### 4. Advanced Function Concepts

##### Callback Function (`callbackfunction.js`)
```javascript
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

function callMe() {
    console.log('I am callback function');
}

greet('Peter', callMe);
```
[View Output](Output/callbackfunction.png)

##### Recursive Function (`recursivefunctiontoprintnumbers.js`)
```javascript
function printNumbers(n) {
    if(n > 0) {
        console.log(n);
        printNumbers(n - 1);
    }
}
printNumbers(5);
```
[View Output](Output/recursivefunctiontoprintnumbers.png)

##### Boolean Function (`booleanfunctiontofindgivennumberprime.js`)
```javascript
function isPrime(number) {
    if (number <= 1) return false;
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) return false;
    }
    return true;
}
console.log(isPrime(17));
```
[View Output](Output/booleanfunctiontofindgivennumberprime.png)

### 📊 Implementation Summary

| Category | File | Description | Output |
|----------|------|-------------|--------|
| Arrow Functions | `arrowfunction.js` | Basic arrow function implementation | [View](Output/arrowfunction.png) |
| Arrow Functions | `arrowfunctiontosum2numbers.js` | Arrow function with multiple parameters | [View](Output/arrowfunctiontosum2numbers.png) |
| Function Parameters | `defaultandrestparameter.js` | Default and rest parameter usage | [View](Output/defaultandrestparameter.png) |
| Function Parameters | `foreachrestparameter.js` | ForEach with rest parameters | [View](Output/foreachrestparameter.png) |
| Basic Operations | `functionprintmsg.js` | Simple message printing function | [View](Output/functionprintmsg.png) |
| Basic Operations | `functionsum.js` | Addition function | [View](Output/functionsum.png) |
| Basic Operations | `functionsub.js` | Subtraction function | [View](Output/functionsub.png) |
| Advanced Concepts | `callbackfunction.js` | Callback function demonstration | [View](Output/callbackfunction.png) |
| Advanced Concepts | `recursivefunctiontoprintnumbers.js` | Recursive function implementation | [View](Output/recursivefunctiontoprintnumbers.png) |
| Advanced Concepts | `booleanfunctiontofindgivennumberprime.js` | Prime number checker function | [View](Output/booleanfunctiontofindgivennumberprime.png) |

### 🔍 Technical Notes

- All implementations are in pure JavaScript
- Extensive use of ES6+ function syntax
- Each example includes comprehensive console output
- Visual outputs are captured for reference
- Consistent code formatting and naming conventions

---

<div align="center">

📖 **Learning Path** | 🛠️ **Practical Examples** | 📊 **Visual Outputs**

</div>
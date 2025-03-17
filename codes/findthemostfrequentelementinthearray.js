//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the array

/* Example array visualization:
   Index:  0 1 2 3 4 5 6 7 8
   Value:  4 8 3 4 3 2 1 8 4
   
   Let's count how many times each number appears:
   4 appears 3 times
   8 appears 2 times
   3 appears 2 times
   2 appears 1 time
   1 appears 1 time
   
   So, 4 is the most frequent element (appears 3 times)
*/

// Our input array
const numbers = [4,8,3,4,3,2,1,8,4];

// Step 1: Create an empty Map to store how many times each number appears
// Think of it like a counting table where we'll mark each number we see
const numberCount = new Map();

// Step 2: Count how many times each number appears in the array
// We look at each number one by one and keep track of its count
numbers.forEach(number => {
    // If we haven't seen this number before, start its count at 0
    // Then add 1 to its count
    const currentCount = numberCount.get(number) || 0;
    numberCount.set(number, currentCount + 1);
});

// Step 3: Find which number appears the most times
let highestCount = 0;          // Keep track of the highest count we've seen
let mostCommonNumber = null;   // Store the number that appears most often

// Look at each number and its count in our counting table
numberCount.forEach((count, number) => {
    // If this number appears more times than our current highest count
    // Update our records
    if (count > highestCount) {
        highestCount = count;
        mostCommonNumber = number;
    }
});

// Step 4: Show the result
console.log(`The number ${mostCommonNumber} appears most often (${highestCount} times)`);

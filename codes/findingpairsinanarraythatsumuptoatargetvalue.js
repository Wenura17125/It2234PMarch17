//arr = [1,2,3,4,5,6];
//target = 7;
//result = [[1,6],[2,5],[3,4]];
//finding pairs in an array that sum up to a target value
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

// Get all pairs and show them
let result = findPairs(arr, target);
console.log(`Pairs that sum up to ${target}:`);
result.forEach(pair => {
    console.log(`[${pair[0]}, ${pair[1]}]`);
});

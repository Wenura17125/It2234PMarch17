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
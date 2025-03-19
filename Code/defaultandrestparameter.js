//default parameter
console.log("================================Default Parameter===========================")
const sum = (a=5,b=6) => {
    return a+b
}
console.log(sum())

//rest parameter
console.log("================================Rest Parameter==============================")
const sum2 = (...a) => {
    let sum = 0
    for(let i=0;i<a.length;i++)
    {
        sum = sum + a[i]
    }
    return sum
}
console.log(sum2(1,2,3,4,5,6,7,8,9,10))
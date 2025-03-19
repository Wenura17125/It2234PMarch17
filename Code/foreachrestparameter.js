/*const mysum = (...n) => {
    let t = 0
    n.forEach((i) => t = t + i)
        console.log(t)    
};*/

const mysum = (...n) => {
    return n.reduce((t, i) => t = t + i)
}
console.log(mysum(1, 2, 3, 4, 5))

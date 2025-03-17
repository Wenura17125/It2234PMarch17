//reverse the array using push and pop
// a b c d -> d c b a
let arr = ['a','b','c','d'];
let arr2 = [];

while(arr.length > 0) {
    arr2.push(arr.pop());
}

console.log(arr2);
//write a recursive function to print numbers from 1 to n 
function print(n) {

    if (n == 0) {
        return;
    }
    print(n - 1);
    
    console.log(n);
}

print(5);

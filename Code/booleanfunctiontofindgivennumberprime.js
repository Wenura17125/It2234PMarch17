//write a boolean function to find given number is prime
function isPrime(n)
{
    if(n==1)
    {
        return false;
    }
    if(n%2==1)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(isPrime(3))
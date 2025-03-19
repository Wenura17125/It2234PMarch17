//callback function
//a function which is passed as an argument to another function
const myname = (name) => {
    console.log("my name is: " + name)
}
const greet = (msg, fun) => {
    console.log("Hi.." + msg)
    fun("Rahul")
}
greet("Good Morning", myname)
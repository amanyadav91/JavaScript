function printVariable(variable)
{
    console.log(variable);
}
printVariable("Hii")
console.log(printVariable)
// passing the function to another function
function fun(x)
{
    console.log("before")
    x("Hello World")
    console.log("after")
}
fun(printVariable)  // calling
printVariable

// callback function in In JavaScript, 
// a callback function is a function that is passed as an argument to another function 
// and is executed after the completion of some asynchronous operation or at a specified time. Callback functions are commonly used in event handling, asynchronous programming, and functional programming.
function sumCallback(a,b,callback){
    callback(a+b)
}

function handleSum(sum)
{
    console.log(sum)
}
sumCallback(1,2,handleSum)
//  output: 3

// multiply using the callback fun
function mulCallBack(x,y,z,Callback)
{
    Callback(x*y*z)
}
// this is callback function
function multiply(multi)
    {
        console.log(multi)
    }
    mulCallBack(4,5,6,multiply)

function hel(name,Callback)
{
    Callback(" Hello"+name);
}
function pro(variable)
{
    console.log(variable)
}
hel("Aman",pro)
// anonmyous function in javascript

// Arrow function
function sum(a,b)
{
    return a+b
}

let sumArrow=(a,b)=>{
    return a+b
}
console.log(sum(3,5))
console.log(sumArrow(1,4))
console.log(sumArrow)

let printName=(nam)=>{
    return(nam);
}
console.log(printName("Aman"));

// passing array to functions 
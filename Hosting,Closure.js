// Hosting in JSON
console.log(sum(3, 5));
function sum(a,b)
{
    return a+b;
}
// hosting refers to the behavior where variable and function declarations are moved to the top of their
//  containing scope during the compilation phase, before the code is executed. This means that regardless 
// of where variables and functions are declared within their scope,
//  they are available for use throughout that entire scope.
// arrow function is not working the hosting  concept because it does not have its own this value.

//closure property say tha fuction exits its own function that conatin the same function
function print(variable){
    c=3
     return function func(variable1)
     {
        console.log(variable)
        console.log(variable1)
        console.log(c)
     }
}
let a = print(1)
a(2)

// Advanced feture of variable let's go
// let is replace by const because the const is no need to refined by many
//   let d=6
//  its give error
 const d =6
console.log(d)


// now var keyword that used to apply for tha java keyword
{
var x = 10;
}
console.log(x)
{
    let y=10
}
console.log(y)
// its gives error while if you take the in 
// the defined structured  way then it will work when we take tha let to became var
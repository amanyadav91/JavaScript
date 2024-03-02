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
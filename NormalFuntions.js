//create a function
function amanNumber(){
    console.log("Hello")
    console.log(10) 
}
amanNumber();
    
// argument in function
function addNumbers(a,b){
    console.log(a+b);
}
addNumbers(5,6);
let  x = 2;
let y=7;
addNumbers(x,y);

//default value of arguments
function multiply(a , b=4){
   return a*b ;}
console.log(multiply(3));

//rest parameter
function sum(...args){
    let total=0;
    for (const arg of args) {
        total+=arg;
    }
return total;}
console.log(sum(1,2,3,4,5));
 
// call your name with function
function printName(name){
    console.log(name);
}
printName("Aman Yadav");
// re use ability of function
function sum(a,b)
{
    return a+b
}
let s= sum(7,9)
console.log(s)
let s1= sum(89,89)
console.log(s1)
// creating function with one return agruments 
function nam(name){
    return name;
}
let n =nam( "Aman") +" is doing well";
console.log(n);
// Show Output in JSON
console.log("Hello Aman")

 // create a variable
 let amanNumber = 3;
 amanNumber=6;
 console.log(amanNumber);

 // line by line 
 let a=1;
 console.log(a)
 let b=2.3;
 console.log(b)
 let c=3;
 console.log(c)
 let d=a+b;
 console.log(d)
 
//  number types in JSON
console.log(typeof a)

// its contains all types data in number
console.log(typeof b)
console.log(a+b/4)

//  string types in JSON
let car="Aman";
console.log(car+" is learning");
console.log(typeof car)
// it only contain text or character so the type of car is string

// concatenation with + operator also work here because JavaScript is loosely typed language
// adding string 
let amn ="I love "+car;
console.log(amn);
let  age="Age: 20"
console.log(age + " Years");
// template literals are used to add variables inside strings using back ticks (`) and $
// concatenation of two strings using '+' operator

//boolean types in json
let bol = true;
let bol1= false;
console.log(typeof bol)
console.log (typeof bol1)
console.log(!bol)
console.log(bol && bol1)   // return false 

// null and undefined var in json
let un= undefined;
console.log(un)
console.log(typeof un)

// NULL DEFINED
let nul=null;
console.log(nul)
console.log(typeof nul)
let ad
console.log(ad)    // returns und
  
//variable comparison
let  x=5;
let y=7;
console.log(x==y) 
//returns false because it checks for
   console.log(x!=y)
   console.log(x>y)
   console.log(x<y)
   console.log(x<=y)
   console.log(x>=y)

   //string comparison
   let str1='hello';
   let str2='hey';
   console.log(str1===str2);
        //false
        console.log(str1!=str2);
        console.log(str1>=str2);
        console.log(str1<=str2);

        // garbage collaction
        let g=1;
        console.log(`before ${g}`);
        g = null;
        let h=2;
        console.log(`after ${h}`)
        // basic are done 

        
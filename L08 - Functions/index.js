// Functions
// Functions are pieces of code that we can reuse again and again in our code

// Function Declaration - JavaScript Hoisting
/* A function declaration defines a named function.It's hoisted,
 meaning you can call it before it's defined. */

 //console.log("we are developres, we love to code");


 function displayMessage(){
    console.log("we are developers, we love to find the bugs");
    let x = 10;
    let y = 20;
    console.log(x+y);
    
}

 
// Calling the function
displayMessage();
/* displayMessage();
displayMessage();
displayMessage();
displayMessage(); */



// Function Parameters and Arguments
/*Functions can take parameters, which act as placeholders for the values 
that will be passed to the function.The passing value is called an argument.*/
function greet(username,lastname){
   console.log("hello"+" "+ username+" "+ lastname+ " "+ "Your Welcome")
   console.log("Good morning")
}
greet("Rajesh","Appu");


function math(x,y,z){
   console.log(x+y+z);
}
math(5,5,5)



// Default Parameter
function printer(color="black"){
   console.log("Print in"+ " "+color+" "+"color" )
}
printer("blue");
printer();


// Function with Return Type
function add(a,b){
   return( a+b)
}
let sum=add(10,10);
console.log(sum);


///////////////////////////////////////////////////////////////////////

// Function Expression
/* A function expression defines a function inside an expression.
It's not hoisted, so you can't call it before it's defined.*/

let number=function(){
   console.log("Good Morning")
}
number(); 

let morning=function(name){
   console.log(`good morning ${name}`)
}
morning("vinite");



// Function Expression with Return Type

let mult=function(a,b){
   return(a*b)
}
let mul=mult(5,5)
console.log(mul);
//console.log(mult(5,10)) i can also print using this code.


///////////////////////////////////////////////////////////////////////

// Arrow Function
let evening =()=>{
   console.log("Good Evening");
}
evening();
 
// Arrow functions provide a concise syntax and do not bind their own 'this'. They are not hoisted.

// With Argument
let even=(name)=>{
   console.log(`Good Evening ${name}`)
}
even("Rahul.");

// Arrow Function with Return Type
/* let sub=(a,b)=>{
   return(a-b);
}
console.log(sub(10,5));

let subt=(a,b)=>a-b;
console.log(subt(15,14)); */


// Shorter Way
let multi=(a,b)=>a*b;
console.log(multi (10,10));

//Function Calling Other Function
function welcomeShopper(name){
   console.log(`welcome ${name} ! enjoy ur trip`);
}
function main(name){
   let shoppername=name;
   welcomeShopper(shoppername);
}
main("Gayu");
//Anonymous Functions: Later on Course on Arrays
setTimeout 

/**
Scope of variables will on functions and loops
var: Function scoped.
let: Block scoped.
const: Block scoped.
 */

// Datatypes
// Javascript is Dynamic Typing
// Primitive and Object Type

//Primitive Data Types
//1.Number - Represents both integer and floating-point numbers.
let age = 25;
console.log(age);
console.log(typeof age);

let Age= "25"
console.log(Age)
console.log(typeof Age)

//2.String - Represents a sequence of characters.
let name ="Hello World"
console.log(name)
console.log(typeof name)

//3.Boolean - Represents a logical entity and can have two values: true or false.
let isActive=true;
let haslicense= false;
console.log( isActive );
console.log(haslicense);
console.log(typeof isActive);

//4.Undefined - A variable that has been declared but not assigned a value.


//5.Null - Represents the intentional absence of any object value.
let x = null;
console.log(x)

//6.Symbol - Represents a unique and immutable value, often used as object property keys.
let unique= Symbol('key');
console.log(unique);

//7.BigInt - Represents whole numbers larger than 2^53 - 1 (the largest number JavaScript can reliably represent with the Number type).
let largenumber= BigInt(8937309439730947);
var largernumber= 764917648936848947n;
console.log(largenumber);
console.log(largernumber)



//Non-Primitive Data Types
//1.Object
/*Represents a collection of properties, each consisting of a key (usually a string) 
and a value (which can be any data type, including another object).*/


let person = {
    name:"Praveen",
    age:27,
    isemployed:true,
}
console.log(person)
console.log(person.name)

//2.Array
//A special type of object used for storing ordered collections of values.
let numbers=[1,2,3,4,5,6]
console.log(numbers)

let mixdata=[1,"name",true,null];
console.log(mixdata) //we can store different types of data in arrays.

//3.Function
//A special type of object that is callable and can perform an action.
function invite(){
    console.log("you are invited to this project");
}
invite();

//4.Date - A built-in object for handling dates and times.
let now = Date();
console.log(now)


let y;
console.log(y);

y = 10;
console.log(y);


let userName = "John";
console.log("welcome," +userName + "!");

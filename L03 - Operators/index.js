//Operators
/*
1.Arithmetic Operators
2.Assignment Operators
3.Comparison Operators
4.Logical Operators
5.String Operators
/* /* /* /* /* */

//1.Arithmetic Operators - Arithmetic operators are used to perform basic mathematical operations
//1.1)Addition (+)
console.log("Arithmetic Operators")
let sum = 10 + 19;

console.log("addition",sum); 

//1.2)Subtraction (-)
let a = 5;
let b = 4;
console.log(a-b);

/*  console.log("Difference",difference) */
 
//1.3)Multiplication (*)
let multiple = 5 * 2;
console.log("multiple",multiple)

//1.4)Division (/)
let div = 10 / 2;
console.log("Division",div)

//1.5)Modulus (%)
let modulus = 100%10;
console.log("modulus",modulus);

//1.6)Exponentiation (**)
let x = 2**3;
console.log("Exponentiation",x);

//1.7)Increment (++)
let increment = 10;
increment++;
console.log("increment",increment)

//1.8)Decrement (--)
let decrement = 10;
decrement--;
decrement--;
decrement--;
console.log("Decrement",decrement);

//2.Assignment Operators - Assignment operators are used to assign values to variables.
//2.1)Assignment (=)

let c =10;
console.log("Assignment", c) 

//2.2)Addition Assignment (+=)
 c += 5;
console.log("Addition Assignment",c)


//2.3)Subtraction Assignment (-=):
/* c -= 5;
console.log("Subtraction Assignment", c) */

//2.4)Multiplication Assignment (*=):
/* c *= 2;
console.log("multiplication:", c) */

//2.5)Division Assignment (/=):
/* c /= 2;
console.log("Division Assignment:",c) */

//2.6)Modulus Assignment (%=):
c %= 3;
console.log("Modulus", c) 

//2.7)Exponentiation Assignment (**=)
let i = 5;
i **=2
console.log("Exponent:",i)

//3.Comparison Operators - Comparison operators are used to compare two values.

//3.1)Equal (==)
console.log("Equal 10==5",10==5);
console.log("Equal 5==5",5==5);
console.log("Equal 5=='5'",5=="5"); //Type coercion (javascript will automatically convert string to number)

//3.2)Strict Equal (===)
console.log(" Strict Equal 5==='5'",5==="5")

//3.4)Not Equal (!=)
console.log("Not Equal 5!=5", 5!='5');

//3.5)Strict Not Equal (!==)
console.log("Not Equal 5!==5", 5 !=='5');

//3.6)Greater Than (>)
console.log("Greater than 10>5",10>5)
 console.log("Greater than 5>5",5>5)

//3.7)Less Than (<)
console.log("Lesser than 5<10",5<10)
 console.log("Lesser than 10<10",10<10)
 
//3.8)Greater Than or Equal (>=)
console.log("Greater than or equal 10>=10", 10>=10)

//3.9)Less Than or Equal (<=)
console.log("less than or equal 5<=10", 5<=10)

//4.Logical Operators - Logical operators are used to combine multiple conditions.

//4.1)Logical AND (&&) multiplcation x
console.log("AND*",true && true);
console.log("AND*",false && true);
console.log("AND*",true && false);
console.log("AND*",false && false);

//4.2)Logical OR (||) Addition +
console.log("OR + true||true", true||true)
console.log("OR + false||false", false||false)
console.log("OR + false||true", false||true)
console.log("OR + true||false", true||false)

//4.3)Logical NOT (!)
console.log("NOT !false", !false);
console.log("NOT !true", !true);
console.log("NOT !true", !false);

//Example
let adult = true ;
let idproof = false; 

if (adult || idproof) {console.log("you are allowed inside");
}else{
    console.log("you are not allowed inside");
}

// String Operators
/* console.log("Hello World")
 */
//String concatenation

/* let str = "Hello"+" " + "World";
console.log(str);

str +="how are you ?";
console.log(str) */

//String with Different Quotes:
/* console.log(" i'm getting 'better' day by day.");
 */
//Concatenation with Object Properties:
 let mess = "i'm" + " " +"getting" +" "+ "'better'"+" " +"day by day.";
console.log(mess)

let userdetails = {
    id:108,
    name : 'jenny',
}


console.log("welcome" +" "+ userdetails.name +" "+ "your id is" +" "+ userdetails.id +"."); 

//Template literal
console.log(`Welcome ${userdetails.name} you id is ${userdetails.id}.`);

//Order Prcedence
console.log(10-2/2)
console.log((10-2)/2) 

// New Examples with - and /

// Additional Combined Example
 

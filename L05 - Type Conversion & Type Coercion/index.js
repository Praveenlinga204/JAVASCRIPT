//Type Conversion (Manually)
/*Type conversion (also known as type casting) is when you explicitly convert a
value from one type to another. JavaScript provides several functions for this purpose.*/

// Type Conversion
console.log('Type Conversion');

// String to Number
let strnum = "123";
let num = Number(strnum);
console.log(num);
console.log(typeof num);

let Num = 1234;
let str = String(Num);
console.log(str);
console.log(typeof str);

// Number to String
let bool = true;
let strbool = String(bool);
console.log(strbool);
console.log(typeof strbool);

// Boolean to String
let strtrue = true;
let strfalse = false;
let booltrue = String(true);
let boolfalse = String(false);
console.log(booltrue);
console.log(typeof true);
console.log(boolfalse);
console.log(typeof false);

// String to Boolean
let strBool = "name";
let boolstr = Boolean(strBool);
console.log(boolstr);

// Parsing integers and floats
let floatstr = "123.45";
let intfloat = parseInt(floatstr);
console.log(intfloat);
let float = parseFloat(floatstr);
console.log(float);

//Type Coercion
/*Type coercion is when JavaScript automatically converts a
value from one type to another during an operation.
This often happens with equality checks and arithmetic operations. */

// Type Coercion (Automatically)
console.log('Type Coercion');

// String and Number
let and = "5" + 2;
console.log(and);
let res1 = "5" - 2;
console.log(res1);

let res2 = "5" * 2;
console.log(res2);

// Boolean and Number
let rest1 = true + 1;
console.log(rest1)
let rest2 = false + 1;
console.log(rest2)
// Coercion occurs in equality checks (==), but not in strict equality checks (===).
// Equality checks
console.log(1 == "1");
console.log(1 ==="1");

console.log(0==false);
console.log(0===false);

/*
Arrow Functions
Variable Declarations
Template Literals
Object Destructuring
Default Parameters
Spread Operator
*/

//ES5
/* function add(a,b){
    return (2 + 2);
}
console.log(add()); */

//ES6
 const add = (a,b) => a*b;
const multi = add(3,3)
console.log(multi)


let mult =(multi * 2);
console.log(mult);

//ES5
let userOne = {
    firstName:'John',
    lastName: 'Doe'
};
console.log(userOne.firstName);
console.log(userOne.lastName);

//ES6
let userTwo = {
    firstName:'Jane',
    lastName: 'Doe'
};
const {firstName,lastName} = userTwo;
console.log(userTwo);


//ES5
let a =[1,2,3];
let b =[4,5,6];
let c = a.concat(b);
console.log(c);

//ES6
let combained = [...a,...b];  //spread operator
console.log(combained);
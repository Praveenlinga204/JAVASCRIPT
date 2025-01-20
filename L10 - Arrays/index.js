/*
An array is a data structure that can hold multiple values at once. 
These values can be of any type, including numbers, strings, objects, or even other arrays.
Arrays in JavaScript are zero-indexed, meaning the first element is at index 0.
*/

// Using square brackets
let fruits=["apple","Banana","Mango"]
console.log(fruits)
// Accessing Array Elements:
fruits[1]="Orange";
console.log(fruits); 

// Change Value in Array

/*
Using for loop to print array with hard-coded condition 
it will create issue if condition is like i < 5
*/

for(let i=0; i<3; i++){
    console.log(fruits[i])
}

/* 
To avoid hard-coded condition switch to array methods
*/
// We can use array length
console.log(fruits.length);

for(let i=0; i< fruits.length; i++){
    console.log(fruits[i])
}

// More Array Methods
let box =['books','Toys','Pen'];
console.log(box);

/* 
Add element to array
Adds one or more elements to the end of an array 
and returns the new length of the array.
*/
box.push('Dairy','chock////');
console.log(box)
/*
Remove element from array
Removes the last element from an array and returns that element.
*/
box.pop();
console.log(box)
/*
Adds one or more elements to the beginning of an array and returns the new length of the array.
*/
box.unshift('map');
console.log(box);
/*
Removes the first element from an array and returns that element.
*/
box.shift();
console.log(box);
// Anonymous Functions
box.forEach(function(x,index){
    console.log(x,index);
})


box.forEach( (x,index)=>{
console.log(x,index) 
})
// Combining Arrays

let container1=['tv','Laptop'];
let container2=['Playstation','Table'];
console.log(container1);
console.log(container2);

let container=container1.concat(container2);
console.log(container);



// Finding an Element Index, If not found it will return -1


let index=container.indexOf('Table');
console.log(index);
// Array with mixed data types

let mixedData=[10,3.4,'Name',true,false,undefined,null]
console.log(mixedData);

console.log(mixedData.includes('Namee'));
// Array of Employee Objects
let Employee=[
    {id:101,Name:'John',Age:35},
    {id:102,Name:'Rose',Age:29},
    {id:103,Name:'Richard',Age:30},
];

console.log(Employee);
Employee.forEach((Employe)=>{
    console.log(Employe)
})

console.log(Employee);
Employee.forEach((Employe)=>{
    console.log(`Employee id: ${Employe.id}`)
    console.log(`Employee Name: ${Employe.Name}`)
    console.log(`Employee id: ${Employe.Age}`)
    console.log("---")
})
//Fliters
let Employe = Employee.find((x) => x.id === 102);
console.log(Employe);

let x =Employee.filter((x)=> x.Age >= 30);
console.log(x);
// Map


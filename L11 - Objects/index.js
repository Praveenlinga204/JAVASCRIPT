// Adding a new property
let person = {
    name:"John Deo",
    age:21,
    empid: 1221
};
console.log(person);
console.log(person.name);
console.log(person.age);


person.city = "New York";
console.log(person);
person.age = 25;
console.log(person);

// Modifying an existing property

// Object with method

let car = {
    Brand: "Toyato",
    model:"canry",
    year: 2022,
    displayinfo: function(){
        return`${this.year} ${this.Brand} ${this.model}`;
    },

};
console.log(car);
console.log(car.displayinfo());
// Destructuring assignment
let nomi ={
    name:"Rana",
    age:25,
    taken:"Full Stack Developer",
    displayInfo: function(){
        return `${this.name} is ${this.age} years old and has choosen ${this.taken} `
    }
}
nomi.name ="Rana Ragupathi";
console.log(nomi.displayInfo());

let student ={
    name:"Ranjith",
    age:24,
    course: "Mern FullStack Developer"
};
console.log(student);
let {name,age,course} = student;
console.log(name); 
console.log(age);
console.log(course);

//Nested Complex Objects

let restaurant ={
    name : "Taj Hotel",
    location : "chennai",
    owner: {
             name: "Ranjith",
             age:45,
             contact: 86498326498,
             email: "ranjith123@gmail.com"
    },
    menu:[
        
            { menus:"Masala Dosa", price:100, spicy:true},
            {menus:"roti", price:80, spicy:true},
            { menus:"ice cream", price: 50, spicy:false},
            
        ]
};
console.log(restaurant);

// Accessing properties of the nested objects
console.log(`Welcome to ${restaurant.name} in ${restaurant.location}`)
console.log(`Owned by ${restaurant.owner.name}, age is ${restaurant.owner.age}.`)
restaurant.menu.forEach((item) => {
    console.log(
        `${item.menus} Rs.${item.price} spicy ${item.spicy ? ' spicy':'not spicy' }`)
})

// Destructure owner object

let  { name:ownerName,
    age:ownerage,
    contact:{email:owneremail,phon:ownerphone},

}=restaurant.owner;
// Output details about the restaurant
console.log(`owned by ${ownerName}, age ${ownerage}`);
console.log(`owned  by ${owneremail}, age ${ownerphone}`);

// Output the menu items using destructuring within forEach

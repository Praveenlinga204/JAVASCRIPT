// Decision Making: if, if...else, else if
console.log('Decision Making');

// Example 1: if statement
let temperature = 23;
if (temperature >= 25){
    console.log("it is hot outside")
}


// Example 2: if...else statement
if (temperature >= 25){
    console.log("it is hot outside")
}else{
    console.log("it is cold outside")
}

let israining = false;
if( israining ){
    console.log("Take your umbre 'its raining outside'");
}else{
    console.log("Dont take your umberlla 'its normal outside'")
}






// Example 3: else if statement
/* let nown = Date();
console.log(nown) */
let now = 19;
if(now <= 12){
    console.log("Good Morning")
}else if (now <= 18){
    console.log("Good Afernoon")
}else {
    console.log("Good Evening");
}

// Example 4: Nested if statements
// Variables
let age =17 ;
let iswithparents = false;
let hasidproof = true;

// Decision logic
if (age >=18){
    if(hasidproof) 
    {
        console.log("you can visit the mall and watch the movie and also visit the playarea.")
    } else {
        console.log("you can only visit the mall.")
    }
}else if (iswithparents){
    console.log("you can visit the play area.")
}else{
    console.log("you are not allowed into the play area.")
}

let day = 1 ; //this is not a good practice.
/* if(day==1){
    console.log("Monday")
}else if(day==2){
    console.log("Tuesday")
}else if(day==3){
    console.log("Wednesday")
}else if(day==4){
    console.log("Thursday")
}else if(day==5){
    console.log("Friday")
}else if(day==6){
    console.log("Saturday")
}else if(day==7){
    console.log("Holiday ")
}else{
    console.log("invalid input")
} */


// Switch Statement
switch(day){
    case 1:
        console.log("Monday");
        break;
        case 2:
            console.log("Tuesday");
            break;
            case 3:
                console.log("Wednesday");
                break;
                case 4:
                    console.log("Thursday");
                    break;
                    case 5:
                        console.log("Friday");
                        break;
                        case 6:
                            console.log("Saturday");
                            break;
                            case 7:
                                console.log("Sunday");
                                break;
                                default:
                                    console.log("Invalid Input")
}

//Ternary Operator
let isAdmin = true;
let userRole = isAdmin ?"am Admin":"am user";
console.log(userRole);

let mark = 30;
let result = mark >=30 ?"Pass":"fail";
console.log(result);

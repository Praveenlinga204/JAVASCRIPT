class Person{
    constructor(firstname,lastname,dob,phonenumber,isEmployed){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
        this.phonenumber = phonenumber;
        this.isEmployed = isEmployed;

    }
    getDetails(){
        const age = new Date().getFullYear()-this.dob;
        console.log(`${this.firstname} ${this.lastname} is ${age} old & contact no is ${this.phonenumber}`)
    }

    getempstatus(){
        console.log(`${this.firstname} is ${this.isEmployed ? 'Employed':'Unemployed'}`)
    }
}

class Employ extends Person{
    constructor(firstname,lastname,dob,phonenumber,isEmployed,jobtitle,company){

        super(
            firstname,
            lastname,
            dob,
            phonenumber,
            isEmployed);
        this.jobtitle = jobtitle;
        this.company = company;
    }
    getjobdetails(){
        console.log(`${this.firstname} ${this.lastname} works as ${this.jobtitle} in ${this.company}.`)
    }
}

let John = new Employ('Arun','kumar',1997, 638836846,true, 'Software Engineer','SoftTech');
console.log(John);
John.getDetails();
John.getjobdetails();



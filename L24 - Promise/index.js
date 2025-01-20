/* let promise = new Promise((resolve,reject)=>{
    let data = "5";
    if(typeof data ==='number'){
        resolve('Success');
    }else{
      reject('Failed');
    }
});

promise
.then((result)=>{
    console.log(`On Resolve:${result}`)
})
.catch((error)=>{
    console.log(`On Reject:${error}`)
});  */

// Practice 2

function fetchdata(){
    return new Promise((resolve,reject)=>{
        console.log(`Fetching data....`);
        setTimeout(() => {
            const data ={id:101,name:'John Deo'};
            const randamValue = Math.random();
            console.log(`RandamValue:${randamValue}`)
            const Success = randamValue > 0.2;

            if(Success){
                resolve(data);
            }else{
                reject(`Failed to Fetch data`)
            }
        },1000);
    })
};
fetchdata()
.then((result)=>{
    console.log(`Data Fetching`,result)
}).catch((error)=>{
    console.log('Error',error)
});


function fetchData (){
    return new Promise((resolve)=>{
        setTimeout(() => {
            const data = {
                id:191,
                name: "Rahul",
                
            };
            resolve(data);
        }, 1000);
    })
}
fetchData().then((result)=>{
    console.log(result);
})
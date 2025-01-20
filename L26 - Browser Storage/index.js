/* function fetchData (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const data = {id:919,name:"John Doe"};
            resolve(data);
        },2000)
    })
}
fetchData().then((result)=>{
    console.log(result);
}); 

//wihtout async
function getUser(){
    console.log('Fetching Data....');
    try{
        const data = fetchData();
        console.log(`Data Fetched:`, data)
    }catch (error){
        console.log(error);
    }
}
getUser();


async function getAsycUser(){
    console.log('Fetching Data....');
    try{
        const data = await fetchData();
        console.log(`Data Fetched:`, data)
    }catch (error){
        console.log(error);
    }
}
getAsycUser();
 */

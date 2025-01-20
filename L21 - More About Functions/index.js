function startengine(){
    return `Engine is started`
}
console.log(startengine());

function drive(drivername,engine){
    let message = engine(  );
    console.log(`${message} by ${drivername}`)
}
drive('Alex',startengine);
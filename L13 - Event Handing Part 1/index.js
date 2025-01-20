const button = document.getElementById('button');
console.log(button);
/* button.addEventListener('click',()=>{
    alert('Button Clicked')
}) */
button.addEventListener('mouseover',()=>{
    button.classList.add('buttonHover')
});
button.addEventListener('mouseout',()=>{
    button.classList.remove('buttonHover')
})


button.addEventListener('click',()=>{
    alert("Dont Touch me")
})


let num = [1,2,3,4,5,6,7,8,9,10];
num.forEach(function(num,index){
    console.log(num,index)
});
num.forEach(num=>console.log(num*2));


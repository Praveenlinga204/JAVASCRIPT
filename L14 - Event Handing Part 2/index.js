const inputName = document.getElementById('name');
const output = document.getElementById('name-output');
/* 
inputName.addEventListener('input',()=>{
  output.textContent=`Typed Name is ${inputName.value}`
}) */

  inputName.addEventListener('input',()=>{
    output.textContent=`Typed name is ${inputName.value}`
  })

  const carSelected = document.getElementById('car');
  const selecetedCar = document.getElementById('selected-car')

  carSelected.addEventListener('change',()=>{
    selecetedCar.textContent = `You have selected ${carSelected.value}`
  })
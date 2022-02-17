const input1 = document.querySelectorAll('input')[0]
const input2 = document.querySelectorAll('input')[1]
const info = document.querySelector('textarea')
const button = document.querySelector('button')
changeGradient();
function changeGradient()
{
    left = input1.value;
    right = input2.value;
    document.body.style = `background: linear-gradient(to right,${left},${right});`
    text = `${document.body.style.background}`
    info.innerHTML = text;

}
input1.addEventListener('input',function(){
   
     changeGradient();
})
input2.addEventListener('input',function(){
  
     changeGradient();
})

button.addEventListener('click',function(){
    info.select();
    document.execCommand("Copy");
})


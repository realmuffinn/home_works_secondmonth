//1 задание:
const btn1  = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const clear = document.querySelector('#clear')
const count = document.querySelector('h1')
let  q = 0


btn1.addEventListener('click' , increment)
btn2.addEventListener('click' , decrement)
clear.addEventListener('click' , Clear)
function increment (){
    q++
    count.innerText = q
}
function decrement (){
    q--
    if(q < 1){
        q = 0
    }
    count.innerText = q
}

function Clear (){
    q=0
    count.innerText = q
}
//2 задание:





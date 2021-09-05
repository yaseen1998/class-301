'use strict';
let greeting =()=>console.log('greeting')
greeting();


let newgreeting =name=>console.log(name)
newgreeting('yaseen');


let button = document.getElementById('btn')
// button.addEventListener('click',greeting)
// button.addEventListener('click',()=> console.log('add event'))
button.addEventListener('click',()=>{
    let sum = 5+2
    console.log(sum)
});

let twovar = (a,b)=> console.log(a+b)
twovar(5,6)

let twovar2 = (a,b)=>{
    let check =5;
    console.log((a+b+check))
}
twovar2(5,6)


let towvar3 = ([a,b] = [10,20])=>console.log(a+b)
towvar3()


let towvar4 = ({a,b} = {a:10,b:20})=>console.log(a+b)
towvar4()



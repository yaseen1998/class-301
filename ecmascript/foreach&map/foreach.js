'use strict';
let number = [1,2,3,4,5]
let callback =(item,index,ind)=>{
    console.log('the value:'+item)
    console.log('the index:'+index)
    console.log(ind)
}
number.forEach(callback)

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

let multi = number.map((item)=>{
    return item*2
})
console.log('multi:' + multi)
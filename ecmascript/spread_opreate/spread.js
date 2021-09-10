'use strict'
let one=[1,2,3]
let two =[4,5,6]

let all =[...one,...two]
console.log(all);

let custom = [7,8,9,...two,10,11]
console.log(custom);

let arr = one
arr.push(4)
console.log(arr);
console.log(one);

let arr2 = [...one]
arr2.push(5)

console.log(arr2);
console.log(one);

console.log(Math.min(one));
console.log(Math.min(...one));
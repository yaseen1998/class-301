// let num =[10,20,15,30]
// let add =num.reduce(function(acc,current,index,arr){
//     console.log(acc);
//     console.log(index);
//     console.log(current);
//     console.log(arr);
//     return acc + current
// })
// console.log(add);

// let add2 =num.reduce(function(acc,current,index,arr){
//     console.log(acc);
//     console.log(index);
//     console.log(current);
//     console.log(arr);
//     return acc + current
// },5)
// console.log(add2);


// let bigger = ['bla','aaaf','gafadfa','agaff']
// let check =bigger.reduce(function(acc,current,index,arr){
//     console.log(acc);
//     console.log(index);
//     console.log(current);
//     console.log(arr);
//     console.log(acc.length > current.length ? acc:current);
//     return acc.length > current.length ? acc:current
// })
// console.log(check);

// let remove = ['e','s','r','e']
// let final =remove.filter(function(ele){
//     return !ele.startsWith('e')
// }).reduce(function(acc,current){
//     return `${acc}${current}`
// })
// console.log(final);

let remove2 = ['e','s','r','e']
let final2 =remove2.filter(function(ele){
    return !ele.startsWith('e')
})
console.log(...final2);

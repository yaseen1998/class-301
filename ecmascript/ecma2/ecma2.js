'use strict'

// var 
// -function scope
// -can be redeclare
// -undefined when accessing var before is declare
// -create properties in the windows pbject

// let & const
// -block scope
// -cannot be redeclare
// -error when accessing var before is declare
// - doesnot create properties in the windows pbject


function vartest(){
    var x =1;
    if(true){
        var x =2;
        console.log(x);
    }
    console.log(x)
    return 'done'
} 
vartest()
function lettest(){
    let x =1;
    if(true){
        let x =2;
        console.log(x);
    }
    console.log(x)
    return 'done'
} 
lettest()
var y = 1
let yy= 2
console.log(window.y)
console.log(window.yy)
console.log(this.y)
console.log(this.yy)
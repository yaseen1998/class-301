'use strict'
// default parmeter 

function show(user,role,theme){
    user = user || 'default'
    role = role || 'role'
    theme = theme || 'theme'
    return `${user}${role}${theme}`
}

console.log(show('yaseen','start','role'));
console.log(show());

function show2(user='default',role='role',theme='theme'){
    
    return `${user}${role}${theme}`
}

console.log(show2('yaseen','start','role'));
console.log(show2);


// rest parmeter 

function info(a,b,c,...myparm){
    console.log('parm a' ,a);
    console.log('parm b' ,b);
    console.log('parm c' ,c);
    console.log('parm myparm' ,myparm);
}
console.log(info('one','two','three','four','five','six'));

function addAll(... myparm){
let number =0;
for(let my of myparm){
number += my
}
return number
}
console.log(addAll(1,2,3));
console.log(addAll(1,2,3,8,9));

// startwith 
// endwith
// endwith(,position)
// startswith(,position)
let x= 'elzero web school'
console.log(x.startsWith('el'));

console.log(x.startsWith('web',7));

console.log(x.endWith('school'));

console.log(x.endWith('web',7));

// includes 
console.log(x.includes('we',8));
// repeat (number of repeat)
console.log(x.repeat(3));

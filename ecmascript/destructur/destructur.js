'use strict'
var user ={
    name:'osama',
    gender:'male',
    age:'36',
    program:{
        html:70,
        css:80,
        js:10
    }
};

// const {name:theName,gender,age ,theme ='deafault'} =user
// console.log(`${name}${gender}${age}${theme}`);
// console.log(`${theName}`);


// const{name,gender,program:{html,css:theCSS,python=20}}=user;
// console.log(`${name}${html}${python}${theCSS}`);

// const{html,css,js}=user.program

// console.log(`${html}`);

// array 
// const food =['burger','pozaa','chicken']
// const[one,two,three,four="meet"]=food
// console.log(`${one}${two}${three}${four}`);
// // [one,,three,four="meet"]=food
// console.log(`${one}${three}${four}`);

// const food2 =['burger','pozaa','chicken',['meat','fish']]
// const [one1,two2,three3,[fr1,fr2,fr3='default']]=food2
// console.log(`${one1} , ${two2}, ${three3},${fr1},${fr2}`);


const food3 =['burger','pozaa','chicken','mango','orang']
const [o,...parent]=food3
console.log(`${o} ${parent}`);


// swapping 
var book = 'video'
 var video = 'book' ;
// var stash = book
// book=video
// video = stash

[book,video]=[video,book]
console.log(`book is ${book} video is ${video}`);

// const users ={
//     user1:'osama',
//     skill:{
//         html:88,
//         css:50,
//         js:['v','f','g']
//     }
// }
// const{user1,skill:{html,css,js:[one,two,three]}}=users

// console.log(user1);
// console.log(css);
// console.log(html);
// console.log(one);

const users ={
    user1:'osama',
    skill:{
        html:88,
        css:50,
        js:{fram1:'v',
    frame2:'l'}
    }
}
// const{user1,skill:{html,css,js:{fram1:one,fram2:two}}}=users
// console.log(one);

function show({user1,skill:{html,css,js:{fram1:one,fram2:two}}}){
    console.log(user1);
    console.log(css);
    console.log(html);
    console.log(one);
    

}
show(users)

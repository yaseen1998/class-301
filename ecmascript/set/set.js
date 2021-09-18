'use strict'

// // start set

// // start example number one

// let array =[1,2,3,3] 
// let books = new Set(array)


// console.log(array);
// console.log(books);
// console.log([...books]);

// // end example number one

// // start example number two

// let newbook = new Set().add('one').add('two');
// newbook.add('three')

// console.log(newbook);

// let books = new Set('osama');
// books.add('osama')
// books.add('a')
// books.delete('s')

// console.log(newbook);
// console.log(books);
// console.log(books.has('a'));
// console.log(books.size);
// books.clear()
// console.log(books);
// console.log();

// // end example number two

// // end set 

// // start map

// // start example number one 

// let users={}
// users['username']='osama';
// users.website='google';
// users['100']= 'this string'
// users[100]= 'this number'

// console.log(users);
// console.log(users.username);
// console.log(users['website']);

// let mymap = new Map()
// mymap.set('100','string')
// .set(100,'number')
// .set({a:1,b:2},'object')
// .set(function dosome(){},'function')
// mymap.set(false,'boolean')

// console.log(mymap);

// let newmap = new Map([
//     [(100,'number')],
//     [({a:1,b:2},'object')],
//     [(function dosome2(){},'function')],
//     [(false,'boolean')],
//     [('100','string')]
// ])
// console.log(newmap);

// // end example number one 

// // start example number two

let newmap = new Map([
        [100,'number'],
        [{a:1,b:2},'object'],
        [function dosome2(){},'function'],
        [false,'boolean'],
        ['100','string']
    ])
console.log(newmap.size);
console.log(newmap.get('100'));
console.log(newmap.get(100));
console.log(newmap.has(100));
console.log(newmap.has(10));
console.log(newmap.has(false));
console.log(newmap.delete(false));
console.log(newmap.size);
newmap.clear()
console.log(newmap.size);


// // end example number two



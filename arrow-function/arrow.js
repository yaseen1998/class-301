'use strict';
// let greeting =()=>console.log('greeting')
// greeting();


// let newgreeting =name=>console.log(name)
// newgreeting('yaseen');


// let button = document.getElementById('btn')
// // button.addEventListener('click',greeting)
// // button.addEventListener('click',()=> console.log('add event'))
// button.addEventListener('click',()=>{
//     let sum = 5+2
//     console.log(sum)
// });

// let twovar = (a,b)=> console.log(a+b)
// twovar(5,6)

// let twovar2 = (a,b)=>{
//     let check =5;
//     console.log((a+b+check))
// }
// twovar2(5,6)


// let towvar3 = ([a,b] = [10,20])=>console.log(a+b)
// towvar3()


// let towvar4 = ({a,b} = {a:10,b:20})=>console.log(a+b)
// towvar4()


let characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister'
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
    },
    {
      name: 'Euron',
      spouse: null,
      children: [],
      house: 'Greyjoy'
    },
    {
      name: 'Jon S.',
      spouse: null,
      children: [],
      house: 'Snow'
    }
  ];
  const sortByChildren = (charArray) => {
    // Solution code here..
     charArray.sort((a,b)=>{
     return a.name.toUpperCase() < b.name.toUpperCase()
    })
   
  };
//   console.log(sortByChildren(characters));

  characters.sort((a,b)=>{
     return a.name.toUpperCase() < b.name.toUpperCase()})
     console.log(characters);


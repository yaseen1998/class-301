'use strict';
function cat(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
}
cat.prototype.walking = () => {
    console.log(`${this.name} walking`)
}
cat.prototype.walking2 = function () {
    console.log(`${this.name} walking`)
}
let max = new cat('max', 'black', 2);
let maxis = new cat('maxis', 'orange', 4);

console.log(max.name, maxis.name)
max.walking2()
// max.walking()

//##################################################
//##################################################
class Animal{
constructor(type){
    this.type =type
}
}
class Cat extends Animal{
    constructor(name, color, age,type = 'human') {
        super(type)
        this.name = name;
        this.color = color;
        this.age = age;
        
    }
    

    walking() {
        console.log(` class walking :${this.name} walking`)

    }
    eating() {
        console.log(' class lion eating :')
    }
}
//##################################################
let max2 = new Cat('max', 'black', 2);
console.log(max.name)
max2.walking()
console.log(max2.type)
//##################################################

class Lion extends Cat {

    eating() {
        console.log(' class lion eating :lion eating')
    }
}
//##################################################

class Tiger extends Cat {

    // eating(){
    //     console.log('class tiger eating :tiger not eating')
    // }
}
//##################################################

let simba = new Lion('simba', 'gold', 5,'lion')
let sharn = new Tiger('sharn', 'orange', 4,'tiger')
simba.eating()
console.log(simba.type)
simba.walking()
sharn.walking()
sharn.eating()
//######################################################
let vat = 'male'
console.log(vat == 'male' ? 'mr' : 'mrs')

const htm = `<div class = 'card'>
<h2> hello</h2>
</div>`;

document.body.innerHTML = htm
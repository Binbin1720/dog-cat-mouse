var Cat = require('./Cat');
var Dog = require('./Dog');
var Mouse = require('./Mouse');

var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog('Red');
try{
    cat.eat(dog);
}
catch(error){
    console.log('Error while cat eating a dog');
}
console.log(cat);
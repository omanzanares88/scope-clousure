//

var firstName; // undefined
firstName = 'Oscar';
console.log(firstName);

//Reasiganamos un varor David por Ana
var lastName = "David"; // declarando / asignando
lastName = 'Ana'; //reasignando
console.log(lastName); //resultado

// Redeclaracion David por Ana
var secondName = 'David'; // declarando/ asignando
var secondName = 'Ana' // reasignando
console.log(secondName); //resultado

// Let

let fruit = 'Apple'; // declarando y asignando
fruit = 'Kiwi'; // reasignando
console.log(fruit);

let fruit 'Banana'; //redeclarar no se puede con let
console.log(fruit);

//const

const animal = 'dog' // declarando y asiganando
animal = 'cat'; // reasignando // no se puede reasiganr
console.log(animal);

const animal = 'Snake'; //no se puede redeclarar
console.log(animal);


// con arrays

const veicles = [];
veicles.push('🚗'); // metodo push 
console.log(veicles);

veicles.pop(); // meteodo pop no se puede
console.log(veicles);

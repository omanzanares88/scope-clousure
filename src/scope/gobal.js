//variables

var a; //declarando
var b = 'b'; //declaramos / asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// Global scope

var fruit = 'Apple' // global
console.log(fruit); //imprime por variable global

function bestFruit() {
    console.log(fruit); //imprime por variable global
}

bestFruit()

//otro ejemplo

function countries() {
    country = 'Colombia'; //Global puedes acceder a ella por fuera, pero si lo declaras como var ya no
    console.log(country);
}

countries();
console.log(country);
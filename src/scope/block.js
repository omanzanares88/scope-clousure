// block scope las variables definidad en un bloque solo prodran ser usadas dentro del bloque

function fruits() {
    if (true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 ='Kiwi' //block scope
        const fruit3 = 'Banana'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();

//segundo ejemplo con funciones internas en el blocke

function fruits() {
    if (true) {
        var fruit1 = 'Apple'; // function scope
        let fruit2 ='Kiwi' //block scope
        const fruit3 = 'Banana'; //block scope
        console.log(fruit2); //dentro de blocke
        console.log(fruit3); //dentro de blocke
    }
    console.log(fruit1); //fuera de blocke pero accede por que var es una funcion
}

fruits();
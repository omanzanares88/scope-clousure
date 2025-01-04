// con la palabra reservada debugger detectas en la consola cualquier error

var a = 'Hello';

function hello() {
    let b = 'Hello World';
    const c = 'Hello World!';
    debugger;
}

hello();
// variable local

function greeting() {
    let userName = 'Ana'; //variable interna
    console.log(userName);

if (userName === 'Ana') {
    console.log(`Hello ${userName}!`)
}

}

greeting(); //llama a la funsion

console.log(userName); //error no puede acceder a la variable local

const rl = require("readline-sync");

function multiplicar(a, b) {

    return a * b;

}

let numero1 = Number(

    rl.question("Primeiro número: ")

);

let numero2 = Number(

    rl.question("Segundo número: ")

);

console.log();

console.log(

    "Resultado:",

    multiplicar(numero1, numero2)

);
const rl = require("readline-sync");

// let notas = [];
// let soma = 0;

// for (let i = 0; i < 4; i++) {
//     let nota = rl.questionFloat(`Nota ${i + 1}: `);
//     notas.push(nota);
//     soma += nota;
// }

// let media = soma / notas.length;
// console.log();
// console.log("Média:", media.toFixed(2));

let array = []
//Adicionar no final da lista .push(elemento)
array.push('a','b','c','d')
console.log(`Está assim: ${array}`)
//Remover no final da lsta .pop()
array.pop()
console.log(`Está assim: ${array}`)
//Adicionar no início da lista .unshift(elemento)
array.unshift('Novo 0')
console.log(`Está assim: ${array}`)
//Remover no início da lista .shift()
array.shift()
console.log(`Está assim: ${array}`)
//Alterar, remover, independentemente de onde está na lista
// .splice(start: num do elemento, deleteCount: num, Add elemente)
array.splice(2, 0, 'Among') //
console.log(`Está assim: ${array}`)

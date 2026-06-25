const rl = require('readline-sync')
//Exercícios extras
let excer = "\n============ Exercício 11 — Tipo de Eleitor ============\n"
console.log(excer)
let age = rl.questionFloat('Eleitor, qual sua idade? ')

if (age >= 70) {console.log(`Voto facultativo`)}
else if (age >= 18) {console.log(`Voto obrigatório`)}
else if (age >= 16) {console.log(`Voto facultativo`)}
else {console.log(`Não vota`)}

rl.question()
console.clear()
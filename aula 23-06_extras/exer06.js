const rl = require('readline-sync')
//Exercícios extras
let excer = "\n============ Exercício 6 — Classificação de Nota por Conceito ============\n"
console.log(excer)

let nota = rl.questionFloat('Digite a nota: ')
console.clear()
console.log(excer)
if (nota >= 9) {console.log(`Nota ${nota} tem Conceito A`)}
else if (nota >= 7) {console.log(`Nota ${nota} tem Conceito B`)}
else if (nota >= 5) {console.log(`Nota ${nota} tem Conceito C`)}
else {console.log(`Nota ${nota} tem Conceito D`)}

rl.question()
console.clear()
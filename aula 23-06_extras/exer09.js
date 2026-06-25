const rl = require('readline-sync')
//Exercícios extras
let excer = "\n============ Exercício 9 — Ano Bissexto (versão simplificada) ============\n"
console.log(excer)
let ano = rl.questionInt('Digite o ano: ')
let bis = !(ano % 4)
if (bis) {
    console.log('Ano bissexto.')
} else {console.log('Ano não bissexto.')}
rl.question()
console.clear()
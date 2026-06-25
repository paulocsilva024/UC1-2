const rl = require('readline-sync')
//Exercícios extras
let excer = "\n============ Exercício 7 — Verificação de Número ============\n"
console.log(excer)
console.log('Digite um número inteiro.')
let n = rl.questionInt()
let par = !(n % 2)
console.clear()
console.log(excer)
if (n > 0) {
    if (par){
        console.log(`O número par e positivo`)   
    } else {console.log(`O número ímpar e positivo`)}
} else if (n < 0) {
    if (par){
        console.log(`O número par e negativo`)   
    } else {console.log(`O número ímpar e negativo`)}
} else {console.log(`O número zero é par`)}

rl.question()
console.clear()
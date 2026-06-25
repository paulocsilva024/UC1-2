const rl = require('readline-sync')
//Exercícios extras
let excer = "\n============ Exercício 8 — Maior entre Três Números ============\n"
console.log(excer)
console.log('Digite três números inteiros diferentes (um em cada linha)')
let n1 = rl.questionInt()
let n2 = rl.questionInt()
let n3 = rl.questionInt()
let maior
console.clear()
console.log(excer)
if ((n1 == n2) || (n1 == n3) || (n2 == n3)) {
    console.log('Eu falei para digitar números diferentes 😒')
} else {
    if (n1 > n2 && n1 > n3) {
    maior = n1
} else if (n2 > n1 && n2 > n3) {
    maior = n2
} else {maior = n3}
console.log(`O ${maior} eh o maior deles`)
}
rl.question()
console.clear()
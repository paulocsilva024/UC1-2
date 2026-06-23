const rl = require('readline-sync')
// console.log("============ Exercício 1 — Faixa Etária ============\n")

// let idade = rl.questionInt('Qual sua idade? ')
// if (idade >= 60) {
//     console.log(`Idoso.`)}
// else if (idade >= 18) {
//     console.log('Adulto.')}
// else if (idade >= 13) {
//     console.log('Adolescente.')}
// else { console.log('Criança.') }

// rl.question()
// console.clear()

// console.log("\n============ Exercício 2 — Triângulo ============\n")

// let a, b, c
// a = rl.questionInt('Informe o comprimento dos lados de um triangulo (a, b, C)\n')
// b = rl.questionInt()
// c = rl.questionInt()

// if (a == b && b == c) {console.log('Triângulo Equilátero')}
// else if (a == b || a == c || b == c) {console.log('Triângulo Isósceles')}
// else {console.log('Triângulo Escaleno')}

// rl.question()
// console.clear()

// console.log("\n============ Exercício 3 — Desconto Progressivo ============\n")

// // Pedir o valor da compra. Regras:

// // Até R$100 → sem desconto
// // Até R$300 → 5%
// // Até R$500 → 10%
// // Acima de R$500 → 15%

// let price = rl.questionFloat('Qual o valor da compra?\n')
// let total = price
// let perc = 'Sem desconto'
// if (price > 500) {total = price * 0.85; perc = '15%'}
// else if (price > 300) {total = price * 0.9; perc = '10%'}
// else if (price > 100) {total = price * 0.95; perc = '5%'}
// console.log(`\nValor original: R$ ${price}\nPercentual de desconto: ${perc}\nValor Final: ${total.toFixed(2)}`)
// rl.question()
// console.clear()

// console.log("\n============ Exercício 4 — Aprovação com Frequência ============\n")
// console.log(`Vamos ver se foi aprovado!\n`)
// let freq = rl.questionInt('Digite qual foi a sua frequencia: ')
// if (freq < 75) {
//     console.log('Reprovado por frequência.')
// } else {
//     let nf = rl.questionInt('Nota final: ')
//     if (nf >= 7) {
//         console.log('Aprovado!')
//     } else if (nf >= 5) {console.log('Recuperação')} else {console.log('Reprovado')}
// }
// rl.question()
// console.clear()

let excer05 = "\n============ Exercício 5 — Calculadora de IMC ============\n"
console.log(excer05)
let peso = rl.questionFloat('Digite o peso: ')
let alt = rl.questionFloat('Altura: ')
let imc = peso / (alt ** 2); imc = imc.toFixed(3)
let bla
if (imc >= 30) {bla = 'obesidade'} else if (imc >= 25) {bla = 'sobrepeso'} else if (imc >= 18.5) {bla = 'peso normal'} else {bla = 'que está baixo do peso'}
//rl.keyInPause('Continue...')
console.clear()
console.log(excer05)
console.log(`Seu IMC (${imc}) indica ${bla}.\n`)
rl.question()
console.clear()

console.log("\n============ Desafio — Pedra, Papel ou Tesoura ============\n")
// Còdigo para gerar um número aleatório entre 0 e 3
let pc = Math.floor(Math.random() * 3)
console.log('[0] = Pedra\n[1] = Papel\n[2] = Tesoura\n')
let user = rl.questionInt('Qual a sua jogada? ')
console.log(`\nJoguei ${pc}\n`)
if (user < 0 || user > 2) {
    console.log('Valor inválido')
} else {
    if ((user === 0 && pc === 2) || (user === 1 && pc === 0) || (user === 2 && pc === 1)) {
        console.log(`Está com sorte hoje, vc ganhou!!`)
    } else if (user === pc) {
        console.log('Empatou. Tente novamente.')
    } else {
        console.log('Você perdeu!')
    }
}
pc = Math.random()
console.log(pc)
rl.question()
console.clear()
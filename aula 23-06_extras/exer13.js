const rl = require('readline-sync')
//Exercícios extras
let excer = "\n============ Exercício 13 — Cálculo de Frete ============\n"
console.log(excer)

console.log('Qual o valor da compra?'); let compra = rl.questionFloat()
console.log('Qual a região de entrega?\n(sul, sudeste, centro-oeste, nordeste, norte)')
let region = rl.question()
let frete
console.clear()
console.log(excer)
if (compra > 200) {frete = `Frete grátis`}
else {
    if (region == 'sul') {frete = 20}
    else if (region == 'sudeste') {frete = 25}
    else if (region == 'centro-oeste') {frete = 30}
    else if (region == 'nordeste') {frete = 35}
    else if (region == 'norte') {frete = 40}
    else {frete = `A região não foi digitada corretamente`}
}
console.clear()
console.log(excer)
console.log(`\nValor da compra (R$) ${compra}.`)
console.log(`Região de entrega: ${region}.`)
console.log(`Valor do frete (R$): ${frete}.`)
rl.question()
console.clear()

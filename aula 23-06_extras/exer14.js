const rl = require('readline-sync')
//Exercícios extras
let excer = "\n======== Exercício 14 — Sistema de Desconto por Cliente VIP ========\n"
console.log(excer)

let compra = rl.questionFloat('Digite o valor da compra: ')
let vip = rl.keyInYNStrict()
let perc, final
console.clear()
console.log(excer)
if (vip){
    console.log(`Cliente VIP.`)
    if (compra > 300) {perc = 0.15}
    else if (compra > 100) {perc = 0.1}
    else {perc = 0.05}
    final = compra * (1 - perc)
} else {
    console.log(`Cliente comum.`)
    if (compra > 300) {perc = 0.10}
    else if (compra > 100) {perc = 0.05}
    else {perc = 0}
    final = compra * (1 - perc)
}
console.log(`Percentual aplicado: ${perc == 0 ? 'Sem desconto.': `${perc * 100}%.`}`)
console.log(`Valor final (R$): ${final}.`)

rl.question()
console.clear()
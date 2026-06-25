const rl = require('readline-sync')
//Exercícios extras
let excer = "\n============ Exercício 10 — Cálculo de Imposto ============\n"
console.log(excer)
console.log('Digite o salário.')
let sal = rl.questionFloat()
let percent, tax, salFinal
if (sal > 6000) {
    percent = 0.22
    tax = sal * percent
    salFinal = sal - tax
} else if (sal > 4000) {
    percent = 0.15
    tax = sal * percent
    salFinal = sal - tax
} else if (sal > 2000) {
    percent = 0.075
    tax = sal * percent
    salFinal = sal - tax
} else {
    percent = 0
    tax = sal * percent
    salFinal = sal - tax
}
console.clear()
console.log(excer)
console.log('Salário informado: R$ ' + sal)
console.log('Percentual aplicado: ' + percent*100 + '%')
console.log('Valor do imposto: R$ ' + tax)
console.log('Salário líquido: R$' + salFinal)

rl.question()
console.clear()
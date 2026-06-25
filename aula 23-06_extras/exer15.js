const rl = require('readline-sync')
//Exercícios extras
let excer = "\n======== Exercício 15 — Pode Fazer a Prova? ========\n"
console.log(excer)

let aluno = rl.question('Digite o valor da compra: ')
aluno = aluno.toLocaleUpperCase()
let freq = rl.questionFloat('Digite a frequencia (%): ')
let tcc = rl.keyInYNStrict('Entregou o trabalho final? ')

console.clear()
console.log(excer)
//Teste e retorno
if (freq < 75){
    console.log(`${aluno} está impedido(a) de fazer a prova final por falta`)
} else {
    if(tcc){
        console.log(`${aluno} pode fazer a prova`)
    } else {
        console.log(`${aluno} não pode fazer a prova, trabalho pendente`)
    }
}
rl.question()
console.clear()
const rl = require('readline-sync'); console.clear()
//Exercícios extras
let excer = "\n======== Exercício 15 — Pode Fazer a Prova? ========\n"
console.log(excer)

let aluno = rl.question('Digite o nome do aluno: ')
aluno = aluno.toLocaleUpperCase()
let freq = rl.questionFloat('Digite a frequencia (%): ')

//Teste e retorno
if (freq < 75){
    console.clear()
    console.log(excer)
    console.log(`${aluno} está impedido(a) de fazer a prova final por falta`)
} else {
    let tcc = rl.keyInYNStrict('Entregou o trabalho final? ')
    console.clear()
    console.log(excer)
    if(tcc){
        console.log(`${aluno} pode fazer a prova`)
    } else {
        console.log(`${aluno} não pode fazer a prova, trabalho pendente`)
    }
}
rl.question()
console.clear()

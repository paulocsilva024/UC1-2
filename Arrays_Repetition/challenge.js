const rl = require('readline-sync'); console.clear()
const exer = "\n======== Desafio — Sistema de Cadastro de Alunos ========\n"
/*Crie um programa que:

Solicite quantos alunos serão cadastrados.
Cadastre o nome de cada aluno em um array.
Ao final, exiba todos os nomes utilizando um for.
Informe também a quantidade total de alunos cadastrados.
*Desafio extra: após listar os alunos, pergunte ao usuário qual nome deseja procurar
e informe se ele está cadastrado utilizando um novo laço de repetição.*/
console.log(exer)
console.log('Quantos alunos serão cadastrados?')
let z = rl.questionInt()
let alunos = []
for (let i = 0; i < z; i++) {
    console.clear()
    console.log(exer)
    let aluno = rl.question(`Aluno ${i+1}: `)
    alunos.push(aluno)
}
console.clear()
console.log(exer)
console.log(`Lista dos alunos (${alunos.length}):\n`)
for (let i = 0; i < alunos.length; i++) {console.log(`${i+1} ${alunos[i]}`)}
rl.question()
console.clear()
console.log(exer)
//Ver se o nome está na lista
let seek = rl.question('Quer saber se tem cadastro? Pesquise pelo nome:\n')
let achou = false
for (let i = 0; i < alunos.length; i++) {if (seek = alunos[i]) {achou = true}}
console.log()
if (achou) {console.log(`Tem cadastro.`)} else {console.log(`Sem cadastro.`)}
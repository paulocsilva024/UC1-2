const rl = require('readline-sync')
let exer = ("\n============ Exercício 1 — Contagem ============\n")
console.log(exer)
//Mostrar números de 1 a 20
for (let i = 1; i <= 20; i++) {
    console.log(i)
}
rl.question()
console.clear()

exer = ("\n============ Exercício 2 — Contagem Regressiva ============\n")
console.log(exer)
for (let i = 20; i > 0; i--) {
    console.log(i)
}
rl.question()
console.clear()

exer = "\n============ Exercício 3 — Soma ============\n"
console.log(exer) 
console.log('Soma dos números de 01 a 100\n')  //Neste caso, poderia ser usada a formula_ S = n/2 * (a1 + an)
//let somaPA = 100/2 * (1 + 100)
//console.log(somaPA)
let sum = 0
for (let i = 1; i <= 100; i++){
    sum += i
}
console.log(sum)
rl.question()
console.clear()

exer = "\n============ Exercício 4 — Cadastro de Frutas ============\n"
let title = "\nVamos cadastrar 5 frutas a seguir\n"
let frutas = []
exer += title
console.log(exer)
for (let i = 0; i < 5; i++) {
    let fruta = rl.question(`Fruta ${i + 1}: `)
    frutas.push(fruta)
    console.clear()
    console.log(exer)
}
console.log(`Frutas cadastradas`)
for (let i = 0; i < 5; i++) {console.log(`${frutas[i]}`)}
rl.question()
console.clear()


exer = "\n============ Exercício 5 — Média da Turma ============\n"

//Exercícios de array e repetição
console.log(exer)

let notas = [] //Aqui ficarão armazenadas as notas
let soma = 0 //Aqui ficará a soma das notas

//A seguir vamos obter as notas e fazer a soma delas
for (let i = 0; i < 5; i++) {
    let nota = rl.questionFloat(`Nota ${i + 1}: `)
    notas.push(nota)
    soma += nota
}
//Inicializando as variáveis abaixo com a primeira nota em notas[]
let maxNota = notas[0]
let minNota = notas[0]

//Agora comparando cada nota e atribuindo às variáveis maxNota e minNota
//Sa o valor da nota for maior que o valor em 'maxNota', esta recebe o valor
//Sa o valor da nota for menor que o valor em 'minNota', esta recebe o valor
for (let i = 0; i < 5; i++) {
    if (notas[i] > maxNota) {maxNota = notas[i]}
    if (notas[i] < minNota) {minNota = notas[i]}
}
/*Aqui o cálculo da média usando os valores das variáveis
    media recebe a soma das notas dividido pela quant de notas somadas */
let media = soma / notas.length //.length traz o comprimento do array (elementos)
console.log(`
Nota média: ${media.toFixed(2)}
Maior nota: ${maxNota.toFixed(2)}
Menor nota: ${minNota.toFixed(2)}`)
rl.question()
console.clear()

exer = "\n============ Exercício 6 — Tabuada ============\n"
let go = true
let n
//Estrutura de repetição: do{}while()
do {//Faz tudo que segue...


    console.log(exer)
    n = rl.questionInt(`Tabuada do `)
    console.log()//Linha em branco

    for (let i = 1; i <= 12; i++) {
        console.log(`${i} x ${n} = ${i * n}`)
    }
    /*Aqui o cálculo é feito dentro do console.log() mostrando o 'i' que está,
    o 'n' digitado e o resultado.*/
    
    go = rl.keyInYNStrict('Continuar? ')//y (go = true) ou N (go = false)
    console.clear()


} while (go)//Enquanto 'go' é 'true' (verdadeiro)

exer = "\n======== Desafio — Sistema de Cadastro de Alunos ========\n"
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
for (let i = 0; i < alunos.length; i++) {if (seek === alunos[i]) {achou = true}}
console.log()
if (achou) {console.log(`Tem cadastro.`)} else {console.log(`Sem cadastro.`)}
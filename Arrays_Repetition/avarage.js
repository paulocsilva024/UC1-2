const rl = require('readline-sync'); console.clear()
//Exercícios de array e repetição
let excer = "\n======== Exercício 5 — Média da Turma ========\n"
console.log(excer)

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

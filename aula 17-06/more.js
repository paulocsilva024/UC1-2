const rl = require('readline-sync')
let idade = rl.questionInt('Qual a sua idade? ')
if (idade >= 18) {
    let cnh = rl.keyInYN('Possue CNH? ')
    if (cnh) {
        console.log('Pode dirigir!')
    } else {console.log('Precisa fazer a CNH!')}
} else {
    console.log('Menor de idade!')
}
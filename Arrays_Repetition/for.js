const rl = require('readline-sync')
// let i = rl.questionInt()
// for (i; i > 0; i--) {
//     console.log(`${i} - Hello world!!`)
// }
let n = rl.questionInt('Digite um valor: ')
console.log(`PA com ${n} elementos, razão 1`)
let soma = 0
for (let i = 1; i <= n; i++){
    soma += i
    console.log(`${soma}`)
}
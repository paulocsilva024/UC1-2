const rl = require('readline-sync')
// let i = rl.questionInt()
// for (i; i > 0; i--) {
//     console.log(`${i} - Hello world!!`)
// }
// let n = rl.questionInt('Digite um valor: ')
// console.log(`PA com ${n} elementos, razão 1`)
// let soma = 0
// for (let i = 1; i <= n; i++){
//     soma += i
//     console.log(`${soma}`)
// }
nomes = ['Paulo', 'Miriam', 'Laura Carolina', 'Ester','Daniel', 'Silvia']

//Adicionar itens no início de uma lista
nomes.unshift("Mariana")

for(let i in nomes) {
    if (nomes[i] !== 'Ester') {console.log(nomes[i])} else {console.log(nomes[i]); break}
}

let frutas = ['coco','caqui','morango']

frutas.forEach(function(fruta, indice) {
    console.log(`${indice + 1}ª - ${fruta}`)
})

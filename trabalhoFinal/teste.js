// const rl = require('readline-sync')
// console.log("\n============ Desafio — Pedra, Papel ou Tesoura ============\n")
// // Còdigo para gerar um número aleatório entre 0 e 3
// let pc = Math.floor(Math.random() * 5)
// console.log('[0] = Pedra\n[1] = Papel\n[2] = Tesoura\n')
// let user = rl.questionInt('Qual a sua jogada? ')
// console.log(`\nJoguei ${pc}\n`)
// if (user < 0 || user > 2) {
//     console.log('Valor inválido')
// } else {
//     if ((user === 0 && pc === 2) || (user === 1 && pc === 0) || (user === 2 && pc === 1)) {
//         console.log(`Está com sorte hoje, vc ganhou!!`)
//     } else if (user === pc) {
//         console.log('Empatou. Tente novamente.')
//     } else {
//         console.log('Você perdeu!')
//     }
// }
// pc = Math.random()
// console.log(pc)
// rl.question()
// console.clear()

const items = ['pocao', 'espada', 'pocao', 'escudo', 'escudo', 'mapa', 'espada', 'arco'];
const contagem = items.reduce((contador, item) => {
   contador[item] = (contador[item] || 0) + 1;
   return contador;
}, {});
console.log(contagem); // 
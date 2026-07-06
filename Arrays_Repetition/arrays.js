const rl = require('readline-sync')

let nomes = [
    "Miriam",
    "Ester",
    "Laura Carolina",
    "Paulo",
    "Daniel"
]
let caso = rl.questionInt('Digite o numero do índice ou zero pra sair: ')
while (caso > 0) {
    switch(caso){
        case 1: i = 0; break;
        case 2: i = 1; break;
        case 3: i = 2; break;
        case 4: i = 3; break;
        case 5: i = 4; break;
        default: 
    }
    if (caso > nomes.length){
        console.log(`A lista tem apenas ${nomes.length} nomes.`)
        rl.question()
        console.clear()
    }
    else {
        console.log(nomes[i])
        rl.question()
        console.clear()
    }
    caso = rl.questionInt('Digite o numero do índice ou zero pra sair: ')
}
// for (let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i])
// }
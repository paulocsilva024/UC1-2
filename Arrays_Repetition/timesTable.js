const rl = require('readline-sync'); console.clear()
//Exercícios de array e repetição
let exer = "\n======== Exercício 6 — Tabuada (1 ao 12) ========\n"
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

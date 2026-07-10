const rl = require('readline-sync'); console.clear()
let exer = ("\n============ Exercício 1 — Lista de Nomes ============\n")
console.log(exer)
//Mostrar lista com 5 nomes usando for...of
let nomes = ['Silvia', 'Paulo', 'Daniel', 'Miriam', 'Ester']
for (let nome of nomes) {
    console.log(nome)
}
rl.question()
console.clear()

exer = ("\n============ Exercício 2 — Índices ============\n")
//Percorra o mesmo array utilizando for...in
console.log(exer)
for (let i in nomes) {
    console.log(`${i} - ${nomes[i]}`)
}
rl.question()
console.clear()

exer = "\n============ Exercício 3 — Produtos ============\n"
//Cadastre cinco produtos utilizando push().
let title = "\nDigite 5 produtos.\n"
exer += title
console.log(exer)
let compras = []
for (let i = 1; i <= 5; i++) {

    let produto = rl.question(`Produto ${i}: `)
    compras.push(produto)
    console.clear()
    console.log(exer)
}
console.clear()
console.log(exer)
compras.forEach(
    (prod) => { console.log(prod); }
)
rl.question()
console.clear()

exer = "\n============ Exercício 4 — Procurando uma Fruta ============\n"
title = "\nVamos cadastrar 5 frutas a seguir\n"
let frutas = []
exer += title
console.log(exer)
for (let i = 0; i < 5; i++) {
    let fruta = rl.question(`Fruta ${i + 1}: `)
    frutas.push(fruta)
    console.clear()
    console.log(exer)
}
console.log(`Verifique se a fruta está cadastrada`)
let pesquisa = rl.question()
if (frutas.includes(pesquisa)) { console.log(`Tem cadastro`) } else { console.log(`Sem cadastro`) }
rl.question()
console.clear()

exer = "\n============ Exercício 5 — Removendo Elementos ============\n"
title = "\nDigite 5 cidades\n"
let cidades = []
exer += title
console.log(exer)
for (let i = 0; i < 5; i++) {
    let cidade = rl.question(`Cidade ${i + 1}: `)
    cidades.push(cidade)
    console.clear()
    console.log(exer)
}
cidades.splice(2, 1)
console.log(`Lista atualizada: ${cidades}`)

rl.question()
console.clear()

exer = "\n============ Exercício 6 — Lista Formatada ============\n"
//Criar array contendo 5 linguagens de programação.
let array = ['JavaScript', 'Python', 'Java', 'C#', 'PHP']
console.log(exer)
console.log(`Array = ['JavaScript', 'Python', 'Java', 'C#', 'PHP']`)
console.log(`Lista formatada com " | "\n
    ${array.join(' | ')}`)
rl.question()
console.clear()

exer = "\n============ Desafio — Gerenciador de Lista de Compras ============\n"
title = "\nDigite 5 produtos.\n"
exer += title
console.log(exer)
compras = []
for (let i = 1; i <= 5; i++) {

    let produto = rl.question(`Produto ${i}: `)
    compras.push(produto)
    console.clear()
    console.log(exer)
}
console.clear()
console.log(exer)
compras.forEach(
    (prod) => { console.log(prod); }
)
console.log(`Qual produto deseja remover?`)
let remov = rl.question()
compras.indexOf(remov)

i < 0 ? console.log(`Item não cadastrado.`) : compras.splice(compras.indexOf(remov), 1)

console.log(`Lista atualizada`)
for (let p of compras) { console.log(p) }


const rl = require('readline-sync')
console.log("============ Exercício 1 — Menu de Restaurante ============\n")

console.log('1 - Hambúrguer\n2 - Pizza\n3 - Cachorro-quente\n4 - Refrigerante\n5 - Sorvete')
let opt = rl.questionInt('Digite sua escolha: ')

switch (opt) {
    case 1: console.log('\nHambúrguer'); break;
    case 2: console.log('\nPizza'); break;
    case 3: console.log('\nCachorro-quente'); break;
    case 4: console.log('\nRefrigerante'); break;
    case 5: console.log('\nSorvete'); break;
    default: console.log('\nOpção inválida.');
}

rl.question()
console.clear()

let exer = ("\n============ Exercício 2 — Meses do Ano ============\n")
console.log(exer)
console.log('Digite o número do mês:')
const mes = rl.questionInt()
console.clear(); console.log(exer)
switch (mes) {
    case 1: console.log('1 - Janeiro'); break;
    case 2: console.log('2 - Fevereiro'); break;
    case 3: console.log('3 - Março'); break;
    case 4: console.log('4 - Abril'); break;
    case 5: console.log('5 - Maio'); break;
    case 6: console.log('6 - Junho'); break;
    case 7: console.log('7 - Julho'); break;
    case 8: console.log('8 - Agosto'); break;
    case 9: console.log('9 - Setembro'); break;
    case 10: console.log('10 - Outubro'); break;
    case 11: console.log('11 - Novembro'); break;
    case 12: console.log('12 - Dezembro'); break;
    default: console.log('Existem apenas 12 meses.');
}

rl.question()
console.clear()

exer = "\n============ Exercício 3 — Calculadora ============\n"
console.log(exer)
console.log('Escolha os dois números.')
let n1 = rl.questionFloat('Primeiro: ')
let n2 = rl.questionFloat('Segundo: ')
console.log('\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n')
let ope = rl.questionInt('Operation: ')
switch (ope){
    case 1: console.log('\nResultado: ' + (n1 + n2)); break;
    case 2: console.log('\nResultado: ' + (n1 - n2)); break;
    case 3: console.log('\nResultado: ' + (n1 * n2)); break;
    case 4:
        if (n2 !== 0) {
            console.log('\nResultado: ' + (n1 / n2));
        } else {console.log('\nResultado: não existe divisão por zero');}
        break;
    default: console.log('\nOpção inválida.');
}

rl.question()
console.clear()

exer = "\n============ Exercício 4 — Classificação de Linguagens ============\n"
console.log(exer)
console.log('1 - JavaScript\n2 - Python\n3 - Java\n4 - PHP')
opt = rl.questionInt('\nDigita aqui: ')
switch (opt) {
    case 1: console.log('\JavaScript → Front-end e Back-end'); break;
    case 2: console.log('\nPython → Dados e IA'); break;
    case 3: console.log('\nJava → Desktop e Back-end'); break;
    case 4: console.log('\nPHP → Desenvolvimento Web'); break;
    default: console.log('\nOpção inválida.');
}
rl.question()
console.clear()

exer = "\n============ Desafio — Calculadora de Áreas ============\n"
console.log(exer)
console.log('1 - Quadrado\n2 - Retângulo\n3 - Triângulo\n4 - Círculo')
let pic = rl.questionInt('\nDigita aqui: ')
let a, b, c
const PI = 3.1416
switch (pic) {
    case 1:
        a = rl.questionFloat('Comprimento do lado: ')
        if (a === 0){console.log('Não pode ser zero')}else{
        b = a**2
        console.log(`\nÁrea do quadrado: ${b}`);}
        break;
    case 2:
        a = rl.questionFloat('Base: ')
        b = rl.questionFloat('Altura: ')
        if (a === 0 || b === 0){console.log('Não pode ter zero')}else{
        c = a*b
        console.log(`\nÁrea do retângulo: ${c}`);}
        break;
    case 3:
        a = rl.questionFloat('Base: ')
        b = rl.questionFloat('Altura: ')
        if (a === 0 || b === 0){console.log('Não pode ter zero')}else{
        c = (a*b)/2
        console.log(`\nÁrea do triângulo: ${c}`);}
        break;
    case 4:
        a = rl.questionFloat('Digite o raio: ')
        if (a === 0){console.log('Não pode ser zero')}else{
        b = PI*(a**2)
        console.log(`\nÁrea do círculo: ${b}`);}
        break;
    default: console.log('\nOpção inválida.');
}
rl.question()
console.clear()
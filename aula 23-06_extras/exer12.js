const rl = require('readline-sync')
//Exercícios extras
let excer = "\n============ Exercício 12 — Login com Nível de Acesso ============\n"
let userL1 = 'basico'; let userL1pass = 123
let userL2 = 'medio'; let userL2pass = 456
let userL3 = 'admin'; let userL3pass = 789

console.log(excer)
console.log('Digite usuário, senha e nível de acesso.\n')
let user = rl.question('Login: ')
let pass = rl.question('Senha: ', {hideEchoBack: true})
let level = rl.questionInt('Nível de acesso: ')

console.clear()
console.log(excer)

if (user == userL1 && pass == userL1pass && level === 1) {
    console.log(`Nível 1 → Acesso básico`)
} else if (user == userL2 && pass == userL2pass && (level === 1 || level === 2)) {
    console.log(`Nível 2 → Acesso intermediário`)
} else if (user == userL3 && pass == userL3pass && (level === 1 || level === 2 || level === 3)) {
    console.log(`Nível 3 → Acesso administrador`)
} else {console.log('Usuário e/ou senha inválidos.')}
rl.question()
console.clear()
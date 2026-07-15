const rl = require("readline-sync");

// Trabalho Final — "A Jornada do Herói"//

// =========================
// CADASTRO DO HERÓI
// =========================

let nome = rl.question("Nome do heroi: ");
let classe = rl.question("Classe (Guerreiro, Mago ou Arqueiro): ");

let heroi = {
    nome: nome,
    classe: classe,
    vida: 0,
    ataque: 0,
    ouro: 20,
};

switch (classe.toLowerCase()) {
    case "guerreiro":
        heroi.vida = 120;
        heroi.ataque = 18;
        break;

    case "mago":
        heroi.vida = 80;
        heroi.ataque = 25;
        break;

    case "arqueiro":
        heroi.vida = 100;
        heroi.ataque = 20;
        break;

    default:
        console.log("Classe invalida.");
        heroi.classe = "Guerreiro";
        heroi.vida = 120;
        heroi.ataque = 18;
}

let inventario = [];

// =========================
// MISSOES
// =========================

let goblins = 0;

let missoes = [
    {
        nome: "Derrotar 3 Goblins",
        concluida: false
    },
    {
        nome: "Encontrar um Escudo",
        concluida: false
    }
];

// =========================
// INIMIGOS
// =========================

const inimigos = [
    {
        nome: "Goblin",
        vida: 30,
        ataque: 8
    },
    {
        nome: "Orc",
        vida: 50,
        ataque: 12
    },
    {
        nome: "Esqueleto",
        vida: 40,
        ataque: 10
    },
    {
        nome: "Dragao",
        vida: 100,
        ataque: 20
    }
];

// =========================
// FUNCOES
// =========================

function atacar(inimigo) {

    inimigo.vida -= heroi.ataque;

    console.log("Voce atacou o " + inimigo.nome);
}

function receberDano(dano) {

    heroi.vida -= dano;

    console.log("Voce recebeu " + dano + " de dano.");
}

function curar() {

    heroi.vida += 20;

    console.log("Voce descansou e recuperou 20 de vida.");
}

function mostrarStatus() {

    console.log("\n===== STATUS =====");
    console.log("Nome: " + heroi.nome);
    console.log("Classe: " + heroi.classe);
    console.log("Vida: " + heroi.vida);
    console.log("Ataque: " + heroi.ataque);
    console.log("Itens: " + inventario.length);

    let concluidas = 0;

    for (let missao of missoes) {
        if (missao.concluida) {
            concluidas++;
        }
    }

    console.log("Missoes concluidas: " + concluidas);
}

// =========================
// INVENTARIO
// =========================

function mostrarInventario() {

    console.log("\n===== INVENTARIO =====");

    if (inventario.length == 0) {
        console.log("Inventario vazio.");
    } else {

        for (let item of inventario) {
            console.log("- " + item);
        }
    }
}

// =========================
// COMBATE
// =========================

function combate(inimigoOriginal) {

    let inimigo = {
        nome: inimigoOriginal.nome,
        vida: inimigoOriginal.vida,
        ataque: inimigoOriginal.ataque
    };

    console.log("\nVoce encontrou um " + inimigo.nome);

    while (inimigo.vida > 0 && heroi.vida > 0) {

        console.log("\n1 - Atacar");
        console.log("2 - Fugir");

        let op = rl.questionInt("Escolha: ");

        if (op == 1) {

            atacar(inimigo);

            if (inimigo.vida > 0) {

                receberDano(inimigo.ataque);

            } else {

                console.log("Voce derrotou o " + inimigo.nome);

                if (inimigo.nome == "Goblin") {
                    goblins++;

                    if (goblins >= 3) {
                        missoes[0].concluida = true;
                    }
                }

                heroi.ouro += 10;
            }

        } else {

            console.log("Voce fugiu.");
            break;
        }
    }
}

// =========================
// EXPLORAR
// =========================

function explorar() {

    let evento = Math.floor(Math.random() * 5);

    if (evento == 0) {

        let sorteio = Math.floor(Math.random() * inimigos.length);

        combate(inimigos[sorteio]);

    } else if (evento == 1) {

        console.log("Voce encontrou um bau.");

        inventario.push("Espada");

        console.log("Espada adicionada (push).");

    } else if (evento == 2) {

        console.log("Voce encontrou uma pocao.");

        inventario.unshift("Pocao");

        console.log("Pocao adicionada no inicio (unshift).");

    } else if (evento == 3) {

        console.log("Nada aconteceu.");

    } else {

        console.log("Voce caiu em uma armadilha.");

        receberDano(10);
    }

    if (inventario.includes("Espada")) {
        inventario.splice(0, 0, "Mapa");
    }

    if (inventario.includes("Escudo")) {
        missoes[1].concluida = true;
    }
}

// =========================
// MENU
// =========================

let jogar = true;

while (jogar) {

    if (heroi.vida <= 0) {

        console.log("\nGAME OVER");
        break;
    }

    let todas = true;

    for (let missao of missoes) {

        if (!missao.concluida) {
            todas = false;
        }
    }

    if (todas) {

        console.log("\nPARABENS!");
        console.log("Voce concluiu a aventura!");
        break;
    }

    console.log("\n====== MENU ======");
    console.log("1 - Explorar");
    console.log("2 - Ver Status");
    console.log("3 - Inventario");
    console.log("4 - Descansar");
    console.log("5 - Missoes");
    console.log("6 - Remover ultimo item (pop)");
    console.log("7 - Remover primeiro item (shift)");
    console.log("8 - Encontrar Escudo");
    console.log("9 - Sair");

    let escolha = rl.questionInt("Escolha: ");

    switch (escolha) {

        case 1:
            explorar();
            break;

        case 2:
            mostrarStatus();
            break;

        case 3:
            mostrarInventario();
            break;

        case 4:
            if ((heroi.classe === 'guerreiro' && heroi.vida <= 100) ||
            (heroi.classe === 'mago' && heroi.vida <= 60) || 
            (heroi.classe === 'arqueiro' && heroi.vida <= 80)) {
            curar();} else {
            if (heroi.classe === 'guerreiro') {heroi.vida = 120}
            if (heroi.classe === 'mago') {heroi.vida = 80}
            if (heroi.classe === 'arqueiro') {heroi.vida = 100}
            }
            break;

        case 5:

            console.log("\nMISSOES");

            missoes.forEach(function(missao, indice) {

                console.log((indice + 1) + " - " +
                    missao.nome +
                    " - " +
                    (missao.concluida ? "Concluida" : "Pendente"));
            });

            break;

        case 6:

            if (inventario.length > 0) {
                console.log("Item removido: " + inventario.pop());
            }

            break;

        case 7:

            if (inventario.length > 0) {
                console.log("Item removido: " + inventario.shift());
            }

            break;

        case 8:

            inventario.push("Escudo");

            console.log("Voce encontrou um Escudo.");

            missoes[1].concluida = true;

            break;

        case 9:

            jogar = false;

            console.log("Fim do jogo.");

            break;

        default:
            console.log("Opcao invalida.");
    }
}
const rl = require("readline-sync");
// ==========================================
// TRABALHO FINAL — "A JORNADA DO HERÓI"
// ==========================================
// Importação da biblioteca obrigatória

// ==========================================
// 1. VARIÁVEIS E CONSTANTES DO HERÓI
// ==========================================
let heroi = {
    nome: "",
    classe: "",
    vida: 0,
    vidaMaxima: 0,
    ataque: 0,
};

// Inventário (inicialmente vazio)
let inventario = [];

// Missões (Array de objetos)
let missoes = [
    { nome: "Derrotar 3 Goblins", concluida: false },
    { nome: "Encontrar um Escudo", concluida: false }
];

// Contador de progresso para a missão de Goblins
let goblinsDerrotados = 0;

// Matriz de inimigos (exigência de Matrizes/Arrays)
const inimigosDisponiveis = [
    { nome: "Goblin", vida: 30, ataque: 8 },
    { nome: "Orc", vida: 50, ataque: 12 },
    { nome: "Esqueleto", vida: 40, ataque: 10 },
    { nome: "Dragão", vida: 100, ataque: 20 }
];

// ==========================================
// 2. CADASTRO DO PERSONAGEM (SWITCH / IF-ELSE)
// ==========================================
function cadastrarPersonagem() {
    console.log("========================================");
    console.log("       BEM-VINDO À JORNADA DO HERÓI     ");
    console.log("========================================");
    console.log("Digite o nome do seu herói:\n")
    heroi.nome = rl.question();
    let classeValida = false;
    while (!classeValida) {
        console.log("\nEscolha sua classe:");
        console.log("1 - Guerreiro (Vida: 120, Ataque: 18)");
        console.log("2 - Mago (Vida: 80, Ataque: 25)");
        console.log("3 - Arqueiro (Vida: 100, Ataque: 20)");
        let escolha = rl.question("Digite o número ou nome da classe: ").toLowerCase();
        // Utilização do switch para definir atributos iniciais
        switch (escolha) {
            case "1":
            case "guerreiro":
                heroi.classe = "Guerreiro";
                heroi.vida = 120;
                heroi.vidaMaxima = 120;
                heroi.ataque = 18;
                classeValida = true;
                break;
            case "2":
            case "mago":
                heroi.classe = "Mago";
                heroi.vida = 80;
                heroi.vidaMaxima = 80;
                heroi.ataque = 25;
                classeValida = true;
                break;
            case "3":
            case "arqueiro":
                heroi.classe = "Arqueiro";
                heroi.vida = 100;
                heroi.vidaMaxima = 100;
                heroi.ataque = 20;
                classeValida = true;
                break;
            default:
                console.log("Classe inválida! Tente novamente.");
        }
    }
    console.log(`\nHerói ${heroi.nome} criado com sucesso como ${heroi.classe}!`);
    rl.question("\nPressione ENTER para iniciar a aventura...");console.clear();
}
// ==========================================
// 3. FUNÇÕES DO SISTEMA DE COMBATE E DANO
// ==========================================
function receberDano(dano) {
    heroi.vida -= dano;
    if (heroi.vida < 0) {
        heroi.vida = 0;
    }
    console.log(`Você sofreu ${dano} de dano! Vida atual: ${heroi.vida}/${heroi.vidaMaxima}`);
}
function curar(quantidade) {
    heroi.vida += quantidade;
    if (heroi.vida > heroi.vidaMaxima) {
        heroi.vida = heroi.vidaMaxima;
    }
    console.log(`Você recuperou ${quantidade} de vida! Vida atual: ${heroi.vida}/${heroi.vidaMaxima}`);
};let missed = 1
function combater(inimigoBase) {
    // Clona o objeto inimigo para não alterar o original da matriz
    let inimigo = { ...inimigoBase }; console.clear();
    console.log(`\n--- UM INIMIGO SURGIU! Um perigoso ${inimigo.nome} apareceu! ---`);
    // Loop de combate utilizando while
    while (inimigo.vida > 0 && heroi.vida > 0) {
        console.log(`\nInimigo: ${inimigo.nome} (Vida: ${inimigo.vida})`);
        console.log(`Herói: ${heroi.nome} (Vida: ${heroi.vida}/${heroi.vidaMaxima})`);
        console.log("1 - Atacar");
        console.log("2 - Fugir");
        let acao = rl.question("O que deseja fazer? ");
        if (acao === "1") {
            // Turno do Jogador
            console.log(`\nVocê ataca o ${inimigo.nome}!`);
            inimigo.vida -= heroi.ataque;
            console.log(`Você causou ${heroi.ataque} de dano.`);
            // Verifica se o inimigo morreu
            if (inimigo.vida <= 0) {
                console.log(`\nVocê derrotou o ${inimigo.nome}!`);
                // Progresso da Missão dos Goblins
                if (inimigo.nome === "Goblin") {
                    goblinsDerrotados++;
                    console.log(`Goblins derrotados para a missão: ${goblinsDerrotados}/3`);
                    if (goblinsDerrotados === 3) {
                        missoes[0].concluida = true;
                        console.log("✨ MISSÃO CONCLUÍDA: Derrotar 3 Goblins! ✨");
                    }
                }
                break;
            }
            // Turno do Inimigo
            console.log(`O ${inimigo.nome} contra-ataca!`);
            receberDano(inimigo.ataque);
        } else if (acao === "2") {
            console.log("\nVocê conseguiu escapar com segurança!");
            break;
        } else {
            if (missed <= 1) {
                console.log("\nOpção inválida! O inimigo aproveita sua hesitação para atacar.")
                receberDano(inimigo.ataque)
                missed++
            } else {
                heroi.vida = 0
                break
            }
        }
    }
}
// ==========================================
// 4. MANIPULAÇÃO DO INVENTÁRIO (REQUISITOS DE ARRAY)
// ==========================================
function exibirInventario() {
    console.log("\n=== SEU INVENTÁRIO ===");
    if (inventario.length === 0) {
        console.log("Seu inventário está vazio.");
        return;
    }
    // Uso de for...of para mostrar itens
    let index = 1;
    for (let item of inventario) {
        console.log(`${index} - ${item}`);
        index++;
    }
    // Opções de gerenciamento para usar as funções obrigatórias do array
    console.log("\nDeseja gerenciar seus itens?");
    console.log("1 - Usar Poção (Remover do inventário)");
    console.log("2 - Descartar primeiro item (shift)");
    console.log("3 - Descartar último item (pop)");
    console.log("4 - Inserir item no início (unshift)");
    console.log("5 - Voltar ao menu");
    let op = rl.question("Opção: ");
    if (op === "1") {
        let posPotion = inventario.indexOf("Poção");
        if (posPotion !== -1) {
            // Uso de splice para remover a poção de uma posição específica
            inventario.splice(posPotion, 1);
            curar(40);
        } else {
            console.log("Você não tem nenhuma Poção no inventário!");
        }
    } else if (op === "2") {
        if (inventario.length > 0) {
            // Uso do shift
            let removido = inventario.shift();
            console.log(`Você descartou o primeiro item: ${removido}`);
        } else {
            console.log("Inventário vazio.");
        }
    } else if (op === "3") {
        if (inventario.length > 0) {
            // Uso do pop
            let removido = inventario.pop();
            console.log(`Você descartou o último item: ${removido}`);
        } else {
            console.log("Inventário vazio.");
        }
    } else if (op === "4") {
        let itemExtra = rl.question("Qual item deseja inserir no início do inventário? ");
        // Uso do unshift
        inventario.unshift(itemExtra);
        console.log(`${itemExtra} foi adicionado no início.`);
    }
}
// ==========================================
// 5. EXPLORAÇÃO (EVENTOS ALEATÓRIOS)
// ==========================================
function explorar() {
    console.log("\nExplorando a região...");
    rl.question("ENTER para explorar mais rapido...");
    // Gera valor aleatório entre 0 e 4
    let chance = Math.floor(Math.random() * 5);
    if (chance === 0) {
        // Encontrou um inimigo aleatório
        let numInimigo = Math.floor(Math.random() * inimigosDisponiveis.length);
        combater(inimigosDisponiveis[numInimigo]);
        rl.question();console.clear();
    } else if (chance === 1) {
        console.log("\nVocê encontrou um baú misterioso!");
        // Uso do push para colocar no fim do array
        inventario.push("Poção");
        console.log("Você ganhou uma: Poção!");
        rl.question();console.clear();
    } else if (chance === 2) {
        console.log("\nVocê encontrou um Escudo jogado no chão!");
        inventario.push("Escudo");
        // Verifica se completou a segunda missão
        if (!missoes[1].concluida) {
            missoes[1].concluida = true;
            console.log("✨ MISSÃO CONCLUÍDA: Encontrar um Escudo! ✨");
        }
        rl.question();console.clear();
    } else if (chance === 3) {
        console.log("\nUgh! Você pisou em uma armadilha de espinhos!");
        receberDano(15);
        rl.question();console.clear();
    } else {
        console.log("\nVocê caminhou por um tempo, mas a área parece tranquila. Nada aconteceu.");
        rl.question();console.clear();
    }
}
// ==========================================
// 6. EXIBIÇÃO DE STATUS E MISSÕES
// ==========================================
function mostrarStatus() {
    console.log("\n========================================");
    console.log(`            STATUS DO HERÓI            `);
    console.log("========================================");
    console.log(`Nome:      ${heroi.nome}`);
    console.log(`Classe:    ${heroi.classe}`);
    console.log(`Vida:      ${heroi.vida}/${heroi.vidaMaxima}`);
    console.log(`Ataque:    ${heroi.ataque}`);
    console.log(`Itens no Inventário: ${inventario.length}`);
    console.log("----------------------------------------");
    console.log("Progresso das Missões:");
    // Uso do forEach para percorrer as missões
    missoes.forEach((missao) => {
        let statusMissao = missao.concluida ? "[✔] Concluída" : "[ ] Em andamento";
        console.log(`- ${missao.nome}: ${statusMissao}`);
    });
    console.log("========================================");
}
// ==========================================
// 7. VERIFICAÇÃO DE VITÓRIA
// ==========================================
function verificarVitoria() {
    let todasConcluidas = true;
    // Uso do for...in para percorrer os índices do array de missões
    for (let indice in missoes) {
        if (!missoes[indice].concluida) {
            todasConcluidas = false;
        }
    }
    return todasConcluidas;
}
// ==========================================
// LOOP PRINCIPAL DO JOGO (MENU COM WHILE)
// ==========================================
function iniciarJogo() {
    cadastrarPersonagem();
    let jogando = true;
    while (jogando && heroi.vida > 0) {rl.keyInPause();console.clear();
        console.log("\n=== MENU PRINCIPAL ===");
        console.log("1 - Explorar");
        console.log("2 - Ver Status");
        console.log("3 - Inventário");
        console.log("4 - Descansar (Recuperar vida)");
        console.log("5 - Sair");
        let escolha = rl.question("O que deseja fazer? ");
        if (escolha === "1") {
            explorar();
        } else if (escolha === "2") {
            mostrarStatus();
        } else if (escolha === "3") {
            exibirInventario();
        } else if (escolha === "4") {
            console.log("\nVocê monta um acampamento e descansa um pouco...");
            curar(30);
        } else if (escolha === "5") {
            console.log("\nVocê desistiu da jornada e fugiu para um lugar seguro.");
            jogando = false;
            break;
        } else {
            console.log("\nOpção inválida!");
        }
        // Verifica se o herói morreu após a exploração/combates
        if (heroi.vida <= 0) {
            console.log("\n========================================");
            console.log("               GAME OVER                ");
            console.log("        Seu herói tombou em combate...  ");
            console.log("========================================");
            jogando = false;
            break;
        }
        // Verifica se concluiu todas as missões para vencer
        if (verificarVitoria()) {
            console.log("\n========================================");
            console.log("              PARABÉNS!                 ");
            console.log("      Você concluiu a aventura!         ");
            console.log("========================================");
            jogando = false;
            break;
        }
    }
}
// Execução inicial
iniciarJogo();

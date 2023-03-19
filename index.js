const prompt = require('prompt-sync')();

const personagens = new Array();

class Personagem {
    constructor(nome,raca, classe, nivel) {
        this.nome = nome;
        this.raca = raca;
        this.classe = classe;
        this.nivel = nivel;
    }
}
 
function criarPersonagem() {
    const nome = prompt("Informe o nome: ");
    const raca = prompt("Informe a raça: ");
    const classe = prompt("Informe a classe: ");
    const nivel = 1;
    const personagem = new Personagem(nome, raca, classe, nivel);
    personagens.push(personagem);
}

function listarPersonagens() {
    if (personagens.length === 0) {
        console.warn("A lista de personagens esta vazia!");
        return; 
    }

    personagens.forEach((personagem, index) => {
        console.log(`${index} Nome:  ${personagem.nome} - Raça: ${personagem.raca} - classe: ${personagem.classe} - Nivel: ${personagem.nivel}`);
    });
}

function excluirPersonagem() {
    if (personagens.length === 0) {
        console.warn("Não há personagens a serem deletados!");
        return; 
    }

    const qtdPersonagens = personagens.length;

    listarPersonagens();

    const nomeDoPersonagem = prompt("Informe o nome do personagem: ");

    personagens.forEach((personagem, index) => {
        if (personagem.nome === nomeDoPersonagem) {
            personagens.splice(index,1);
            console.log(`Personagem ${nomeDoPersonagem} excluido com sucesso!`);
        }
    });

    if (qtdPersonagens === personagens.length) {
        console.warn(`Personagem ${nomeDoPersonagem} não encontrado!`);
    }
}

function menu() {
    let opcao;

    do {
        console.clear();
        console.log("--------------RPG----------------");
        console.log("Escolha uma opção:");
        console.log("1 - Criar Ficha");
        console.log("2 - Escolher Ficha");
        console.log("3 - Excluir Ficha");
        console.log("0 - Sair");
        console.log("---------------------------------");
        opcao = parseInt(prompt("Informe uma opção valida: "));
    
        switch(opcao) {
            case 0:
                console.clear();
                console.log("------------Até logo Aventureiro!--------------------");
            break;
            case 1:
                console.clear();
                console.log("------------Criação de Personagem----------");
                criarPersonagem();
                prompt("Aperte algum botão para continua! ");
            break;
            case 2: 
                console.clear();
                console.log("------------Escolha de Personagem---------");
                listarPersonagens();
                prompt("Aperte algum botão para continuar! ");
            break;
            case 3:
                console.clear();
                console.log("------------Exclusão de Personagem--------");
                excluirPersonagem();
                prompt("Aperte algum botão para continuar! ");
            break
            default:
                console.clear();
                console.warn("------------Opção invalida--------");
                prompt("Aperte algum botão para continuar!");
            break;
        }
    
    } while(opcao != "0");
}

menu();
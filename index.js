const prompt = require('prompt-sync')();

// entidades
class Classe {
    constructor(nome, habilidades, pontosVida, pontosMagia ) {
        this.nome = nome;
        this.habilidades = habilidades;
        this.pontosVida = pontosVida;
        this.pontosMagia = pontosMagia;
    }
}

class Raca {
    constructor(nome, habilidades, atributos) {
        this.nome = nome;
        this.habilidades = habilidades;
        this.atributos = atributos;
    }
}

class Personagem {
    constructor(nome,raca, classe, nivel) {
        this.nome = nome;
        this.raca = raca;
        this.classe = classe;
        this.nivel = nivel;
    }
}

//repositórios
const personagens = new Array();

const classes = new Array(
    new Classe(
        nome = 'Guerreiro',
        habilidades = ['Proficiência em arma','Coração de aço', 'Pulso de cura'],
        pontosVida = 800,
        pontosMagia = 200
    ),
    new Classe(
        nome = 'Mago',
        habilidades = ['Proficiência arcana','Coração de cristal', 'Pulso de mana'],
        pontosVida = 200,
        pontosMagia = 800
    ),
    new Classe(
        nome = 'Ladino',
        habilidades = ['Furtividade','Locomoção sombria', 'Envenenar arma'],
        pontosVida = 500,
        pontosMagia = 500
    ),
);

const racas = new Array(
    {
        nome: 'Gnomo',
        habilidades: ['Escalar', 'Invisibilidade', 'Ilusão simples'],
        atributos: {
            destreza: 2,
            inteligencia: 3
        }
    },
    new Raca(
        'Humano',
        ['Labia','Encorajar', 'Fugir'],
        {
            forca: 1,
            destreza: 1,
            vitalidade: 1,
            inteligencia: 1,
            vontade: 1,
        }      
    ),
    new Raca(
        nome = 'Elfo',
        habilidades = ['Graça da floresta','Afinidade magica', 'Recuperação de mana'],
        atributos = {
            inteligencia: 2,
            destreza: 2,
            vontade: 1
        }
    ),
    new Raca(
        nome = 'Anão',
        habilidades = ['Identificar pedra','Imbatível', 'Corpo de pedra'],
        atributos = {
            forca: 1,
            vitalidade: 4
        }
    ),
);
 
// métodos de raças, classes e personagens
function listarClasses() {
    classes.forEach((classe, index) => {
        console.log(`${index+1} - Classe: ${classe.nome} - Pontos de Vida: ${classe.pontosVida} - Pontos de Magia: ${classe.pontosMagia} `);
    });
}

function listarRacas() {
    racas.forEach((raca, index) => {
        let atributos = Object.entries(raca.atributos).map((atributo)=> {
             return atributo[0]+' + '+atributo[1]+' ';
        });
        console.log(`${index+1} - Raça: ${raca.nome} - atributos: ${atributos.toString()}`);
    });
}

function escolherRaca(numeroRaca) {
    return racas.find((raca, index) => index === numeroRaca-1);
}

function escolherClasse(numeroClasse) {
    return classes.find((classe, index) => index === numeroClasse-1);
}

function criarPersonagem() {
    const nivel = 1;
    let raca = null;
    let classe = null;

    do {
        console.log("---------Escolha a sua raça!----------");

        listarRacas();

        let numeroDaRaca = parseInt(prompt(":")); 
        raca = escolherRaca(numeroDaRaca);

        if (!raca) {
            console.clear();
        }
        
    } while(!raca);
    
    do {
        console.log("---------Escolha a sua Classe!----------");

        listarClasses();

        let numeroDaClasse = parseInt(prompt(":")); 
        classe = escolherClasse(numeroDaClasse);

        if (!classe) {
            console.clear();
        }
        
    } while(!classe);

    const nome = prompt("Informe o nome: ");
    const personagem = new Personagem(nome, raca, classe, nivel);
    personagens.push(personagem);
}

function listarPersonagens() {
    if (personagens.length === 0) {
        console.warn("A lista de personagens esta vazia!");
        return; 
    }

    personagens.forEach((personagem, index) => {
        console.log(`${index} Nome:  ${personagem.nome} - Raça: ${personagem.raca.nome} - classe: ${personagem.classe.nome} - Nivel: ${personagem.nivel}`);
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

//menu do jogador
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
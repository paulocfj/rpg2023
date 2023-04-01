import { Personagem } from '../modelo/personagem.js';
import { ClasseRepositorio } from '../repositorio/classe.repositorio.js';
import { PersonagemRepositorio } from '../repositorio/personagem.repositorio.js';
import { RacaRepositorio } from '../repositorio/raca.repositorio.js';

import  promptSync  from 'prompt-sync';

const  prompt =  promptSync();
const racaRepositorio = new RacaRepositorio();
const classeRepositorio = new ClasseRepositorio();
const personagemRepositorio = new PersonagemRepositorio();

export const menuPersonagem = () => {
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
                criarFicha();
            break;
            case 2: 
                escolherFicha();
            break;
            case 3:
                excluirPersonagem();
            break
            default:
                console.clear();
                console.warn("------------Opção invalida--------");
                prompt("Aperte algum botão para continuar!");
            break;
        }
    
    } while(opcao != "0");
}

const criarFicha = () => {
    const novoPersonagem = new Personagem();

    console.clear();
    console.log("------------Criação de Personagem----------");

    novoPersonagem.raca = informeRaca();
    novoPersonagem.classe = informeClasse();
    novoPersonagem.nome = prompt("Informe o nome: ");

    personagemRepositorio.criarPersonagem(novoPersonagem);

    prompt("\nAperte algum botão para continua! ");
}

const  escolherFicha = () => {
    console.clear();
    console.log("------------Escolha de Personagem---------");

    const personagens =  personagemRepositorio.listarPersonagens();

    if (personagens.length > 0) {
        personagens.forEach((personagem) => {
            console.log(`ID: ${personagem.id} - Nome:  ${personagem.nome} - Raça: ${personagem.raca.nome} - classe: ${personagem.classe.nome} - Nivel: ${personagem.nivel}`);
        });
    } else {
        console.log("A lista de personagens esta vazia!");
    }   

    prompt("\nAperte algum botão para continuar! ");
}

const excluirPersonagem = () => {
    console.clear();
    console.log("------------Exclusão de Personagem--------");

    const personagens = personagemRepositorio.listarPersonagens();
   
    if (personagens.length > 0) {
        personagens.forEach((personagem) => {
            console.log(`ID: ${personagem.id} - Nome:  ${personagem.nome} - Raça: ${personagem.raca.nome} - classe: ${personagem.classe.nome} - Nivel: ${personagem.nivel}`);
        })
        const nomeDoPersonagem = prompt("Informe o nome do personagem: ");
        const personagemExcluido = personagemRepositorio.excluirPersonagem(nomeDoPersonagem);

        personagemExcluido
            ? console.log(`\nPersonagem ${nomeDoPersonagem} excluído com sucesso!`)
            : console.log(`\nPersonagem ${nomeDoPersonagem} não encontrado!`);

    } else {
        console.log("\nA lista de personagens esta vazia!");
    }
    
    prompt("\nAperte algum botão para continuar! ");
}

const informeRaca = () => {
    let raca = null;

    do {
        console.log("---------Escolha a sua raça!----------");

        const racas = racaRepositorio.listarRacas();
        racas.forEach((raca) => {
            let atributos = Object.entries(raca.atributos).map((atributo)=> {
                return atributo[0]+' + '+atributo[1]+' ';
            });

            console.log(`ID: ${raca.id} - Raça: ${raca.nome} - atributos: ${atributos.toString()}`);
        });

        if (racas) {
            const idRaca = parseInt(prompt(":")); 
            raca = racaRepositorio.escolherRacaPorId(idRaca);

            if (!raca) {
                console.clear();
            }
        }      
    } while(!raca);

    return raca;
}

const informeClasse = () => {
    let classe = null;

    do {
        console.log("---------Escolha a sua Classe!----------");

        const classes = classeRepositorio.listarClasses();

        classes.forEach((classe) => {
            console.log(`ID: ${classe.id} - Classe: ${classe.nome} - Pontos de Vida: ${classe.pontosVida} - Pontos de Magia: ${classe.pontosMagia} `);
        });

        if (classes) {
            const idClasse = parseInt(prompt(":")); 
            classe = classeRepositorio.escolherClassePorId(idClasse);
    
            if (!classe) {
                console.clear();
            }    
        }
    } while(!classe);

    return classe;
}
import { ClasseServico} from '../servico/classe.servico.js';
import { RacaServico } from '../servico/raca.servico.js';
import { PersonagemServico } from '../servico/personagem.servico.js';
import { Personagem } from '../entidade/personagem.js';
import  promptSync  from 'prompt-sync';

const racaServico = new RacaServico();
const classeServico = new ClasseServico();
const  prompt =  promptSync();

export const menuPersonagem = () => {
    const persongemServico = new PersonagemServico();
    
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
                const novoPersonagem = new Personagem();

                console.clear();
                console.log("------------Criação de Personagem----------");

                novoPersonagem.raca = informeRaca();
                novoPersonagem.classe = informeClasse();
                novoPersonagem.nome = prompt("Informe o nome: ");

                persongemServico.criarPersonagem(novoPersonagem);

                prompt("Aperte algum botão para continua! ");
            break;
            case 2: 
                console.clear();
                console.log("------------Escolha de Personagem---------");
                persongemServico.listarPersonagens();
                prompt("Aperte algum botão para continuar! ");
            break;
            case 3:
                console.clear();
                console.log("------------Exclusão de Personagem--------");
                persongemServico.listarPersonagens();
                
                if (persongemServico.existePersonagens()) {
                    const nomeDoPersonagem = prompt("Informe o nome do personagem: ");

                    persongemServico.excluirPersonagem(nomeDoPersonagem);
                }
                
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

const informeRaca = () => {
    let raca = null;

    do {
        console.log("---------Escolha a sua raça!----------");

        racaServico.listarRacas();

        let numeroDaRaca = parseInt(prompt(":")); 
        raca = racaServico.escolherRaca(numeroDaRaca);

        if (!raca) {
            console.clear();
        }
        
    } while(!raca);

    return raca;
}

const informeClasse = () => {
    let classe = null;

    do {
        console.log("---------Escolha a sua Classe!----------");

        classeServico.listarClasses();

        let numeroDaClasse = parseInt(prompt(":")); 
        classe = classeServico.escolherClasse(numeroDaClasse);

        if (!classe) {
            console.clear();
        }
        
    } while(!classe);

    return classe;
}
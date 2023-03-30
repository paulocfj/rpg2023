import { Personagem } from '../entidade/personagem.js';
import { personagens } from '../repositorio/personagem.repositorio.js';

export class PersonagemServico {
    criarPersonagem(personagem) {
        const novoPersonagem = new Personagem(personagem.nome, personagem.raca, personagem.classe);
        personagens.push(novoPersonagem);
    }
    
    listarPersonagens() {
        if (!this.existePersonagens()) {
            console.warn("A lista de personagens esta vazia!");
            return; 
        }
        
        personagens.forEach((personagem, index) => {
            console.log(`${index} Nome:  ${personagem.nome} - Raça: ${personagem.raca.nome} - classe: ${personagem.classe.nome} - Nivel: ${personagem.nivel}`);
        });
    }
    
    excluirPersonagem(nomeDoPersonagem) {
        if (personagens.length === 0) {
            console.warn("Não há personagens a serem deletados!");
            return; 
        }
    
        const qtdPersonagens = personagens.length;    

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

    existePersonagens() {
        return personagens.length > 0;
    }
}
import { personagens } from './data/personagem.data.js';
import { Personagem } from '../modelo/personagem.js';

export class PersonagemRepositorio {
    id = 1;

    criarPersonagem(personagem) {
        const novoPersonagem = new Personagem(personagem.nome, personagem.raca, personagem.classe);
        personagens.push({id: this.id++, ...novoPersonagem});
    }
    
    listarPersonagens() {       
        return personagens;       
    }
    
    excluirPersonagem(nomeDoPersonagem) {
        if (personagens.length === 0) {
            return false; 
        }  

        let index = 0;
       
        for(const personagem of personagens) {
            if (personagem.nome === nomeDoPersonagem) {
                personagens.splice(index,1);
                return true;
            }

            index++;
        }

        return false;
    }
    
    buscarPersonagemPorId(id) {
        return personagens.find((personagem) => personagem.id === id );
    }

    existePersonagens() {
        return personagens.length > 0;
    }
}

//console.warn("A lista de personagens esta vazia!");
// console.log(`${index} Nome:  ${personagem.nome} - Raça: ${personagem.raca.nome} - classe: ${personagem.classe.nome} - Nivel: ${personagem.nivel}`);

//console.log(`Personagem ${nomeDoPersonagem} excluido com sucesso!`);
// console.warn(`Personagem ${nomeDoPersonagem} não encontrado!`);
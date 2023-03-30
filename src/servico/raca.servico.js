import { racas } from '../repositorio/raca.repositorio.js';

export class RacaServico {
    escolherRaca(numeroRaca) {
        return racas.find((raca, index) => index === numeroRaca-1);
    }
    
    listarRacas() {
        racas.forEach((raca, index) => {
            let atributos = Object.entries(raca.atributos).map((atributo)=> {
                 return atributo[0]+' + '+atributo[1]+' ';
            });
            console.log(`${index+1} - Raça: ${raca.nome} - atributos: ${atributos.toString()}`);
        });
    }
    
}
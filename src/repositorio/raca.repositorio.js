import { racas } from './data/raca.data.js';

export class RacaRepositorio {
    escolherRacaPorId(id) {
        return racas.find((raca) => raca.id === id);
    }
    
    listarRacas() {
        return racas;
    }
}

//console.log(`${index+1} - Raça: ${raca.nome} - atributos: ${atributos.toString()}`);
/*
racas.forEach((raca, index) => {
    let atributos = Object.entries(raca.atributos).map((atributo)=> {
         return atributo[0]+' + '+atributo[1]+' ';
    });
    
});*/
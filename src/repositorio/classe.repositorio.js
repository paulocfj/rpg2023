import { classes } from './data/classe.data.js';

export class ClasseRepositorio {
    escolherClassePorId(id) {
        return classes.find((classe) => classe.id === id);
    }

    listarClasses() {
        return classes;
    }
}

//console.log(`${index+1} - Classe: ${classe.nome} - Pontos de Vida: ${classe.pontosVida} - Pontos de Magia: ${classe.pontosMagia} `);
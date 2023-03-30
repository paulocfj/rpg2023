import { classes } from '../repositorio/classe.repositorio.js';

export class ClasseServico {
    escolherClasse(numeroClasse) {
        return classes.find((classe, index) => index === numeroClasse-1);
    }


    listarClasses() {
        classes.forEach((classe, index) => {
            console.log(`${index+1} - Classe: ${classe.nome} - Pontos de Vida: ${classe.pontosVida} - Pontos de Magia: ${classe.pontosMagia} `);
        });
    }
    
}
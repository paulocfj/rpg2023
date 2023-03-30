import { Classe } from '../entidade/classe.js';

export const classes = new Array(
    new Classe(
        'Guerreiro',
        ['Proficiência em arma','Coração de aço', 'Pulso de cura'],
        800,
        200
    ),
    new Classe(
        'Mago',
        ['Proficiência arcana','Coração de cristal', 'Pulso de mana'],
        200,
        800
    ),
    new Classe(
        'Ladino',
        ['Furtividade','Locomoção sombria', 'Envenenar arma'],
        500,
        500
    ),
);
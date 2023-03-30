import { Raca } from "../entidade/raca.js";

export const racas = new Array(
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
       'Elfo',
        ['Graça da floresta','Afinidade magica', 'Recuperação de mana'],
        {
            inteligencia: 2,
            destreza: 2,
            vontade: 1
        }
    ),
    new Raca(
        'Anão',
        ['Identificar pedra','Imbatível', 'Corpo de pedra'],
        {
            forca: 1,
            vitalidade: 4
        }
    ),
);
const prompt = require('prompt-sync')();

let opcao;

do {
    //Menu
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
            console.clear();
            console.log("------------Criação de Personagem----------");
            prompt("Aperte algum botão para continuar: ");
        break;
        case 2: 
            console.clear();
            console.log("------------Escolha de Personagem---------");
            prompt("Aperte algum botão para continuar: ");
        break;
        case 3:
            console.clear();
            console.log("------------Exclusão de Personagem--------");
            prompt("Aperte algum botão para continuar: ");
        break
        default:
            console.clear();
            console.log("------------Opção invalida--------");
            prompt("Aperte algum botão para continuar: ");
        break;
    }

} while(opcao != "0");

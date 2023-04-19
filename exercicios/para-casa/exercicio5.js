const prompt = require("prompt-sync")({sigint:true});

do {
    let numeroInserido = parseInt(prompt('Entre com um número: '));

    if (numeroInserido % 2 == 0){
        console.log('O número é par.')
    } else{
        console.log('O número é ímpar.')
    }

    } while (numeroInserido != 0)
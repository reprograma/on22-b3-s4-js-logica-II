const { rejects } = require('assert');
const { resolve } = require('path');
const rl = require('readline');

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

function pegarEntradaUsuario() { 
    return new Promise(resolve => {
    prompt.question("Digite um número ou digite 0 (zero) para sair: \n",
(respostaPrompt) => {
    const resposta = parseInt(respostaPrompt)

    if (resposta == 0) {
        console.log("O número é par.");
    }
    if (resposta % 2 == 0 && resposta !== 0) {
        console.log("Até a próxima");
    }
    if(resposta % 2 == 1) {
        console.log("O número é ímpar");
    }
        resolve(resposta);
    

})})
}
    (async function () {
    let respostaPromise

    do {
        respostaPromise = await pegarEntradaUsuario()
    }while( respostaPromise != 0)

    prompt.close()
})()
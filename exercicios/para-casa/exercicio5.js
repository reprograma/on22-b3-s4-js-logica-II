const rl = require('readline')

/**
 * Crie um `do while` que peça para o usuário digitar um número.Se o número digitado for par, imprima no console amensagem _"O número é par"_. Caso contrário, imprima _"O número é ímpar"_.

    **O loop deve continuar executando até que o usuário digite o número 0.**
 */
const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

function pegarEntradaUsuario(){
    return new Promise(resolve => {
    prompt.question("Digite um número ou digite 0 para sair:\n",(respostaPrompt)=>{
        const resposta = parseInt(respostaPrompt)
        if(resposta == 0){
            console.log("Até a próxima!")
        }
        if(resposta %2 == 0 && resposta != 0){
            console.log("O número é par")
        }
        if(resposta %2 ==1){
            console.log("O número é impar")
        }
        resolve(resposta)
    })})
}

(async function () {
    let respostaPromise

    do {
        respostaPromise = await pegarEntradaUsuario()
    }while( respostaPromise != 0)

    prompt.close()
})()
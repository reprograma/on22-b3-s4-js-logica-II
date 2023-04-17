let msg, num_digitado = 0, entrada;


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

do {
rl.question('Digite um número para a verificação ou 0 para sair:\n', (num_digitado) => {
    entrada = num_digitado;
    rl.close();
})
console.log("xisde")

verificaImpar(entrada)

} while (num_digitado !== 0)


function verificaImpar(arg) {
    let numero_verificacao = parseInt(arg);
    if (numero_verificacao === 0) {
        msg = "Saindo..\nTenha uma ótima semana!";
        console.log(msg);
        rl.close();
    } else if (numero_verificacao % 2 === 0) {
        msg = `O número ${numero_verificacao} é Par!\n`;
        console.log(msg);
        rl.close();
    } else if (numero_verificacao % 2 === 1) {
        msg = `O número ${numero_verificacao} é Impar!\n`;
        console.log(msg);
        rl.close();
    }
}
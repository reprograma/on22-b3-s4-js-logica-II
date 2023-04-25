let num_digitado;
let msg;

var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

async function fazReadline() {
  rl.setPrompt("Insira um número para verificar ou insira 0 para sair:\n");
  rl.prompt();

  return new Promise((resolve) => {
    rl.on("line", (line) => {
      num_digitado = parseInt(line);
      verificaImpar(line);
      if (num_digitado === 0) {
        rl.close();
        resolve();
      } else {
            rl.prompt();
      }
    });
  });
}



function verificaImpar(arg) {
  let numero_verificacao = parseInt(arg);
  if (numero_verificacao === 0) {
    msg = "Saindo..\nTenha uma ótima semana!";
    console.log(msg);
  } else if (numero_verificacao % 2 === 0) {
    msg = `O número ${numero_verificacao} é Par!\n`
    console.log(msg);
  } else if (numero_verificacao % 2 === 1) {
    msg = `O número ${numero_verificacao} é Ímpar!\n`
    console.log(msg);
  }
}

(async function () {
    do {
      await fazReadline();
    } while (num_digitado !== 0);
  })();

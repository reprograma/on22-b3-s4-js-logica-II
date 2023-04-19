const readline = require ('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num;

const façaUmaPergunta = () => {
  rl.question('Digite um número: ', (resposta) => {
    num = parseInt(resposta);

    if (num === 0) {
      rl.close();
      return;
    }
    if (num % 2 === 0) {
      console.log('O número é par');
    } else {
      console.log('O número é ímpar');
    }

    façaUmaPergunta();
  });
};

façaUmaPergunta();


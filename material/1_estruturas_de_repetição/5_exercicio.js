//
//

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numero;

do {
  readline.question("Digite um número:", (numero) => {
    if (numero % 2 == 0) {
      console.log(`${numero} é par!`);
    } else {
      console.log(`${numero} é par!`);
    } readline.close();
  });
} while (numero != 0);
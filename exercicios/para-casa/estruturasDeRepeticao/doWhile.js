// let i = 0;
// let readline = require('readline');
// let rl = readline.createInterface(
//   process.stdin,
//   process.stdout
// );

// rl.question('Digite um numero ', (number) => {
//   console.log(number);
//   if (number % 2 == 0) {
//     console.log("O número é par");
//   } else {
//     console.log("O número é ímpar");
//   }
//   rl.close();
// });

// do {
//   console.log(rl.question);
//     i++;  
// } while (rl.question =! 0);


// Imprimindo no navegador, pois ainda não consegui finalizar com o node.
let number;
do {
  number = parseInt(prompt("Digite um número (digite 0 para sair): "));
  if (number % 2 == 0) {
    console.log("O número é par");
  } else {
    console.log("O número é ímpar");
  }
} while (number !== 0);
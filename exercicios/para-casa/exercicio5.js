const input = require("prompt-sync")();

let n = null;

do {
  n = parseInt(input("Digite um número: "));

  if (n === 0) {
    return;
  }

  if (n % 2 === 0) {
    console.log("Esse número é par");
  } else {
    console.log("Esse número é impar");
  }
} while (n !== 0);

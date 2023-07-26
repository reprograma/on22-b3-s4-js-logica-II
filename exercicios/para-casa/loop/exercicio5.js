let numero;

do {
  numero = parseInt(prompt("Digite um número (digite 0 para sair):"));

  if (numero === 0) {
    console.log("Programa encerrado.");
    break;
  }

  if (numero % 2 === 0) {
    console.log("O número é par.");
  } else {
    console.log("O número é ímpar.");
  }
} while (true);

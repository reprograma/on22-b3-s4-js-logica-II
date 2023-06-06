let numero = 1;

do {
 let numero = parseInt(prompt("Digite um número: ou 0 para sair):"));
 
if (numero !== 0) { 
 if (numero % 2 === 0) { 
console.log("O número é par");
  } else {
  
console.log("O número é ímpar");
  }
}
} while (numero !== 0);
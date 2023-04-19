// Atividade  1 

const numeros = [9, 18, 27, 36, 45];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// Atividade 2 

const animal = {
    nome: "King",
    cor: "Marron",
    idade: 2,
    nomeDono: "Gracielle"
  };

  for (let propriedade in animal) {
    console.log(propriedade + ": " + animal[propriedade]);
  }

  // Atividade 3

const frutas = ["banana", "mexirica", "laranja", "maça", "uva"];

for (let fruta of frutas) {
  console.log(fruta);
} 

// Atividade 4 

const numeros = [2, 4, 6, 8, 10];
let i = 0;

while (i < numeros.length) {
  console.log(numeros[i]);
  i++;
}

// Atividade 5 

let numero;

do {
  numero = parseInt(prompt("Digite um número:"));

  if (numero % 2 === 0) {
    console.log("O número é par");
  } else {
    console.log("O número é ímpar");
  }
} while (isNaN(numero));

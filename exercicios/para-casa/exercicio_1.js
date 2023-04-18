//Estrutura de repetição 

//Exercicio 1
let numeros = [3, 26, 60, 66, 14];

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
};

//Exercicio 2
let animal = {
    nome: "Paçoca",
    cor: "Marron",
    nome_dono: "Heitor",
};
 
for (let propriedade in animal) {
    console.log(`${propriedade} : ${animal[propriedade]}`);
};

//Exercicio 3
let listaDeCores = ['preto', 'verde', 'amarelo', 'vermelho', 'roxo'];

for (let cores of listaDeCores) {

    console.log(cores);
};

//Exercicio 4
let listaDeNumeros = [3, 23, 4, 88, 100];
let i = 0;

while (i < listaDeNumeros.length) {
    console.log(listaDeNumeros[i]);
     i++;
};

   
// Exercicio 5
let num;

do {
  num = parseInt(prompt("Digite um número:"));

  if (num % 2 === 0) {
    console.log("É par.");
  } else {
    console.log("É ímpar.");
  }

} while (num > 0);

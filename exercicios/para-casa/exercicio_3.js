//Manipulação de arrays

//Ecercicio 1
const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

//push ()
const numeroNovo = numeros.push(100, 200);
console.log(numeros);

//shift()
const removeNumero = numeros.shift();
console.log(numeros);

//unshift()
const novoNumero = numeros.unshift(5);
console.log(numeros);

//forEach()
numeros.forEach((element) => {
  console.log(element);
});

//slice()
const posicao = numeros.slice(2, 5);
console.log(posicao);

const novaVariavel = [45, 67, 89 ];

//filter()
const maiorQue = numeros.filter((numero) => {
  return numero > 50;
});
console.log(maiorQue);

const novaVariavel2 = [67, 89];

//find()
const numeroPar = numeros.find((numero) => {
  return numero %2 === 0;
});
console.log(numeroPar);   

//map()
const dobroDoNumero = numeros.map((numero) => {
  return numero * 2;
});
console.log(dobroDoNumero);

const novaVariavel3 = [20,  46, 90, 134, 178,  24, 68, 112, 156, 180];

//Desafio Extra
const removeUltimoNumero = numeros.pop();
console.log(removeUltimoNumero);

const filtrar = numeros.filter((numero) => {
  return numero % 2 === 0;
});
console.log(filtrar);

const parVezesDois = filtrar.map((numero)=>{return numero*2});
console.log(parVezesDois);
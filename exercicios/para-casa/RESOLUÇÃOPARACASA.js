//Exercício 1:

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  //Imprime 1,2,3,4,5

  //Exercício 2:

const animal = {
    nome: 'Frederico',
    cor: 'preto',
    nome_dono: 'Gabriela',
  }; 

  
for (let key in animal) {
    console.log(`${key}: ${animal[key]}`);
  }//Imprime nome: Frederico;Cor: preto; nome_dono: Gabriela;

//Exercício 3:


const frases = ['A vida é um morango', 'Quero coca cola', 'Está frio', 'Não fui eu !', 'Só sei que nada sei, rapá!'];

 for (let frases1 of frases) {
  console.log(frases1);
} //Imprime A vida é um morango; Quero coca cola; Está Frio, Não fui eu !, Só sei que nada sei, rapá!;


//Exercício 4:**


const num = [1,2,3,4,5];
let x = 0;

while (x < 5) {
  console.log(x);
  x++;
}//Imprime 0, 1, 2, 3, 4, 5;


 //### Objetos
//Exercício 1:
 

const pessoa = {
nome: 'Gabriela',
idade: 28,
saudação: function(){
console.log(`Olá, ${this.nome}!`);
},
};
      
pessoa.saudação(); //Imprime Olá,Gabriela!

 //Exercício 2:


const calculadora = {
soma: function (num1, num2){
  let resultado = num1 + num2
  return resultado
  },

subtração: function (numero1,numero2) {
  let resultado2 = numero1 - numero2
  return resultado2

}
 
}

console.log(calculadora.soma(5, 12))
console.log(calculadora.subtração(3,5)) //Imprime 17, -2


//Manipulação de arrays
// Use o método push() para adicionar os números 100 e 200 no final do array.
const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
numeros.push(100,200) //Imprime [10, 23, 45, 67, 89, 12, 34, 56, 78, 90 , 100, 200];

console.log(numeros)

// Use o método shift() para remover o primeiro elemento do array.
numeros.shift(10) //Imprime [ 23. 45, 67, 89, 12, 34, 56, 78, 90, 100, 200];

console.log(numeros)

//Use o método unshift() para adicionar o número 5 no início do array.

numeros.unshift(5) //Imprime [5, 23, 45, 67, 89, 12, 34, 56, 78, 90, 100, 200 ];

console.log(numeros)

// Use o método forEach() para imprimir cada número do array no console.
numeros.forEach //Imprime [ 5, 23, 45, 67, 89, 12, 34, 56, 78, 90, 100 , 200];

console.log(numeros)

//Use o método slice() para criar um novo array com os números entre as posições 2 e 5 (inclusive). Imprima o novo array no console.
console.log(numeros.slice(2,6)); //Imprime [45, 67, 89, 12]
 
//Use o método filter() para criar um novo array com os números maiores que 50. Imprima o novo array no console.

const result = numeros.filter(numeros => numeros > 50);

console.log(result); //Imprime [67, 89, 56, 78, 90, 100, 200];

// Use o método find() para encontrar o primeiro número par do array. Imprima o número encontrado no console.
const numeros1 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
const found = numeros1.find(numeros1 => numeros1 % 2 == 0 );

console.log(found);
// Imprime 10


// Use o método map() para criar um novo array com o dobro de cada número. Imprima o novo array no console.

const arr1 = [100, 200, 300, 400];

arr1.map(x => [x * 2]);
console.log(arr1)
// Imprime [200], [400], [600], [800]


//Desafio extra:

//1. Use os métodos encadeados para remover o último elemento do array, em seguida, filtrar os números pares e, 
//por fim, criar um novo array com os números pares multiplicados por 2. Imprima o novo array no console.

let listaNumerica = [3, 10, 23, 45, 99, 250];


console.log(listaNumerica); // [3, 10, 23, 45, 99, 250];

let listaNumericaPop = listaNumerica.pop();

console.log(listaNumerica); // [3, 10, 23, 45, 99]

console.log(listaNumericaPop); // '250'

let par = x => x % 2 === 0

const pares = listaNumerica.filter(par)

console.log(pares) //Imprime [10], já que o número 250 foi excluído antes;
let novaListaNumerica = [pares * 2];
console.log(novaListaNumerica) //Imprime 20; 

//Classes Exercício 1:

class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
      
  }
  falar(mensagem){
    console.log(`Olá meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
  }
 
}
         
const pessoa1 = new Pessoa("Gabriela",28)

pessoa1.falar() //Imprime "Olá meu nome é Gabriela e eu tenho 28 anos"


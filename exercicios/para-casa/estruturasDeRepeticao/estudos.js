let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
// console.log(i);


// let i = 0;
//para i++, imprima i, enquanto i for menor que 5
// do {
//   console.log(i);
//   i++;
// } while (i < 5);


// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }


// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
// };
// // para cada chave em person, imprima a chave e o valor na posição dessa chave(seu respectivo valor)
// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }


// const colors = ['red', 'green', 'blue'];
// // imprima cada cor dentro de colors
// for (let color of colors) {
//   console.log(color);
// }


// quando i for igual a 3, encerre o loop.Sem o break ele vai rodar até o valor de i ser 4.
// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//       break;
//     }
//     console.log(i);
// }


// Quando o valor de i for igual a 2, pule para o próximo número
// for (let i = 0; i < 5; i++) {
//     if (i === 2) {
//       continue; // continuar em português
//     }
//     console.log(i);
// }

// const array1 = [1, 2, 3];
// const array2 = new Array(4, 5, 6);
// console.log(array2);


// const array = [1, 2, 3];
// console.log(array[0]); // Output: 1
// console.log(array[1]); // Output: 2
// console.log(array[2]); // Output: 3


// const array = [1, 2, 3];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// let i = 0;

// while (i < array.length) {
//   console.log(array[i]);
//   i++;
// }

// for (const element of array) {
//   console.log(element);
// }
// for (const element in array) {
//     console.log(element); // com o in ele imprimiu em cor diferente
// }
// array.forEach((element) => {
//   console.log(element);
// });

//Pop
// const array = [1, 2, 3];
// console.log(array);
// const removedElement = array.pop(); // removedElement = 3, array = [1, 2]
// console.log(array);
// console.log(removedElement);

// Push
// const array = [1, 2];
// console.log(array);
// const newLength = array.push(3, 4); // newLength = 4, array = [1, 2, 3, 4]
// console.log(array);
// console.log(newLength);


//Shift
// const array = [1, 2, 3];
// console.log(array);
// const removedElement = array.shift(); // removedElement = 1, array = [2, 3]
// console.log(array);
// console.log(removedElement)


//unshift
// const array = [1, 2];
// console.log(array);
// const newLength = array.unshift(3, 4); // newLength = 4, array = [3, 4, 1, 2]
// console.log(array);
// console.log(newLength);


//ForEach
// const array = [1, 2, 3];
// array.forEach((element) => {
//   console.log(element);
// });


// sort
// let arr = ['d', 'b', 'a', 'c'];
// let arr2 = [78,21,02,1,0,3, 5]
// arr.sort();
// arr2.sort();
// console.log(arr); // ['a', 'b', 'c', 'd']
// console.log(arr2);


// slice
// let arr = ['a', 'b', 'c', 'd'];
// let sliced = arr.slice(1, 3);
// console.log(sliced); // não entendi bem


//filter
// const numbers = [1, 2, 3, 4, 5];

// const filteredNumbers = numbers.filter((number) => {
//   return number % 2 === 0;
// });

// console.log(filteredNumbers); // [2, 4]


// find
// const numbers = [1, 2, 3, 4, 5];

// const foundNumber = numbers.find((number) => {
//   return number > 3;
// });

// console.log(foundNumber); // 4


// map
// const numbers = [1, 2, 3, 4, 5];

// const mappedNumbers = numbers.map((number) => {
// return number * 2;
// });

// console.log(mappedNumbers); // [2, 4, 6, 8, 10]


// objeto
// const pessoa = {
//     nome: 'João',
//     idade: 30,
//     profissao: 'Programador',
//   };
  
// console.log(pessoa.nome); // "João"
// console.log(pessoa['idade']); // 30

// pessoa.nome = 'Maria';
// pessoa['idade'] = 31;
// console.log(pessoa); // { nome: "Maria", idade: 31, profissao: "Programador" }
// console.log(pessoa.nome);
// console.log(pessoa['idade']);
// pessoa.cidade = 'São Paulo';
// console.log(pessoa); // { nome: "Maria", idade: 31, profissao: "Programador", cidade: "São Paulo" }
// delete pessoa.cidade;
// console.log(pessoa); // { nome: "Maria", idade: 31, profissao: "Programador" }


// const pessoa = {
//     nome: 'João',
//     idade: 30,
//     profissao: 'Programador',
//     saudar: function () {
//       console.log(`Olá, meu nome é ${this.nome} e eu sou um ${this.profissao}.`);
//     },
// };
  
// pessoa.saudar(); // "Olá, meu nome é João e eu sou um Programador."


// classes
// class Animal {
//     constructor(nome, especie) {
//       this.nome = nome;
//       this.especie = especie;
//     }
  
//     andar() {
//       console.log(`${this.nome} está andando.`);
//     }
// }
// const cachorro = new Animal('Fido', 'cachorro');
// console.log(cachorro.nome); // "Fido"
// console.log(cachorro.especie); // "cachorro"
// cachorro.andar(); // "Fido está andando."

// class Cachorro extends Animal {
//     constructor(nome) {
//       super(nome, 'cachorro');
//     }
  
//     latir() {
//       console.log(`${this.nome} está latindo.`);
//     }
//   }
  
  // const rex = new Cachorro('Rex');
  // console.log(rex.nome);
  // console.log(rex.especie); // "cachorro"
  // rex.andar(); // "Rex está andando."
  // rex.latir(); // "Rex está latindo."
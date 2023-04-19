// Estruturas de Repeticao
// Exercício 1


const numeroos = [1,2,3,4,5]
for(let i = 0; i<numeroos.length; i++){
    console.log(numeroos[i]);
}


//Exercício 2


const animal ={
    Nome: 'Soso',
    Cor: 'Preto e branco',
    Nome_dono : 'Gessica'
};
for (let propriedade in animal){
    console.log(propriedade + ':' + animal[propriedade])
}


// Exercício 3

const strings = ['Caqui', 'Tangerina', 'Uva', 'Sapoti', 'Manga'];

for(const string of strings){
    console.log(string)
}


//Exercício 4


const numeross = [1, 2, 3, 4, 5];
let i = 0

while(i < numeross.lenght){
    console.log(numeross[i])
    i++;
}

//Exercício 5

/**do {
    let input = prompt("Digite um número (ou 0 para sair):");
    let num = parseInt(input)

    if(num === 0){
        break;
    } 
    if (num % 2 ===0){
        console.log("O número é par")
    }else{
        console.log("O número é ímpar")
    }
        
    
} while (true)
*/

// Objetos

//Exercício 1


let pessoa = {
    nome : "Gessica",
    idade : 30,
    saudacao : function(){
        return "Olá, meu nome é" + this.nome + "."
    }
}
console.log(pessoa.saudacao())

//Exercicio 2

const calculadora = {
    soma: function(num1, num2){
        return num1 + num2
    },
    subtracao : function(num1, num2){
        return num1 - num2;
    }
};
const resultadoSoma = calculadora.soma(10, 10)
console.log(resultadoSoma)
const resultadoSubtracao = calculadora.subtracao(20, 10)
console.log(resultadoSubtracao)

//Manipulação de Arrays
const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

numeros.push(100);
numeros.push(200);
console.log(numeros);

numeros.shift();
console.log(numeros);

numeros.unshift(5);
console.log(numeros);

numeros.forEach(numero => console.log(numero));

const novoArray = numeros.slice(2, 6);
console.log(novoArray);

const nMaioresQue50 = numeros.filter(numero => numero > 50)
console.log(nMaioresQue50);

const primeiroNumPar = numeros.find(numero => numero % 2 == 0);
console.log(primeiroNumPar);

const novoArrayDobro = numeros.map(numero => numero * 2);
console.log(novoArrayDobro);

// Desafio Extra : N consgui fazer ;(

//Classes

//Exercício 1

class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    falar (){
        console.log (`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    }
}

const gess = new Pessoa("Gessica" , 30);
gess.falar();

// Exercício 2 


class Animal{
  constructor(name){
    this.name = name;
  }
}

class Cachorro extends Animal {
    latir(){
        console.log("Au au!");
    }
}
const animale = new Animal("Soso");
console.log(animale.name);

const cachorro = new Cachorro ("Tili")
console.log(cachorro.name);
cachorro.latir();
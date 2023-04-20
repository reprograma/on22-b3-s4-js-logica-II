//ESTRUTURAS DE REPETIÇÃO
// Exercício 01
let listaNum = [1, 8, 10, 24, 28] 
    for(let i = 0; i < listaNum.length; i++)

        console.log(listaNum[i])
    

//Exercício 02
 let animal = {
    nome : 'Nutella',
    idade : '2',
    nome_dona : 'Joana',
 };

 for (let propriedade in animal){
    console.log(animal[propriedade])
 }
    

//Exercício 03
let listaViagem = ["toalha","escova de dente","roupas","tênis","perfume"];

    for (let lista of listaViagem) { 
    console.log(lista)
}

//Exercício 04
let listaNum2 = [562, 101, 44, 2, 30];
let i = 0;
while( i < listaNum2.length){
    
    console.log(listaNum2[3])
 i++
}


//OBJETOS
//Exercício 01
let pessoa = {
    nome: "Sheila.",
    idade: "25",
    saudacao:function(mensagem){
        console.log(`${mensagem} ${this.nome}`)
        
    }
}
   
    pessoa.saudacao("Tenha um ótimo dia,")

//Exercício 02
const calculadora = {
    soma : function (num1, num2){
        return num1 + num2;
    },
    subtracao : function (num1, num2){
        return num1 - num2;
    }
    }

 console.log(calculadora.soma(80,59));
 console.log(calculadora.subtracao(5,8))


// // MANIPULAÇÃO DE ARRAYS
// Push
const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];{
numeros.push(100, 200);

console.log(numeros);
}

//Shift
const numeros1 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90]
    numeros1.shift()

    console.log(numeros1)

// Unshift
const numeros2 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90]
    numeros2.unshift(5)

//     console.log(numeros2)

//ForEach
const numeros3 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90]
    numeros3.forEach((numeros3) => {
        console.log(numeros3);
    })

//Slice
const numeros4 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];{
       let sliced = numeros4.slice(2, 6);
       console.log(sliced)
  }  
    
//Filter
const numeros5 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

const filteredNumeros5 = numeros5.filter((numero) => {
    return numero > 50;
})
    
console.log(filteredNumeros5);

//Find
const numeros6 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
const foundNumber = numeros6.find((number) => {
    return number % 2 == 0;

})

console.log(foundNumber);

//Map
const numeros7 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
let mappedNumeros = numeros7.map((numeros) => {
    return numeros * 2;
});

console.log(mappedNumeros);

// CLASSES
// Exercício 01
class Pessoa {
    constructor(nome, idade) {
        this.nome = "Julio";
        this.idade = 35;
}
    fale() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
}
  }


  const Julio = new Pessoa(`Julio`,35)
  Julio.fale();

  
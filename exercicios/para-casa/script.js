///Exercicio1
const numeros = [10, 7, 13, 27, 50]
for (let n = 0; n < numeros.length; n++) {
  console.log(numeros[n])
  
}


///Exercicio2
const animal = {
    nome: "Lucky",
    cor: "preto",
    idade: 7,
    meu_dono: "Maria Eduarda",
  };
  
  for (const propriedade in animal){
      
    console.log(`${propriedade} : ${animal[propriedade]}`)
  
  }


  ///Exercicio3
const Acessorios = ["colares, brincos, chapéus, pulseiras, cachecóis"]
for (const itens of Acessorios) {
  console.log(itens)
  
}



///Exercicio4
const numerosArr = [10, 17, 33, 29, 52]

let arr = 0;

while (arr < numerosArr.length) {
  console.log(numerosArr[arr])
  
  arr++;

}



///Exercicio6 
const pessoa = {
    nome: "Antonieta",
    idade: 27,
    saudacao: function(saudacoes){
      console.log(`${saudacoes} ${this.nome}`)
    }
  
  }
  pessoa.saudacao("Olá, seja bem vinda")
  


  ///Exercicio7
const calculadora = {
    soma: function(num1, num2){
      return num1+num2
    },
    
    subtracao: function(num3, num4){
      return num3-num4
    }
    
    };
    
    console.log(calculadora.soma(4, 7));
    console.log(calculadora.subtracao(15, 5));

    

    ///Exercicio8
const arrNumeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90]

arrNumeros.push(100, 200)

arrNumeros.shift(arrNumeros)

arrNumeros.unshift(5)

arrNumeros.forEach((num) =>{
  console.log(num)
});

let slice1 = arrNumeros.slice(2, 5)
console.log(slice1);

arrNumeros.filter((arrNumeros) =>{
  if (arrNumeros > 50) {
   console.log([arrNumeros]) 
  }

});

const numeroPar = numeros.find(numero => numero % 2 === 0)

console.log(numeroPar);

/* Creio que ta mostrando 10 no console pelo fato de ter removido o 10 usando shift, e adicionado o 5 usando o método unshift, certo? */
const multiplicacaoArr = arrNumeros.map(numero => numero * 2)

console.log(multiplicacaoArr);

/*Exercicio Extra */
const ExtraNumbers = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];

const NewArr = ExtraNumbers.slice(0, ExtraNumbers.length -1)
 
.filter(numPar => numPar % 2 === 0)
.map(numPar => numPar * 2);

console.log(NewArr)



/////ExercicioClasses 
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    falar() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    }
  }
  
  const pessoa1 = new Pessoa("Maria Eduarda", 27)
  pessoa1.falar();
  
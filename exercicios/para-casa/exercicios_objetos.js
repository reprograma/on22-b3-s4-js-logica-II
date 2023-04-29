/** Exercício 1 - Crie um objeto chamado `pessoa` com as seguintes propriedades:

- nome: uma string com o nome da pessoa;
- idade: um número com a idade da pessoa;
- saudacao(): uma função que retorna uma saudação com o nome da pessoa */

let pessoa = {
    nome: "Elisa",
    idade: 19,
    saudacao:function(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos, prazer em te conhecer!`);
    }
}

pessoa.saudacao(); 

/** Crie um objeto chamado calculadora com as seguintes propriedades:

- soma: uma função que recebe dois números como parâmetros e retorna a soma deles;

- subtracao: uma função que recebe dois números como parâmetros e retorna a subtração
    do segundo do primeiro.
  Teste as funções soma() e subtracao() imprimindo osresultados no console. */

let calculadora = {
    soma:function (n1, n2){
        let resultadoSoma = n1 + n2
        return resultadoSoma
    },
    subtracao:function (n1, n2){
        let resultadoSubtracao = n2 - n1
        return resultadoSubtracao
    }   

    
}

console.log("O resultado da soma é:", calculadora.soma(12, 19))
console.log("O resultado da subtração é:", calculadora.subtracao(53, 95))
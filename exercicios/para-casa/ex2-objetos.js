//----OBJETOS------
//Exercício 1: Crie um objeto chamado `pessoa` com as seguintes propriedades:
// - nome: uma string com o nome da pessoa;
// - idade: um número com a idade da pessoa;
// - saudacao(): uma função que retorna uma saudação com o nome da pessoa.
const pessoa = {
    nome: 'João',
    idade: 30,
    saudar:function () {
      console.log(`Olá, meu nome é ${pessoa.nome} e tenho ${pessoa.idade} anos.`);
    }
  };
  pessoa.saudar(); // "Olá, meu nome é João e tenho 30 anos."

 
 //Exercício 2: Crie um objeto chamado calculadora com as seguintes propriedades:
 //- soma: uma função que recebe dois números como parâmetros e retorna a soma deles;
 //- subtracao: uma função que recebe dois números como parâmetros e retorna a subtração do segundo do primeiro.
 //- Teste as funções soma() e subtracao() imprimindo osresultados no console.


 //------PENDENTE QUESTAO 2-------------//
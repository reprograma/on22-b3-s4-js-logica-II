/* **Exercício 1:**

**Instruções:**
Crie um objeto chamado `pessoa` com as seguintes propriedades:

- nome: uma string com o nome da pessoa;
- idade: um número com a idade da pessoa;
- saudacao(): uma função que retorna uma saudação com o nome da pessoa.

  _Teste a função saudacao() imprimindo a saudação no console._ */

  const pessoa = {
    nome:"Sarah Bernardino.",
    idade:24,
  
    saudacao:function(mensagem){
        console.log(`${mensagem} ${this.nome}`)
    }
  
    }
    
  pessoa.saudacao("olá seja bem vinda")
  
  /***Exercício 2:**
  
  **Instruções:** Crie um objeto chamado calculadora com as seguintes propriedades:
  
  - soma: uma função que recebe dois números como parâmetros e retorna a soma deles;
  
  - subtracao: uma função que recebe dois números como parâmetros e retorna a subtração
   do segundo do primeiro.
    Teste as funções soma() e subtracao() imprimindo osresultados no console.
  
  _Dica: Para criar as funções, basta declará-las como propriedades do objeto, assim 
  como foi feito no Exercício 1. Lembre-se de utilizar os parâmetros na definição das 
  funções e de retornar o resultado dos cálculos._*/
  
  
  const calculadora = {
    soma: function(num1, num2){
        return num1 + num2;
    },
    subtracao: function(num1, num2){
        return num2 - num1;
    }
  }
  
  somar = calculadora.soma(6, 9)
  console.log(somar);
  subtrair = calculadora.subtracao(45, 122)
  console.log(subtrair);
  
  
  console.log("essa parte foi...")
  
  
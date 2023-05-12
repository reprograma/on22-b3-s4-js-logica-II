//**Exercício 2:**

//**Instruções:** Crie um objeto chamado calculadora com as seguintes propriedades:

//- soma: uma função que recebe dois números como parâmetros e retorna a soma deles;

//- subtracao: uma função que recebe dois números como parâmetros e 
//retorna a subtração do segundo do primeiro.
//  Teste as funções soma() e subtracao() imprimindo osresultados no console.

//_Dica: Para criar as funções, basta declará-las como propriedades do objeto, 
//assim como foi feito no Exercício 1.
 //Lembre-se de utilizar os parâmetros na definição das funções 
 //e de retornar o resultado dos cálculos._

 const calculadora = {
    somar: function(n1,n2) {
        console.log(n1+n2)
    }
    ,subtracao: function (n3,n4) {
        console.log(n4 - n3)
    }
 }

calculadora.somar(3,5)
calculadora.subtracao(5,8)
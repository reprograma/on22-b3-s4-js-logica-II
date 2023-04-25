/* 
**Exercício 2:**

**Instruções:** Crie um objeto chamado calculadora com as seguintes propriedades:

- soma: uma função que recebe dois números como parâmetros e retorna a soma deles;

- subtracao: uma função que recebe dois números como parâmetros e retorna a subtração do segundo do primeiro.
  Teste as funções soma() e subtracao() imprimindo osresultados no console.

_Dica: Para criar as funções, basta declará-las como propriedades do objeto, assim como foi feito no Exercício 1. Lembre-se de utilizar os parâmetros na definição das funções e de retornar o resultado dos cálculos._
*/

const calculadora = {
    soma(num1, num2) {
        resultado = num1 + num2;
        return resultado;    

    },
    subtracao(num1, num2) {
        resultado = num1 - num2;
        return resultado;

    }
}
console.log(`A soma é: ${calculadora.soma(2, 2)}`)
console.log(`A subtração é: ${calculadora.subtracao(3, 1)}`)
/**Crie um objeto chamado calculadora com as seguintes propriedades:

- soma: uma função que recebe dois números como parâmetros e retorna a soma deles;

- subtracao: uma função que recebe dois números como parâmetros e retorna a subtração do segundo do primeiro.
  Teste as funções soma() e subtracao() imprimindo os resultados no console.
*/

const calculadora = {
    soma:(num1, num2)=> num1 + num2,
    subtracao:(num1, num2)=> num1 - num2
}

const resultadoSoma = calculadora.soma(10,8)
const resultadoSubtracao = calculadora.subtracao(87,3)

console.table({resultadoSoma, resultadoSubtracao})

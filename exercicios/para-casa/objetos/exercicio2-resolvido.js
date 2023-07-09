/**Crie um objeto chamado calculadora com as seguintes propriedades:

- soma: uma função que recebe dois números como parâmetros e retorna a soma deles;

- subtracao: uma função que recebe dois números como parâmetros e retorna a subtração do segundo do primeiro.
  Teste as funções soma() e subtracao() imprimindo os resultados no console.
*/

const calculadora = {
    soma: (n1, n2) => n1 + n2,
    subtracao: (n1, n2) => n1 - n2,
}

const resultadoDaSoma = calculadora.soma(22, 30)
const resuldadoDaSubtracao = calculadora.subtracao(18, 3)

console.log({ resultadoDaSoma, resuldadoDaSubtracao })
/** **Exercício 2:**

**Instruções:** Crie um objeto chamado calculadora com as seguintes propriedades:

- soma: uma função que recebe dois números como parâmetros e retorna a soma deles;

- subtracao: uma função que recebe dois números como parâmetros e retorna a subtração do segundo do primeiro.
  Teste as funções soma() e subtracao() imprimindo osresultados no console. */

  const calculadora = {
    soma:()=> (numero1 , numero2) => numero1 + numero2,
    subtracao:(numero1 , numero2) => numero1 - numero2
   }
    
    const resultadoSoma = calculadora.soma(24,6)
    const resultadoSubtracao = calculadora.subtracao(23-10)
  
  console.log(resultadoSoma)
  console.log(resultadoSubtracao)
  
  console.log(resultadoSoma)
  console.log(resultadoSubtracao)
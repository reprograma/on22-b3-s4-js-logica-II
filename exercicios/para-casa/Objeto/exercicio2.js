/**Crie um objeto chamado calculadora com as seguintes propriedades:
- soma: uma função que recebe dois números como parâmetros e retorna a soma deles;
- subtracao: uma função que recebe dois números como parâmetros e retorna a subtração do segundo do 
primeiro.
Teste as funções soma() e subtracao() imprimindo osresultados no console.
Dica: Para criar as funções, basta declará-las como propriedades do objeto, assim como foi feito 
no Exercício 1. Lembre-se de utilizar os parâmetros na definição das funções e de retornar o resultado 
dos cálculos.*/

const calculadora = {
    mais: function(number1, number2){
        let somaCalculo = number1 + number2;
        return somaCalculo
    },
    menos: function(number1, number2){
        let menosCalculo = number1 - number2;
        return menosCalculo
    } 
}
console.log(calculadora.mais(2,3))
console.log(calculadora.menos(3,1))
// tabela no console
let soma = calculadora.mais(5,5)
let subtr = calculadora.menos(8,3)

console.table({soma, subtr})
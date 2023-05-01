/**Objetos1- Crie um objeto chamado `pessoa` 
 * com as seguintes propriedades:
- nome: uma string com o nome da pessoa;
- idade: um número com a idade da pessoa;
- saudacao(): uma função que retorna uma saudação com o nome da pessoa.
 _Teste a função saudacao() imprimindo a saudação 
 no console._ */

let pessoa ={
    nome:"Cybelle",
    idade:27 ,
    saudacao: function(){
        console.log(`Olá, ${pessoa.nome}`)
    }
}
pessoa.saudacao()

/**2-Crie um objeto chamado calculadora com as 
 * seguintes propriedades:
- soma: uma função que recebe dois números como 
parâmetros e retorna a soma deles;
- subtracao: uma função que recebe dois números como
 parâmetros e retorna a subtração do segundo 
 do primeiro.
Teste as funções soma() e subtracao() imprimindo 
os resultados no console.
_Dica: Para criar as funções, basta declará-las 
como propriedades do objeto, assim como foi feito
no Exercício 1. Lembre-se de utilizar os 
parâmetros na definição das funções e de retornar 
o resultado dos cálculos._ */

let calculadora ={
    soma:function(numero1,numero2){
        let resultado = numero1+numero2
        return console.log(resultado)
    },
    subtracao:function(numero3,numero4){
        let resultado = numero3-numero4
        return console.log(resultado)
    }
};
calculadora.soma(2,3)
calculadora.subtracao(5,2)
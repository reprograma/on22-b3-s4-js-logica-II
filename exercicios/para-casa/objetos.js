/* Exercício 1:

Instruções: Crie um objeto chamado pessoa com as seguintes propriedades:

    nome: uma string com o nome da pessoa;
    idade: um número com a idade da pessoa;
    saudacao(): uma função que retorna uma saudação com o nome da pessoa.
    Teste a função saudacao() imprimindo a saudação no console.
*/

console.log("Saída do Exercício 1:");

function Pessoa(nomePessoa, idadePessoa) {

    this.nomePessoa = nomePessoa;
    this.idadePessoa = idadePessoa;

    this.saudaPessoa = function(saudacaoPessoa){
        return this.nomePessoa + " diz " + saudacaoPessoa;
    }
};

const pessoaExercicio1 = new Pessoa("Aline", 38);
console.log(pessoaExercicio1.saudaPessoa("Aloha!"));



/* Exercício 2:

Instruções: Crie um objeto chamado calculadora com as seguintes propriedades:

    soma: uma função que recebe dois números como parâmetros e retorna a soma 
    deles;
    subtracao: uma função que recebe dois números como parâmetros e retorna a 
    subtração do segundo do primeiro. Teste as funções soma() e subtracao() 
    imprimindo osresultados no console.*/

    console.log("Saída do Exercício 2:");
   
    function Calculadora(soma, subtracao){
        this.soma = function(numero1, numero2){
            return numero1 + numero2;
        },
        this.subtracao = function(numero1, numero2){
            return numero2 - numero1;
        }
    };

    const calc = new Calculadora();
    console.log(calc.soma(3, 4));
    console.log(calc.subtracao(3, 4));
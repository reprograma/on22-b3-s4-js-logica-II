//**Exercício 1:**

//**Instruções:**
//Crie um objeto chamado `pessoa` com as seguintes propriedades:

//- nome: uma string com o nome da pessoa;
//- idade: um número com a idade da pessoa;
//- saudacao(): uma função que retorna uma saudação com o nome da pessoa.

//  _Teste a função saudacao() imprimindo a saudação no console._

const pessoa = {
    nome: 'Carolina',
    idade: 25,
    saudacao: function() {
        console.log(`Olá! Meu nome é ${this.nome}!`)
    },
}

pessoa.saudacao();


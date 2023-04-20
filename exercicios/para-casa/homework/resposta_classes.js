/***Exercício 1:**

Objetivo: Praticar a criação e utilização de classes.

Instruções:

- Crie uma classe chamada Pessoa.
- A classe deve ter duas propriedades: `nome` e `idade`.
- A classe deve ter um método chamado `falar()`, que imprime no console a mensagem 
`"Olá, meu nome é {nome} e eu tenho {idade} anos"`.

  _Crie um objeto da classe Pessoa e chame o método falar._*/

  class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;

    }
    falar(){
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    }
}

const pessoa = new Pessoa( "Sarah Bernardino ", 24)
pessoa.falar()


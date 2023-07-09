/**
 *
- Crie uma classe chamada Pessoa.

- A classe deve ter duas propriedades: `nome` e `idade`.

- A classe deve ter um método chamado `falar()`, que imprime no console a mensagem `"Olá, meu nome é {nome} e eu tenho {idade} anos"`.
 */

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
       this.idade = idade
    }

    falar() {

        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    }
}

const ficha = new Pessoa("Karina", 30)

ficha.falar()
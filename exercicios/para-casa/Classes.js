"Exercício 1"

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    falar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}
const crianca = new Pessoa ('Heitor', 10)
crianca.falar()    
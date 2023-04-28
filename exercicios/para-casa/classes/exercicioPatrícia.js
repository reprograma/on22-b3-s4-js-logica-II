class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    falar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}
const valorPessoa = new Pessoa("Elizete", 41)
valorPessoa.falar()
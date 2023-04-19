class pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }


falar() {
    console.log(`Olá, meu nome é ${this.nome} e minha idade é ${this.idade} anos.`); }
}

const pessoaExemplo = new pessoa('Alex', 28); //objeto criado pra remeter à classe
pessoaExemplo.falar();
class Pessoa{
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falar() {
        console.log(`Olá meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

const pessoa = new Pessoa("Leo", "5");
pessoa.falar()
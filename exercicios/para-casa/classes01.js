//entendendo ainda

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;

    }

    falar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos!`)
    }
}

const pessoa = new Pessoa("Aline", 25);
const pessoa2 = new Pessoa("Uzumaki",33);

pessoa.falar();
pessoa2.falar();
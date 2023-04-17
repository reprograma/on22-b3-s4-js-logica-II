class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    falar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    };
}

const pessoa = new Pessoa ("Ivair", 35);

console.log(pessoa);
pessoa.falar();

const joana = new Pessoa ("Joana", 42);

console.log(joana);
joana.falar();
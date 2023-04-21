class Pessoa {
    constructor(nome,idade){
        this.nome = nome,
        this.idade = idade
    }
    falar() {return `Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`}
}


const pessoa = new Pessoa('Joana', 28)
console.log(pessoa.falar())
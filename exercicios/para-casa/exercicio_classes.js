class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    falar(){
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }

}

const pessoa1 = new Pessoa("Juliana", 27)
pessoa1.falar()
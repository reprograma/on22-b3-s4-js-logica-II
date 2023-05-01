class Pessoa{
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    saudacao() {
        console.log(`Olá, ${this.nome}.`);
    }
}

const pessoa = new Pessoa("Leo", "5");
pessoa.saudacao()
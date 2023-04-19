const pessoa = {
    nome: 'Alex',
    idade: 28,
    saudacao() {
        return `Olá, meu nome é ${this.nome}.`;

    }
}

console.log(pessoa.saudacao())
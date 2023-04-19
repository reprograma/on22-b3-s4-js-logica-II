class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  falar() {
    console.log(`Olá, meu ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const pessoa = new Pessoa("Francielly", 24);
pessoa.falar();



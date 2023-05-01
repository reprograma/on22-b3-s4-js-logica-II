//Exercício 1:Crie uma classe chamada Pessoa.
//- A classe deve ter duas propriedades: `nome` e `idade`.
//- A classe deve ter um método chamado `falar()`, que imprime no console a mensagem `"Olá, meu nome é {nome} e eu tenho {idade} anos"`.
//  _Crie um objeto da classe Pessoa e chame o método falar._
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    };
    falar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    };
  } ;
  const crianca = new Pessoa ('Júlia', 6);
  crianca.falar();
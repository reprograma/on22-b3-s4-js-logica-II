// Exercício 1

const pessoa = {
    nome: 'Nati',
    idade: 25,
    saudacao: function() {
      return (`${"Bom dia"} ${this.nome}`);
    }
};
console.log(pessoa.saudacao());

//Exercicio 2

const calculadora = {
    soma: function(num1, num2) {
      return num1 + num2
    },
    subtracao: function(num1, num2) {
      return num1 - num2
    }
  }
  console.log(calculadora.soma(8, 8))
  console.log(calculadora.subtracao(10, 12))




//Objetos 

//Exercicio 1
const pessoa = {
    nome: 'Elizabeth Melo',
    idade: 66,
    saudacao: function () {
      console.log(`Seja bem-vinda, ${this.nome}!`);
    }
  };
  
  pessoa.saudacao();
  
  // Exercício 2
  let calculadora = {
    soma: function (num1, num2) {
      return num1 + num2;
    },
    subtracao: function (num1, num2) {
      return num2 - num1;
      
    }
  };
  
  console.log(calculadora.soma(98,64));
  console.log(calculadora.subtracao(85,650));
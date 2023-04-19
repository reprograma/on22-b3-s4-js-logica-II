let calculadora = {
  soma: function soma(n1, n2) {
    let res = n1 + n2;
    console.log(res);
  },
  subtracao: function subtracao(num1, num2) {
    let resultado = num1 - num2;
    console.log(resultado);
  },
};
calculadora.soma(10, 11);
calculadora.subtracao(15, 44);

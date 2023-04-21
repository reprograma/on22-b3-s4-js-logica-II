const calculadora = {
    soma: (n1, n2) => n1 + n2, //early return
    subtracao: (n1, n2) => n1 - n2, 
  
}

const resultadoSoma = calculadora.soma(15,10);
const resultadoSubtracao = calculadora.subtracao(20,76);

console.table({resultadoSoma, resultadoSubtracao});


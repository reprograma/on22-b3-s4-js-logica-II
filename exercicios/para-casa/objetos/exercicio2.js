const calculadora = {
    soma:(num1, num2)=> num1 + num2,
    subtracao:(num1, num2)=> num1 - num2
}

const resultadoSoma = calculadora.soma(8,5)
const resultadoSubtracao = calculadora.subtracao(23,4)

console.table({resultadoSoma, resultadoSubtracao})

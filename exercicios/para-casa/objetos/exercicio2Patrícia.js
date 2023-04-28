const calculadora = {
    soma: function (n1, n2) {
        return n1 + n2
    },

    subtracao: function (n1, n2) {
        return n1 - n2
    }
}
const resultadoSom = calculadora.soma(1,2)
const resultadoSub = calculadora.subtracao(2,1)
console.log({resultadoSom, resultadoSub})
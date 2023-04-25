//
//

let calculadora = {
    soma: function(a,b) {
        let soma = a + b
        return soma
    },
    subtracao: function(a,b) {
        let subtr = a - b
        return subtr
    },
}

console.log(calculadora.soma(5, 2))
console.log(calculadora.soma(5, -5));
console.log(calculadora.subtracao(5, 2))
console.log(calculadora.subtracao(-2, 2));
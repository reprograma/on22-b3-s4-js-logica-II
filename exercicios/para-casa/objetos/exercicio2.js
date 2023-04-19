const calculadora = {
    soma: function(num1, num2){
        return num1 + num2;
    },
    subtracao: function(num1, num2){
        return num2 - num1;
    }
}
somando = calculadora.soma(7, 8)
console.log(somando);
subtraindo = calculadora.subtracao(60, 90)
console.log(subtraindo);
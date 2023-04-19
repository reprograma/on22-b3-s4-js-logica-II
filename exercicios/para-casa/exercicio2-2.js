const calculator = {
  sum: function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  },
  sub: function (numb1, numb2) {
    return numb2 - numb1;
  },

  mult: function (number1, number2) {
    return number1 * number2;
  },

  div: function (n1, n2) {
    return (n1 / n2).toFixed(2)
  }
};

const resultSum = calculator.sum(2, 4);
console.log(resultSum);

const resultSub = calculator.sub(1999, 2023);
console.log(resultSub);

const resultMult = calculator.mult(10, 10);
console.log(resultMult);

const resultDiv = calculator.div(2023, 1999)
console.log(resultDiv)
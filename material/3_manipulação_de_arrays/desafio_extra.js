//
//

const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90]

let numerosLivres = numeros

numerosLivres.pop()

numerosLivres.forEach(numerosLivres.find((numero) => {
  if (numero % 2 == 0) {
    return numero;
  }
}))
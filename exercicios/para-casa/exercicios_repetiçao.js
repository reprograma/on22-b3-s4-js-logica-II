// Exercício 1 - Crie um array com 5 números. Em seguida crie um `for` que imprima cada número
// do array no console.

let numeros = [253, 232, 395, 124, 35]

for (let i = 0; i < numeros.length; i++){
    //console.log(numeros[i])
}

/** Exercício 2 - Crie um objeto chamado `animal` com as seguintes propriedades:
 * - nome: uma string com o nome do animal;
- cor: um número com a idade do animal;
- nome_dono: uma string com o nome da pessoa a qual o animal pertence.

Crie um `for...in` que imprima cada propriedade e valor do objeto no console.*/ 

let animal = {
    nome: "Alfredo",
    cor: "Bege",
    nome_dono: "Leon", 
}
for (let dados in animal){
    //console.log(`${dados}: ${animal[dados]}`)
}

/**Exercício 3 - Crie um array com 5 strings. Em seguida `for...of` que imprima cada string do array
no console.

Dica: Utilize a sintaxe for (variavel of array) para percorrer o array. A variável
 irá assumir o valor de cada elemento do array a cada iteração do loop.
 */

 let strings = ["pedra", "celular", "melão", "torre", "garrafa"]

 for (let objetos of strings){
    //console.log(objetos)
 }

 /** Exercício 4 - Instruções:.Crie um array com 5 número.Crie um `while` que imprima 
    cada número do array no console.
    _Dica: Utilize uma variável de controle para definir a condição de parada do loop. A cada iteração, 
    incremente essa variável._ */

let numbers = [18, 19, 20, 21, 22]

let n = 0
while (n < 5){
    //console.log(numbers[n]);
    n++;
}

/** Exercício 5 - Instruções: Crie um `do while` que peça para o usuário digitar
    um número. Se o número digitado for par, imprima no console a mensagem "O número é par". 
Caso contrário, imprima: "O número é ímpar"*/
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    rl.question('Digite um número: ', valor =>{
        do{
            let resultado = parseInt(valor)
            if(resultado % 2 == 0){
                console.log(`${valor} é par.`)
                break;
            }else{
                console.log(`${valor} é impar.`)
                break;
            }
        }while(valor > 0);
    })
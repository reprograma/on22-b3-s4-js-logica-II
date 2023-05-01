/* Exercício 1:
Instruções: Crie um array com 5 números. Em seguida crie um for que imprima cada 
número do array no console.

Dica: Utilize a propriedade length do array para definir a condição de parada do 
loop.*/
console.log("Saída do Exercício 1");

const arrayDeNumerosExercicio1 = Array(19, 22, 6, 29, 21)
for (let i = 0; i < arrayDeNumerosExercicio1.length; i++) {
    console.log(arrayDeNumerosExercicio1[i]);
}


/* Exercício 2:

Instruções: Crie um objeto chamado animal com as seguintes propriedades:

    nome: uma string com o nome do animal;
    cor: um número com a idade do animal;
    nome_dono: uma string com o nome da pessoa a qual o animal pertence.

Crie um for...in que imprima cada propriedade e valor do objeto no console.

Dica: Utilize a sintaxe for (propriedade in objeto) para percorrer o objeto. Para 
acessar o valor da propriedade, utilize a sintaxe objeto[propriedade].*/

console.log("Saída do Exercício 2");

function Animal(nome, cor, nome_dono) {
    this.nome = nome;
    this.cor = cor;
    this.nome_dono = nome_dono;
}

const animalExercicio2 = new Animal('Roni', 'preto', 'Aline');

for (let propriedade in animalExercicio2) {
    console.log(`${propriedade}: ${animalExercicio2[propriedade]}`);
}
/* Exercício 3:

Instruções: Crie um array com 5 strings. Em seguida for...of que imprima cada string 
do array no console.

Dica: Utilize a sintaxe for (variavel of array) para percorrer o array. A variável 
variavel irá assumir o valor de cada elemento do array a cada iteração do loop. */

console.log("Saída do Exercício 3");

const arrayDeStringsExercicio3 = ["Marcha", "soldado", "cabeça", "de", "papel..."];

for (const array of arrayDeStringsExercicio3) {
    console.log(array);
}
/* Exercício 4:

Instruções:.Crie um array com 5 números.Crie um while que imprima cada número do array 
no console.

Dica: Utilize uma variável de controle para definir a condição de parada do loop. A 
cada iteração, incremente essa variável.*/

console.log("Saída do Exercício 4");

arrayDeNumerosExercicio4 = Array(10, 20, 30, 40, 50)
let i = 0;

while (i < arrayDeNumerosExercicio4.length) {
    console.log(arrayDeNumerosExercicio4[i]);
    i++;
}
/* Exercício 5:

Instruções:Crie um do while que peça para o usuário digitar um número. Se o número 
digitado for par, imprima no console a mensagem "O número é par". Caso contrário, 
imprima "O número é ímpar".

O loop deve continuar executando até que o usuário digite o número 0.

Dica: Utilize a função prompt() do Javascript para receber a entrada do usuário e a 
função parseInt() para converter a entrada em um número inteiro. Utilize a expressão 
num % 2 == 0 para verificar se o número é par ou ímpar.*/

console.log("Saída do Exercício 5");

const prompt = require("prompt-sync")();
//precisei usar var aqui, senão o código não rodava :(
var condicaoSaidaDoLoop = false;

do {
    //precisei usar var aqui, senão o código não rodava :(
    var numeroExercicio5 = parseInt(prompt("Digite um número: "));
    if (isNaN(numeroExercicio5) === true) {
        condicaoSaidaDoLoop = false;
    } else {
        condicaoSaidaDoLoop = true;
    }
} while (condicaoSaidaDoLoop === false);

let retornaParOuImpar = function (numero) {

    if (numero == 0) {
        process.exit(0)
    } else if (numero % 2 === 0) {
        return "O número é par!";
    } else {
        return "O número é ímpar!";
    }
};

console.log(retornaParOuImpar(numeroExercicio5));
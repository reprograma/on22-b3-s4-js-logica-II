/** 1- Crie um array com 5 números. 
 * Em seguida crie um `for` que imprima cada número do
 *  array no console.
_Dica: Utilize a propriedade length do array para 
definir a condição de parada do loop._ */

let listaDeNumeros = [7,2,3,4,5]
for(let numero of listaDeNumeros){
  console.log(numero)
}

/**2- Crie um objeto chamado `animal` 
 * com as seguintes propriedades:
- nome: uma string com o nome do animal;
- cor: um número com a idade do animal;
- nome_dono: uma string com o nome da pessoa a qual 
o animal pertence.
Crie um `for...in` que imprima cada propriedade
e valor do objeto no console.
_Dica: Utilize a sintaxe
 for (propriedade in objeto) 
 para percorrer o objeto. 
 Para acessar o valor da propriedade, 
 utilize a sintaxe objeto[propriedade]._ */

let animal ={
  nome:'Mingau',
  cor:'Preto',
  nome_dono:"Cybelle"
}
for(propriedade in animal){
  console.log(`${propriedade}: ${animal[propriedade]}`)
}



 /**3-Crie um array com 5 strings. 
  * Em seguida `for...of` que imprima cada string 
  * do array no console.
Dica: Utilize a sintaxe for (variavel of array) 
para percorrer o array. A variável variavel irá 
assumir o valor de cada elemento do array a cada 
iteração do loop. */

let nomes =["Cybelle","Benjamin","Laura","Joao","Gabriel"]
for(let nome of nomes){
  console.log(nome)
}

/**4-Instruções:.Crie um array com 5 número.
 * Crie um `while` que imprima cada número do array 
 * no console.
_Dica: Utilize uma variável de controle para definir
 a condição de parada do loop. A cada iteração, 
 incremente essa variável._ */

let numeros=[2,3,4,5,6]
let i= 0
while(i<= numeros.length){
  console.log(numeros);
  i++;
}

 /** 5-Instruções:Crie um `do while` que peça 
  * para o usuário digitar um número.
  * Se o número digitado for par, 
  * imprima no console amensagem _"O número é par"_.
  *  Caso contrário, imprima _"O número é ímpar"_.
**O loop deve continuar executando até 
que o usuário digite o número 0.**
_Dica: Utilize a função prompt() do Javascript 
para receber a entrada do usuário e a 
função parseInt() para converter a entrada em 
um número inteiro. Utilize a expressão 
num % 2 == 0 para verificar se o número
 é par ou ímpar.*/

// NÃO CONSEGUI FAZER

/**let numero = prompt("Digite um número: ")
do{
  console.log("O numero é par")
}while( numero % 2 == 0)*/


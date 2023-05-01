//Exercício 1: Crie um array com 5 números. Em seguida crie um `for` que imprima cada número 
//do array no console.
 const array1 = [1, 2, 3, 4, 5];
 for (let i = 0; i < array1.length; i++) {
     console.log(array1[i]);
   };

//Exercício 2: Crie um objeto chamado `animal` com as seguintes propriedades:
//- nome: uma string com o nome do animal;
//- cor: um número com a idade do animal;
//- nome_dono: uma string com o nome da pessoa a qual o animal pertence.
 const animal = {
    nome: 'paçoca',
    cor: 3,
    nome_dono: 'Rose',
    };
   
   for (let key in animal) {
     console.log(`${key}: ${animal[key]}`);
    };
//Exercício 3: Crie um array com 5 strings. Em seguida `for...of` que imprima
//cada string do array no console.

//Dica: Utilize a sintaxe for (variavel of array) para percorrer o array. 
//A variável variavel irá assumir o valor de cada elemento do array a cada iteração 
//do loop.
 const nomes = ['Maria1', 'Maria2', 'Maria3', 'Maria4','Maria5'];

 for (let nome of nomes) {
   console.log(nome);
    };

//Exercício 4: Crie um array com 5 números.Crie um `while` que imprima cada número do array no console.

//_Dica: Utilize uma variável de controle para definir a condição de parada do loop. A cada iteração,
// incremente essa variável._
 const numero = [1, 2, 3, 4, 5];
 let i = 0;
 while (i <numero.length) {
   console.log(numero[i]);
   i++;
 };
//Exercício 5:Crie um `do while` que peça para o usuário digitar um número.Se o número digitado for par,
//imprima no console amensagem _"O número é par"_. Caso contrário, imprima _"O número é ímpar"_.
//O loop deve continuar executando até que o usuário digite o número 0.
  
//------PENDENTE QUESTAO 5-------------//
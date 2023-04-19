# Exercício de Casa 🏠

## Exércicios

### Estruturas de repetição

---

**Exercício 1:**

**Instruções:** Crie um array com 5 números. Em seguida crie um `for` que imprima cada número do array no console.

_Dica: Utilize a propriedade length do array para definir a condição de parada do loop._

**Exercício 2:**

**Instruções:** Crie um objeto chamado `animal` com as seguintes propriedades:

- nome: uma string com o nome do animal;
- cor: um número com a idade do animal;
- nome_dono: uma string com o nome da pessoa a qual o animal pertence.

Crie um `for...in` que imprima cada propriedade e valor do objeto no console.

_Dica: Utilize a sintaxe for (propriedade in objeto) para percorrer o objeto. Para acessar o valor da propriedade, utilize a sintaxe objeto[propriedade]._

**Exercício 3:**

**Instruções:** Crie um array com 5 strings. Em seguida `for...of` que imprima cada string do array no console.

Dica: Utilize a sintaxe for (variavel of array) para percorrer o array. A variável variavel irá assumir o valor de cada elemento do array a cada iteração do loop.

**Exercício 4:**

Instruções:.Crie um array com 5 número.Crie um `while` que imprima cada número do array no console.

_Dica: Utilize uma variável de controle para definir a condição de parada do loop. A cada iteração, incremente essa variável._

**Exercício 5:**

Instruções:Crie um `do while` que peça para o usuário digitar um número.Se o número digitado for par, imprima no console amensagem _"O número é par"_. Caso contrário, imprima _"O número é ímpar"_.

**O loop deve continuar executando até que o usuário digite o número 0.**

_Dica: Utilize a função prompt() do Javascript para receber a entrada do usuário e a função parseInt() para converter a entrada em um número inteiro. Utilize a expressão num % 2 == 0 para verificar se o número é par ou ímpar._

Veja o exemplo:

```javascript
let num;

do {
  num = parseInt(prompt("Digite um número:"));

  // Adicione aqui sua lógica para verificar se o número é par ou ímpar

} while (/* Adicione aqui sua condição de parada */);
```

**Nesse exemplo, o `prompt()` é utilizado para receber a entrada do usuário. A função `parseInt()` é utilizada para converter a entrada em um número inteiro.**

---

### Objetos

---

**Exercício 1:**

**Instruções:**
Crie um objeto chamado `pessoa` com as seguintes propriedades:

- nome: uma string com o nome da pessoa;
- idade: um número com a idade da pessoa;
- saudacao(): uma função que retorna uma saudação com o nome da pessoa.

  _Teste a função saudacao() imprimindo a saudação no console._

**Exercício 2:**

**Instruções:** Crie um objeto chamado calculadora com as seguintes propriedades:

- soma: uma função que recebe dois números como parâmetros e retorna a soma deles;

- subtracao: uma função que recebe dois números como parâmetros e retorna a subtração do segundo do primeiro.
  Teste as funções soma() e subtracao() imprimindo osresultados no console.

_Dica: Para criar as funções, basta declará-las como propriedades do objeto, assim como foi feito no Exercício 1. Lembre-se de utilizar os parâmetros na definição das funções e de retornar o resultado dos cálculos._

---

### Manipulação de arrays

---

Objetivo: Praticar o uso dos métodos push, shift, unshift, forEach, slice, filter, find e map para manipular um array de números.

Instruções:
Considere o seguinte array de números:

```javascript
const numeros = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
```

- Use o método push() para adicionar os números 100 e 200 no final do array.
- Use o método shift() para remover o primeiro elemento do array.
- Use o método unshift() para adicionar o número 5 no início do array.
- Use o método forEach() para imprimir cada número do array no console.
- Use o método slice() para criar um novo array com os números entre as posições 2 e 5 (inclusive). Imprima o novo array no console.
- Use o método filter() para criar um novo array com os números maiores que 50. Imprima o novo array no console.
- Use o método find() para encontrar o primeiro número par do array. Imprima o número encontrado no console.
- Use o método map() para criar um novo array com o dobro de cada número. Imprima o novo array no console.

Desafio extra:

1. Use os métodos encadeados para remover o último elemento do array, em seguida, filtrar os números pares e, por fim, criar um novo array com os números pares multiplicados por 2. Imprima o novo array no console.

Dicas:

Lembre-se que alguns métodos como filter() e find() exigem que você forneça uma função callback como argumento.
Use o console para verificar o resultado de cada manipulação do array.
Não esqueça de criar novas variáveis para armazenar os novos arrays gerados pelos métodos slice(), filter() e map().

---

### Classes

---

**Exercício 1:**

Objetivo: Praticar a criação e utilização de classes.

Instruções:

- Crie uma classe chamada Pessoa.

- A classe deve ter duas propriedades: `nome` e `idade`.

- A classe deve ter um método chamado `falar()`, que imprime no console a mensagem `"Olá, meu nome é {nome} e eu tenho {idade} anos"`.

  _Crie um objeto da classe Pessoa e chame o método falar._

Dica : É importante lembrar de utilizar a palavra-chave `class` para criar a classe, seguida pelo nome da classe com a primeira letra em maiúscula.

Além disso, lembre-se de que a classe pode ter um método construtor, que é chamado automaticamente quando uma instância da classe é criada. O construtor pode receber parâmetros para inicializar as propriedades da classe.

Outra dica é que você pode criar métodos dentro da classe utilizando a sintaxe `nomeDoMetodo() { // código aqui }`. Esses métodos podem acessar as propriedades da classe utilizando o `this.nomeDaPropriedade`.

Por fim, lembre-se de que é possível criar uma instância da classe utilizando a sintaxe: `new NomeDaClasse(parametrosDoConstrutor).`

---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [x] Fiz o fork do repositório.
- [x] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [x] Resolvi o exercício.
- [x] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [x] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [x] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [x] Criei um Pull Request seguindo as orientaçoes que estao nesse [documento](https://github.com/mflilian/repo-example/blob/main/exercicios/para-casa/instrucoes-pull-request.md).

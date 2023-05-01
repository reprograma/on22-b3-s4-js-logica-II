/* 1. Crie um array com 5 números.
Em seguida crie um `for` que imprima cada número do array no console.
_Dica: Utilize a propriedade length do array para definir a condição
de parada do loop._*/

const listaDeNumeros = [22,11,20,17,1554]
    for (let numero of listaDeNumeros) {
       
        console.log(numero)
      
        
    }


  /* 2. Crie um objeto chamado `animal` com as seguintes propriedades:

    - nome: uma string com o nome do animal;
    - cor: um número com a idade do animal;
    - nome_dono: uma string com o nome da pessoa a qual o animal pertence.
    
    Crie um `for...in` que imprima cada propriedade e valor do objeto
    no console. 
    
    _Dica: Utilize a sintaxe for (propriedade in objeto) para percorrer 
    o objeto. Para acessar o valor da propriedade, utilize a sintaxe objeto[propriedade]._
    
    */

    let animal = {
        nome: "Pum",
        idade: 5,
        nome_dono: "Tissiana"
    }
    for (let propriedade in animal) {
        
        console.log (animal)
      break
  
    }

    /* 3. Crie um array com 5 strings. Em seguida `for...of` que imprima
    cada string do array no console.
    
    Dica: Utilize a sintaxe for (variavel of array) para percorrer o array.
    A variável variavel irá assumir o valor de cada elemento do array a cada
    iteração do loop. */

    let cardapio = ["dobradinha", "panelada", "buchada", "feijoada", "sarapatel"]
    for (let item of cardapio) {
        console.log(item)

    }
    
     

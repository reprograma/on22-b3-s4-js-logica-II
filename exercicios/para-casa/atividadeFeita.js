let numeros = [1,2,9,4,6]
for(i=0;i < numeros.length; i++){
    console.log(numeros[i])
}


const animal = {
    nome: "Ralph",
    cor: "branco", 
    nome_dono: "Juliana"
}
 for( let propriedade in animal){
    console.log(propriedade  + ": " + animal[propriedade])
 }

let nomes = ["Ana", "Julia", "Fernanda", "Beatriz", "Priscila"]

for(let meninas of nomes){
    console.log(meninas)
}

let numero2 = [2,3,4,5,8]
let j = 0;
while (j < numero2.length) {
  console.log(numero2[j]);
  j++;
}






const pessoa2 = {
    nome: "dayane",
    idade: 27
}
function saudacao2 (pessoa){
    console.log(`olá, ${pessoa.nome}`)
    }

    saudacao2(pessoa2)
 

    const calculadora = {
        soma:function(numero,numero2){
            let resultado_soma = numero + numero2 
            return resultado_soma
        },

        subtracao:function(numero,numero2){
            let resultado_sub = numero - numero2 
            return resultado_sub
        }
    }
    

    console.log(calculadora.soma(2,4))
   console.log(calculadora.subtracao(4,2)) 

    
   const numeros3 = [10, 23, 45, 67, 89, 12, 34, 56, 78, 90];
   const adicionar = numeros3.push(100,200);
   console.log(numeros3)
   const add = numeros3.shift();
   console.log(numeros3)
   const adici = numeros3.unshift(5);
   console.log(numeros3)
   numeros3.forEach((numeros3)=>{
    console.log(numeros3)
   })









let listaDeNumeros = [100, 689, 2, 7, 900];

// Multiplique cada elemento por 7
listaDeNumeros.forEach(function(numero,index){
    console.log(index)

    const conta = numero * 7

  return console.log(conta);
});


function cumprimentaPessoa(nomeDePessoas){
    for(let nome of nomeDePessoas){
        console.log(`Olá, ${nome}`)
    }
    
}

cumprimentaPessoa("Manuelly")

// Arrow function : () =>{}
let nomeDePessoas = ["Manuelly","Andreza","Luana"]

nomeDePessoas.forEach((nome)=>{
    console.log(`Olá, ${nome}`)
})

// Exiba no console usando forEach a concatenação de um elemento com o seu próximo elemento
let nomes = ["Gabriela","Andreza","Juliana","Beatriz"]

nomes.forEach((nome, index)=>{
    console.log(nome + nomes[index + 1])
})


const pessoa = {
  name: 'John',
  age: 30,
  city: 'New York',
};

for (let propriedade in pessoa) {

    if (pessoa[propriedade] == 30){
        console.log(propriedade)
    }
}


let pessoaComEndereco = {
    name:"Manuelly Suzik",
    endereco:{
        rua:"Minha rua",
        numero:10
    }
}

for (let propriedade in pessoaComEndereco.endereco){

    console.log(pessoaComEndereco.endereco[propriedade])
     //1 - execução =  pressoaComEndereco.endereco["rua"]
    //2 - execução pressoaComEndereco.endereco["numero"]
}
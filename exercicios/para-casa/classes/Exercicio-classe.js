const animal = {
    nome: "Jeová",
    cor: "caramelo e branco",
    idade: 3,
    nome_tutor: "Bia", 
 };
 for(propriedade in animal){
    console.log(`${propriedade} : ${animal[propriedade]}`);
 }

 const animal = {
    nome: "Toc",
    cor: "alvinegro",
    idade: 4.5,
    nome_tutor: "Patrícia", 
 };
 for(propriedade in animal){
    console.log(`${propriedade} : ${animal[propriedade]}`);
 }
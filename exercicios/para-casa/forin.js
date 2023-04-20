const animal = {
    nome: 'Rabito',
    cor: 'Preto',
    nome_dono: 'Nati',
  }; 
  for (let propriedade in animal) {
    console.log(`${propriedade}: ${animal[propriedade]}`);
}
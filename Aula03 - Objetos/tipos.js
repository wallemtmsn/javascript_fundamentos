const cliente = {
  nome: 'André',
  sobrenome: 'Rafael',
  idade: 36,
  email: 'andre@andre.com',
  telefones: ['99999-9999', '88888-8888'],
};

//Acessando todas as informações do cliente no console, incluindo nome, sobrenome, email, idade e telefones.
console.log(`
Nome: ${cliente.nome} ${cliente.sobrenome}
Idade: ${cliente.idade}
Email: ${cliente.email}
Telefones: ${cliente.telefones.join(' / ')}
`);
const cliente = {
    nome: 'André',
    sobrenome: 'Rafael',
    idade: 36,
    email: 'andre@andre.com',
    telefones: ['99999-9999', '88888-8888'],
  };

  cliente.endereco = {
    rua: 'Av. Brasil',
    numero: 320,
    apartamento: true,
    bairro: 'Centro',
    cidade: 'Uberlândia',
    estado: 'MG',
 };


// Acessando com aspas e colchetes
console.log(cliente["email"])

// Acessando com ponto
console.log(cliente.endereco)
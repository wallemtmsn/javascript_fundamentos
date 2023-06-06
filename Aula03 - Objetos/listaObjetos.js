const cliente = {
    nome: 'André',
    sobrenome: 'Rafael',
    idade: 36,
    email: 'andre@andre.com',
    telefones: ['99999-9999', '88888-8888'],
  };

  cliente.enderecos = [
    {
    rua: 'Av. Brasil',
    numero: 320,
    apartamento: true,
    bairro: 'Centro',
    cidade: 'Uberlândia',
    estado: 'MG',
    }
];

// Adicione um novo endereço em cliente.endereço usando o método push.
cliente.enderecos.push(
    {
    rua: 'Rua dos Bobos',
    numero: 0,
    apartamento: false,
    bairro: 'Centro',
    cidade: 'São Paulo',
    estado: 'SP',
    }
);

// Filtrando endereços que são apartamentos com o método filter.
const listaDeApartamentos = cliente.enderecos.filter((endereco) => endereco.apartamento === true);

console.log(listaDeApartamentos);
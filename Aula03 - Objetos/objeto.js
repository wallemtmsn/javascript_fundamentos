

class Pessoa {
    constructor(nome, idade, telefone, profissao, cidade, bairro) {
        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
        this.profissao = profissao;
        this.cidade = cidade;
        this.bairro = bairro;
    }
}

const pessoa1 = new Pessoa('Wallemberg', 35, '(22) 99830-3157', 'Analista de Sistemas', 'Campos dos Goytacazes', 'Jockey Club');

const pessoa2 = new Pessoa('Carolyne', 33, '(22) 99976-4500', 'Policial Militar', 'Campos dos Goytacazes', 'Jockey Club');

console.log(`
Meu nome: ${pessoa1.nome}
Idade: ${pessoa1.idade}
Telefone: ${pessoa1.telefone}
Profissão: ${pessoa1.profissao}
Cidade Natal: ${pessoa1.cidade}
Bairro: ${pessoa1.bairro}
`)


console.log(`
Os dados da esposa de ${pessoa1.nome} é:

Nome: ${pessoa1.nome}
Idade: ${pessoa1.idade}
Telefone: ${pessoa1.telefone}
Profissão: ${pessoa1.profissao}
Cidade Natal: ${pessoa1.cidade}
Bairro: ${pessoa1.bairro}

`)
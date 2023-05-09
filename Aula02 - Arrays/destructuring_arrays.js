// Desestruturando arrays

const numerosPares = [2, 4, 6, 8, 10];
const numerosImpares = [1, 3, 5, 7, 9];

const numeros = [...numerosPares, ...numerosImpares];

//console.log(numeros);

// OUTRO EXEMPLO

//const num1 = 1; <--------------------------------
//const num2 = 2; <--------------------------------
//console.log(num1, num2) <--------------------------------

// O exemplo acima pode ser substituído por:

//const [num1, num2] = [1, 2];
//console.log(num1, num2);


// Outro exemplo

//const [valorPadrao = 'Array vazia!'] = [1];

//console.log(valorPadrao)


// TRABALHANDO COM OBJETOS

const pessoa = {
    nome: 'Wallemberg',
    idade: 35,
    cidade: 'Rio de Janeiro'
}


const pessoaComNovosDados = {
    ...pessoa, telefone: 22998303157
}

//console.log(pessoaComNovosDados, 'tipo da variável: ' + typeof pessoaComNovosDados);

// Acessando um dado dentro do objeto

const nomePessoa = pessoa.nome

//console.log(nomePessoa)

// Outra forma de capturar o dado dentro do objeto:

const {nome, cidade} = pessoa

//console.log(nome, cidade)

// Usando função com o método Destruction

function imprimeDados({nome, cidade}) {
    console.log(nome, cidade)
}

// A função acima imprime somente dados selecionados

function imprimeTodosDados(dados) {
    console.log(dados);
}

// A função acima imprime todos os dados do objeto

imprimeTodosDados(pessoa)
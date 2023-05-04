// Desafio: Atualize a lista de alunos

// Crie uma lista de chamada com os seguintes alunos: "João", "Ana", "Caio", "Lara", "Marjorie", "Leo"

// Porém, Ana e Caio mudaram de escola e o Rodrigo entrou nessa sala. Nosso desafio será atualizar a lista de chamada, removendo os nomes de Ana e Caio, e inserindo Rodrigo.

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];


// Método 01
// nomes.spliced(1, 2) // Removendo
// nomes.push('Rodrigo') // Adicionando
// console.log('LISTA ATUALIZADA!')
// console.log(nomes)

// Método 02
nomes.splice(1, 2, 'Rodrigo') // Removendo Ana e Caio e adicionando Rodrigo
console.log('LISTA ATUALIZADA!')
console.log(nomes)
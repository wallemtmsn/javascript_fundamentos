
// Deixando somente a primra letra do nome maiúscula
const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva']; // Criando lista
const novaListaNomesLower = nomes.map((nome) => nome.toLowerCase()) // Criando uma nova lista em lower case
const novaListaNomes = novaListaNomesLower.map((nome) => nome.toLocaleUpperCase().charAt(0) + nome.slice(1)) // Pegando a nova lista em lower case e colocando a primeira letra do nome maiúscula com toLocalUpperCase
console.log(novaListaNomes);
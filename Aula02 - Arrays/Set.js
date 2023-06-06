// Desafio 18: removendo duplicatas

// Um professor acidentalmente adicionou nomes repetidos na lista de chamada:

// Ana
// Clara
// Maria
// Maria
// João
// João
// João

// Remova os nomes repetidos, deixando apenas um de cada.



// const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

// const meuSet = new Set(nomes);

// const listaAtualizada = [...meuSet]

// console.log(listaAtualizada);


// Uma forma mais concisa de resolver o problema e com menos linha está abaixo, declarando o set direto na nova lista atualizada.

const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

const listaAtualizada = [...new Set(nomes)];

console.log(listaAtualizada);
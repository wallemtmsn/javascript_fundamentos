// Adicionar o valor de 10 sem alterar o array original.

const notas = [7, 7, 8, 9];

// novasNotas = [];

// for (let i = 0; i < notas.length; i++) {
//     novasNotas.push(notas[i]);
// }

// novasNotas.push(10)

// console.log(`As novas notas são: ${novasNotas}`);
// console.log(`As notas originais são: ${notas}`);


// O mesmo problema pode ser resolvido com menos código


const novasNotas = [5, ...notas, 10]; // colocando os 3 pontos, o array original é copiado para a nova variável.

//novasNotas.push(10);Adicionando o valor de 10 no final da variavel novasNotas sem alterar o array original.

// Podemos eliminar uma linha de código como a instrução novasNotas.push(10); colocando o valor de 10 no final da de claração da variável novasNotas assim: const novasNotas = [...notas, 10];, Isso fará com que o valor de 10 seja adicionado juntamente com as outras nota da variável notas.

console.log(`As novas notas são: ${novasNotas}`); // Imprimindo nova lista
console.log(`As notas originais são: ${notas}`); // Imprimindfo lista original
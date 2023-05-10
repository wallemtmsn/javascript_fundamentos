const notas = [10, 9.5, 8, 7, 6];

// DESAFIO DE FAZER ADICIONAR UM PONTO EXTRA PARA CADA NOTA USANDO O forEach.
// let novaLista = []

// notas.forEach((nota) => {
// //                         Se / retorna/ Se não
//     novaLista.push(nota +1 >= 10 ? 10 : nota +1); // Usando operador ternário "?"
// })

// console.log(novaLista);

// Usando o maps para criar atualizar a lista de notas com novos valores.

//const notasAtualizadas = notas.map((nota) => {
//  return nota + 1;
//});

//console.log(notasAtualizadas);


// Usando operador ternario para não deixar a nota passar de 10.
const notasAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas);
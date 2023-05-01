// Forma não indicada pra criar e armazenar dados para nota
// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const nota4 = 7.5;
// const media = (nota1 + nota2 + nota3 + nota4) / 4;

// console.log(media)

// Forma indicada para armazenar dados e usar para calcular.

const notas = [10, 6.5, 8, 7.5];

//const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

//console.log(media);

soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i] / notas.length;
}
console.log(soma);
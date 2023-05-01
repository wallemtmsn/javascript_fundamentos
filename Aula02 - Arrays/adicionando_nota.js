// Adicionando valores em um array

const notas = [10, 6.5, 8];
notas.push(7.5)
soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i] / notas.length;
}
console.log(soma);


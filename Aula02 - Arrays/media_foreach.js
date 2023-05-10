const notas = [10, 6.5, 8, 7.5];

// let somaNotas = 0;
// notas.forEach(function(nota) {
//     somaNotas += nota;
// })
// const media = (somaNotas / notas.length);
// console.log(`A soma das notas é: ${media}`);

// Adicionando o indice de cada elemento da variaval notas

// let somaNotas = 0;
// notas.forEach(function(nota, indice) {
//     somaNotas += nota;
//     console.log(indice);
// })
// const media = (somaNotas / notas.length);
// console.log(`A soma das notas é: ${media}`);


// Executa o callback da mesma forma anterior.

let somaNotas = 0;
notas.forEach((nota) => {
    somaNotas += nota;
})
const media = (somaNotas / notas.length);
//console.log(`A soma das notas é: ${media}`);


// OUTRA FORMA DE UTILIZAR A FORMA DE FUNÇÕES CALLBACKS É FAZENDO A FUNÇÃO EXTERNA COMO NO EXEMPLO A SEGUIR:

const nomes = ['Carol', 'Wallem', 'Noah', 'Gael']

function imprimeNomes (nome){
    console.log(nome)
}

// nomes.forEach(imprimeNomes);

// Outro exemplo com notas.

const listaDeNotas = [10, 20, 30, 40, 50];

function imprimeNotas (nota) {
    console.log(nota)
}

listaDeNotas.forEach(imprimeNotas)